import React from "react";
import {Paper,Box,Typography,TextField,Button,Link} from '@mui/material';
import {useNavigate} from 'react-router-dom'
import useLoginStyles from "./AdminLoginStyle";


export default function AdminLogin(){
    
 
    const styles=useLoginStyles()
    const navigate= useNavigate()
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
            

            <Paper elevation={3} >
               <Typography variant="h4" className={styles.SignupHeading} >Admin Log In</Typography>
               <TextField id="standard-basic" label="Emai Id" className={styles.UserName}variant="filled"sx={{mt:3}} />
               <TextField id="standard-basic" label="Passwod" type={"password"} className={styles.UserName}variant="filled" sx={{mt:3}}/>
               <Button variant="contained" className={styles.SignupButton}sx={{mt:3,mb:2}}>Log In</Button><br />
              
               
            </Paper>
           
    </Box>

        </div>
    )}