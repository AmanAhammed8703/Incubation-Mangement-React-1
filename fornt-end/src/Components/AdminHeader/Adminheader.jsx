import *as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import './AdminHeader.css'

function Adminheader() {
  
  return (
    
    <div style={{overflowY:"hidden"}}>
    <Box sx={{ flexGrow: 1 
        
    }}>

    <AppBar position="static" sx={{backgroundColor:"#0f3d25"}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin
        </Typography>
        
      </Toolbar>
    </AppBar>
  </Box>
  

    </div>
  )
}

export default Adminheader