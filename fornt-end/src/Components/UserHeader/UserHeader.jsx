import React,{useEffect,useState}from 'react'
import {useNavigate} from 'react-router-dom'
import {Box,AppBar,Toolbar,IconButton,Typography,Button} from '@mui/material' 
import MenuIcon from '@mui/icons-material/Menu';   

function UserHeader() {
    const [logedOut, setLogedOut] = useState("")
    const navigate=useNavigate()
const logout=()=>{
    localStorage.removeItem("userData")
    setLogedOut("loggedOut")
    
}
useEffect(() => {
  let user=JSON.parse(localStorage.getItem('userData'))
  if(!user){
    navigate('/')
  }

 
}, [logedOut])

  return (
    <div>
         <Box sx={{ flexGrow: 1 ,backgroundColor:"black"}}>
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={()=>logout()}>LogOut</Button>
        </Toolbar>
      </AppBar>  
    </Box>
    </div>
  )
}

export default UserHeader