import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Grid,TextField, Typography,styled,Button,Radio,RadioGroup,FormControl,FormControlLabel,FormLabel} from '@mui/material'

// import SendIcon from '@mui/icons-material/Send';
import './UserHome.css'

function UserHomeNext() {
const navigate= useNavigate()
  
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'green',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  


  return (
    <div className='wrapper'>
      <h1 >APPLICATION FOR INCUBATION</h1>
    <Grid container spacing={3}>
    
      
      <Grid item xs={12} sm={12}   >
      <CssTextField
          className='inputfields'
          id="outlined-multiline-static"
          label="Who are your competetors and what is your competetive advantage?"
          multiline
          rows={4}
          />
      
      </Grid>
      <Grid item xs={12} sm={12}>
      <CssTextField
          className='inputfields'
          id="outlined-multiline-static"
          label="Explain your revenue model "
          multiline
          rows={4}
        />
      
      </Grid>
      <Grid item xs={12} sm={12}   >
      <CssTextField
          className='inputfields'
          id="outlined-multiline-static"
          label="What is the potential market size of the product?"
          multiline
          rows={4}
          />
      
      </Grid>
      <Grid item xs={12} sm={12}   >
      <CssTextField
          className='inputfields'
          id="outlined-multiline-static"
          label="How do you market or plan to market your product and services"
          multiline
          rows={4}
        />
      
      </Grid>
      <Grid item xs={12} sm={12}   >
          
          <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Types of incubation needed</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Physical Incubation" />
    <FormControlLabel value="male" control={<Radio />} label="Virtual Incubation" />
   
  </RadioGroup>
</FormControl>
      </Grid>

      <Grid item xs={12} sm={12}   >
      <CssTextField
          className='inputfields'
          id="outlined-multiline-static"
          label="Upload a detailed bussiness proposal"
          multiline
          rows={4}
        />
      
      </Grid>
      

      
      <Button sx={{mt:5,marginLeft:'auto',marginRight:'auto'}} className='submitbutton' variant="contained"  onClick={()=>navigate('/userhome')}>
        SUBMIT
      </Button>
      

    </Grid>
    </div>
   
   
  )
}

export default UserHomeNext