import React, { useState,useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '../../constants/url'
import { Paper, Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import useLoginStyles from "./LoginStyle";



export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const styles = useLoginStyles()
  const navigate = useNavigate()
 
  
  useEffect(()=>{

    if(props.admin){
      let admin=JSON.parse(localStorage.getItem("adminData"))
    
      if(admin){
       
        navigate('/adminhome/applicantslist')
      }

    }else{ 

      let user=localStorage.getItem("userData");
      if(user){
        navigate('/userhome')
      }
    }
    
  })

  



  function submitLogIn(){
    console.log("insidefun");
    const userLoginData = {
      email,
      password
    }
    if (!email || !password) {
      setErrorMessage("Enter all required fields")
    } else {
      if(props.admin){
        axios.post(`${API_BASE_URL}/admin/login`, userLoginData).then((res)=>{

        console.log(res);
          let admin=true
          let id=res.data.id
          let email=res.data.email
          let token= res.data.token
          
          const userData={
            admin,
            id,
            email,
            token
          }
          localStorage.setItem("adminData",JSON.stringify(userData))
          navigate('/adminhome/applicantslist')
        }).catch((error) => {
          setErrorMessage(error.response.data.error)
        })

      }else{

        
        axios.post(`${API_BASE_URL}/login`, userLoginData).then((res) => {
          console.log(res);
          let user=true
          let id=res.data.id
          let email=res.data.email
          let token= res.data.token
          
          const userData={
            user,
            id,
            email,
            token
          }
          localStorage.setItem("userData",JSON.stringify(userData))
          navigate('/userhome')
        }).catch((error) => {
          setErrorMessage(error.response.data.error)
        })
      }
    }
  }
  return (
    <div >
      <Box

        sx={{

          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            margin: "auto",
            width: 450,
            height: 600,
            mt: 10,
            textAlign: 'center'
          }
        }}
      >


        <Paper elevation={3} >
          <Typography variant="h4" className={styles.SignupHeading} >{props.admin?'Admin Log In':'Log In'}</Typography> 
          {errorMessage?<p className={styles.ErrorMessage}>{errorMessage}</p>:""}
          <TextField id="standard-basic" label="Emai Id" className={styles.UserName} variant="filled" sx={{ mt: 3 }} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="standard-basic" label="Passwod" type={"password"} className={styles.UserName} variant="filled" sx={{ mt: 3 }} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" className={styles.SignupButton} sx={{ mt: 3, mb: 2 }} onClick={submitLogIn}>Log In</Button><br />
          <Link className={styles.GoSignupLink} onClick={()=>navigate('/signup')}>Don't have an account?</Link>

        </Paper>

      </Box>

    </div>
  )
}