var express = require('express');
var router = express.Router();
var helper= require('../helper/userHelper')
var jwt = require('jsonwebtoken')
const multer = require('multer')
const fs= require('fs')

/* GET users listing. */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, './public/temp')
},
filename: function (req, file, cb) {
  cb(null,"companylogo.jpg")
}
})
var upload = multer({ storage: storage }).single('logo')
 


router.post('/signup', function(req, res, next) {
  try{
    const {userName,email,password,confirmpassword}=req.body

    if(!userName||!email||!password||!confirmpassword){
      res.status(400).json({error:"Enter the requires fields"})
    }else if(password.length<6){
      res.status(400).json({error:"Password should have minimum 6 letters"})

    }else if(password !== confirmpassword){
      res.status(400).json({error:"Passwords doesn't match"})
    }else{
      helper.doSignUp(req.body).then((resp)=>{
      

          if(resp.userExist){
            res.status(400).json({error:"User Exists in the given email id"})
          }else{
            console.log(req.body);
            res.status(200).json({message:"success"});
          }
        
      })  
    }

  }catch(err){
    console.log(err);
  }
  
});
router.post('/login',(req,res)=>{
  try{
    
    const {email,password}=req.body
    if(!email||!password){
      res.status(400).json({error:"Enter all required fields"})
    }else{
      helper.doLogin(req.body).then((response)=>{
        if(response.loggedIn){
          
          const token=jwt.sign({email:email,id:response.id},process.env.JWT_SECRET);
          res.status(200).json({id:response.id,email:email,token:token})
          

        }else{  
          res.status(400).json({error:"Email or password is incorrect"})
        }
      })

    }
  }catch(err){
    console.log(err);

  }

})

router.post('/application',(req,res)=>{
  
  upload(req, res, function (err) {
    console.log(req);
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }else{
      
      console.table(JSON.parse(req.body.data));
      const formData=JSON.parse(req.body.data)
      helper.saveApplication(formData).then(()=>{

        var oldPath = './public/temp/companylogo.jpg'
        var newPath = './public/CompanyLogo/'+formData.userid+'.jpg'

        fs.rename(oldPath,newPath,function(err){
          if(err){
            throw err;
          } 
        })
        res.status(200).json({message:"success"})
      }).catch((err)=>{
        console.log(err);
        res.status(400).json(err)
      })
    }
    })
})


module.exports = router;
