import React,{useState} from "react";
import axios from "axios";
import {API_BASE_URL} from '../../constants/url'
import {Paper,Box,Typography,TextField,Button,Link} from '@mui/material';
import {useNavigate} from 'react-router-dom'

import useStyles from "./SignUpStyle";

 
export default function Signup(){
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate=useNavigate()
    function submitSignUp(){
   
      const signUpData={
        userName,
        email,
        password,
        confirmpassword
      }
      if(!userName||!email||!password||!confirmpassword){
        setErrorMessage("Enter all required fields")
      }else if(password.length<6){
      setErrorMessage("Password should have minimum 6 letters")
  
      }else if(password !== confirmpassword){
        setErrorMessage("Passwords doesn't match")
      }else{
       
        axios.post(`${API_BASE_URL}/signup`,signUpData).then(()=>{
         navigate('/')
       }).catch((error)=>{
         console.error(error.response.data.error);
         setErrorMessage(error.response.data.error)


       })
      }
    }

    const styles=useStyles()
    return(
        <div >
          

            
             <Box
             
      sx={{
        
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          margin:"auto",
          width: 450,
          height: 600,
          mt:10,
        textAlign:'center'

          
        },  
      }}
    >
            

            <Paper elevation={6} >
               <Typography variant="h4" className={styles.SignupHeading} >Sign Up</Typography>
               {errorMessage?<p  className={styles.ErrorMessage}>{errorMessage}</p>:""}
               <TextField id="filled-basic" label="User Name" className={styles.UserName}variant="filled" sx={{mt:3}} onChange={(e)=>setUserName(e.target.value)} />
               <TextField id="standard-basic" label="Emai Id" className={styles.UserName}variant="filled"sx={{mt:3}}onChange={(e)=>setEmail(e.target.value)} />
               <TextField id="standard-basic" label="Passwod" type={"password"} className={styles.UserName}variant="filled" sx={{mt:3}} onChange={(e)=>setPassword(e.target.value)}/>
               <TextField id="standard-basic" label="Confirm Password" type={"password"} className={styles.UserName}variant="filled" sx={{mt:3}} onChange={(e)=>setConfirmPassword(e.target.value)}/>
               <Button variant="contained" className={styles.SignupButton}sx={{mt:3,mb:2}} onClick={submitSignUp}>Sign Up</Button><br />
               <Link className={styles.GoLoginLink} onClick={()=>
                navigate('/')
            } >already have an account?</Link>
               
            </Paper>
           
    </Box>

        </div>
    )
}