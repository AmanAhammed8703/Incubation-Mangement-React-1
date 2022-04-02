var express = require('express');
const adminHelper = require('../helper/adminHelper');
var jwt = require('jsonwebtoken')
var router = express.Router();

/* GET home page. */
const checkToken=(req,res,next)=>{
  console.log("hellyeah");
  console.log(req.headers);
  console.log(req.rawHeaders);
  let token=req.headers.authorization
  console.log(req.headers.authorization);
  if(token){
    let auth=jwt.verify(token, process.env.JWT_SECRET)
   if(auth){
     console.log("yeah!!");
     next()
   }
  }else{
    res.status(400).json({errorMessage:"Authentication error"})
  }     
}   

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/login',(req,res)=>{
  try{
    
    const {email,password}=req.body
    if(!email||!password){
      res.status(400).json({error:"Enter all required fields"})
    }else{
      adminHelper.doLogin(req.body).then((response)=>{
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
router.get('/getNewList',checkToken,(req,res)=>{
  console.log(req.headers.authorization);
  adminHelper.getNewList().then((resp)=>{
    console.log(resp);
    res.status(200).json(resp)
  })
})
router.post('/changeStatus',checkToken,(req,res)=>{
  console.log("inside change");
  adminHelper.changeStatus(req.body).then((resp)=>{
    
    res.status(200).json({messgae:"status change success"})
  })
})     
router.get('/getPendingList',(req,res)=>{
  adminHelper.getPendingList().then((response)=>{
    res.status(200).json(response)
  })
   
})
router.get('/getApprovedList',(req,res)=>{
  adminHelper.getApprovedList().then((response)=>{
    console.log(response);
    res.status(200).json(response)
  })
})
router.post('/getCompanyDetails',(req,res)=>{
  console.log(req.body.id);
  console.log("yess");
  adminHelper.getCompanyDetails(req.body.id).then((response)=>{
    console.log(response);
    res.status(200).json(response)
  })
})
router.get('/getSlots',(req,res)=>{
  adminHelper.getSlots().then((response)=>{
    res.status(200).json(response)
  })
})
router.get('/getApprovedCompanies',(req,res)=>{
  adminHelper.getApprovedList().then((response)=>{
    console.log(response);
    res.status(200).json(response)
  })
})
router.post('/bookSlot',(req,res)=>{
  adminHelper.bookSlot(req.body.id,req.body.company,req.body.slot).then((response)=>{
    res.status(200).json({message:"booking success"})
  })

})
module.exports = router; 
