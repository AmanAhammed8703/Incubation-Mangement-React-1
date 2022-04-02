import React ,{useState,useEffect}from 'react'
import './AdminSideBar.css'
import { color } from '@mui/system';
import { List ,ListItem,ListItemIcon,ListItemText,Grid} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom'


function AdminSideBar() {
const [logout, setLogout] = useState("")
  const logoutFunction=()=>{ 
    localStorage.removeItem("adminData")
    setLogout("logout")
  }
    const navigate=useNavigate()
    const sideBarIcons=[<ArticleIcon/>,<CalendarViewMonthIcon/>,<BookIcon/>,<LogoutIcon/>]
  const sideBarNav=['applicantslist','recordTrack','bookingSlot','logOut']
  useEffect(() => {
    let admin=JSON.parse(localStorage.getItem("adminData"))
    if(admin){

      
    }else{
      navigate('/admin')
    }
  }, [logout])
  
  return (
    <div className='sidebar' >
    <List>
       


          {['Applicants list', 'Record Track','Booking Slots','Log out'].map((text, index) => (
              <ListItem  button key={text} sx={{color:"white"}} onClick={()=>{text=='Log out'?logoutFunction():navigate(`/adminhome/${sideBarNav[index]}`)}}>
                   <Grid container>
            <Grid item xs={12}md={4}>
              <ListItemIcon sx={{color:"white"}}>
                {sideBarIcons[index]}
              </ListItemIcon>
              </Grid>
              <Grid item xs={12} md={8}>
              <ListItemText className='sidebarlist' primary={text} />
              

              </Grid>
          </Grid>
            </ListItem>
          ))}
          
        </List>
    </div>
  )
}

export default AdminSideBar