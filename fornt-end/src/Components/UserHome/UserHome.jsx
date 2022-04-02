import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {API_BASE_URL} from '../../constants/url'
import { Grid, TextField, Typography, styled, Button, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material'

// import SendIcon from '@mui/icons-material/Send';
import './UserHome.css'
import axios from 'axios'

function UserHome() {
  let userData=JSON.parse(localStorage.getItem("userData"))
  const initialValues={
    Name:"",
    Address:"",
    City:"",
    State:"",
    EmailId:"",
    Phone:"",
    CompanyName:"",
    aboutBackground:"",
    aboutCompany:"",
    aboutProblem:"",
    aboutSolution:"",
    aboutValueProposition:"",
    aboutCompetetors:"",
    aboutRevenueModal:"",
    aboutPotential:"",
    aboutPlan:"",
    incubationType:"",
    aboutBussinessProposal:""

  }

  const [formData, setFormData] = useState(initialValues)
  const [logo, setLogo] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  

  const handleOnChange = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

    
    console.log(logo); 
  }

  useEffect(() => {
    if(userData.user){

      window.scroll(0, 0)
    }else{
      navigate('/')
    }
  }, [])
   
  const handleImage =(e)=>{
    
    
    setLogo(e.target.files[0])
  }
  const handleSubmit = (e)=>{
    if(!formData.Name||!formData.Address||!formData.City||!formData.State||!formData.EmailId||!formData.Phone||!formData.CompanyName||!formData.aboutBackground||!formData.aboutCompany||!formData.aboutProblem||!formData.aboutSolution||!formData.aboutValueProposition||!formData.aboutCompetetors||!formData.aboutRevenueModal||!formData.aboutPotential||!formData.aboutPlan||!formData.incubationType||!formData.aboutBussinessProposal){
      setErrorMessage("Every field shoud be filled")
    }else{
      formData.status="new"
      formData.userid=userData.id
      const data=new FormData()
      data.append("logo",logo)
      data.append("data",JSON.stringify(formData))
      const config={
        headers:{
          'Content-type':'multipart/form-data'
        }
      }
    
      

      axios.post(`${API_BASE_URL}/application`,data,config)
     

    }
  }

  return (
    <div className='wrapper'>
      <h1 >APPLICATION FOR INCUBATION</h1>
      <p style={{color:"red",textAlign:"center"}}>{errorMessage}</p>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="Name" name="Name" variant="outlined" onChange={handleOnChange} />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="Address" onChange={handleOnChange} name="Address" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="City" onChange={handleOnChange} name="City" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="State" onChange={handleOnChange} name="State" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="Email Id" onChange={handleOnChange} name="EmailId" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="Phone No" onChange={handleOnChange} name="Phone" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <TextField className='inputfields' id="outlined-basic" label="Company Name" onChange={handleOnChange} name="CompanyName" variant="outlined" />

        </Grid>
        <Grid item xs={12} sm={6}   >
          <label className='logolabel'>Company Logo:</label><br />
          <input className='logoupload' type={"file"} onChange={handleImage} />

          

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Describe your team and background"
            name="aboutBackground"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Describe your compant and produccts"
            name="aboutCompany"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Describe the problem you are trying to solve"
            name="aboutProblem"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="What is unique about your solution"
            name="aboutSolution"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="What is your value proposition for your customer"
            name="aboutValueProposition"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Who are your competetors and what is your competetive advantage?"
            name="aboutCompetetors"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Explain your revenue model "
            name="aboutRevenueModal"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="What is the potential market size of the product?"
            name="aboutPotential"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>
        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="How do you market or plan to market your product and services"
            name="aboutPlan"
            onChange={handleOnChange}
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
              name="incubationType"
              onChange={handleOnChange}
            >
              <FormControlLabel value="Physical" control={<Radio />} label="Physical Incubation" />
              <FormControlLabel value="Virtual" control={<Radio />} label="Virtual Incubation" />

            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={12}   >
          <TextField
            className='inputfields'
            id="outlined-multiline-static"
            label="Upload a detailed bussiness proposal"
            name="aboutBussinessProposal"
            onChange={handleOnChange}
            multiline
            rows={4}
          />

        </Grid>



        <Button sx={{ mt: 5, marginLeft: 'auto', marginRight: 'auto' }} className='submitbutton' variant="contained" onClick={handleSubmit}>
          SUBMIT
        </Button>

      </Grid>
    </div>


  )
}

export default UserHome