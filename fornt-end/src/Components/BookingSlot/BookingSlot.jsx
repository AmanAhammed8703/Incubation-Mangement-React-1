import React, { useState, useEffect } from 'react'
import { Grid, Paper, Box, Divider ,Modal,Typography,FormControl,InputLabel,Select,MenuItem,Button} from '@mui/material'
import './BookingSlot.css'
import { API_BASE_URL } from '../../constants/url'
import axios from 'axios'


const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};


function BookingSlot() {
  const [slotA, setSlotA] = useState([])
  const [slotB, setSlotB] = useState([])
  const [slotC, setSlotC] = useState([])
  const [slotD, setSlotD] = useState([])
  const [slotE, setSlotE] = useState([])
  const [slotF, setSlotF] = useState([])

  const [open, setOpen] = useState(false)
  const [approvedCompanies, setApprovedCompanies] = useState([])
  const [selectedCompany, setSelectedCompany] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [refresh, setRefresh] = useState("")
  const [selectedSlot, setSelectedSlot] = useState("")
  const [selectedSlotName, setSelectedSlotName] = useState("")
  const handleClose = () =>{setErrorMessage(null);setOpen(false)}; 
  const getSlots = () => {
    axios.get(`${API_BASE_URL}/admin/getSlots`).then((response) => {
      console.log(response.data);
      setSlotA(response.data.slotA)
      setSlotB(response.data.slotB)
      setSlotC(response.data.slotC)
      setSlotD(response.data.slotD)
      setSlotE(response.data.slotE)
      setSlotF(response.data.slotF)
    })
  }
const bookSlot=async()=>{
  if(!selectedCompany){
    setErrorMessage("Select a company")
  }else{

    const data={
      slot:selectedSlotName, 
      id:selectedSlot ,
      company:selectedCompany
    }
    await axios.post(`${API_BASE_URL}/admin/bookSlot`,data).then((response)=>{
      handleClose();
    })
    setRefresh(selectedCompany)
  }

}
const getApprovedCompanies=async()=>{
  await axios.get(`${API_BASE_URL}/admin/getApprovedCompanies`).then((response)=>{
    console.log(response.data);
    setApprovedCompanies(response.data)
  })
  setOpen(true)

}



  useEffect(() => {
    getSlots();
   

  }, [refresh])

  return (
    <div className='wrapper1'>
      <div className='wrapper2'>
        <div className='wrapper-head'>

          <Box
            sx={{
              display: 'flex',
              '& > :not(style)': {
                m: 1,
                width: 110,
                height: 110,
              },
            }}
          >
            {slotA.map((slot) => (

              <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                setSelectedSlotName(slot.slot);
                setSelectedSlot(slot._id);
                getApprovedCompanies()
              }:""} /> 
            ))}


          </Box>
        </div>
        <hr style={{ marginBottom: "40px" }} />

        <hr style={{ marginBottom: "40px" }} />
        <div className='vertical-wrapper'>

          <div className='vertical-1'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                '& > :not(style)': {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              {slotB.map((slot) => (

                <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                  setSelectedSlot(slot._id);
                  getApprovedCompanies()
                }:""}/>
              ))}



            </Box>
          </div>
          <Divider sx={{ borderRightWidth: 2, background: "black" }} orientation="vertical" flexItem />
          <div className='vertical-1'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                '& > :not(style)': {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              {slotC.map((slot) => (

                <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                  setSelectedSlot(slot._id);
                  getApprovedCompanies()
                }:""}/>
              ))}



            </Box>
          </div>
          <Divider sx={{ borderRightWidth: 2, background: "black" }} orientation="vertical" flexItem />
          <div className='vertical-1'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                '& > :not(style)': {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              {slotD.map((slot) => (

                <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                  setSelectedSlot(slot._id);
                  getApprovedCompanies()
                }:""} />
              ))}


            </Box>
          </div>
          <Divider sx={{ borderRightWidth: 2, background: "black" }} orientation="vertical" flexItem />
          <div className='vertical-1'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                '& > :not(style)': {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              {slotE.map((slot) => (

                <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                  setSelectedSlot(slot._id);
                  getApprovedCompanies()
                }:""} />
              ))}


            </Box>
          </div>
          <Divider sx={{ borderRightWidth: 2, background: "black" }} orientation="vertical" flexItem />
          <div className='vertical-1'>
            <Box
              sx={{
                display: 'flex',
                flexWrap: "wrap",
                '& > :not(style)': {
                  m: 1,
                  width: 100,
                  height: 100,
                },
              }}
            >
              {slotF.map((slot) => (

                <Paper variant="outlined" sx={{ backgroundColor: slot.booked ? 'rgba(0, 0, 0, 0.397)' : '#ffff' }}onClick={!slot.booked?()=>{
                  setSelectedSlot(slot._id);
                  getApprovedCompanies()
                }:""} />
              ))}


            </Box>
          </div>

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose a company
          </Typography>
          <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Company name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCompany}
          label="Company"
          onChange={(e)=>setSelectedCompany(e.target.value)}
        >  
          {approvedCompanies.map((company)=>( 

          <MenuItem value={company._id}>{company.CompanyName}</MenuItem>
          ))}
          
        </Select>
      </FormControl>
    </Box>
    {errorMessage?<p style={{color:"red"}}>{errorMessage}</p>:""}
    <Button variant="contained" sx={{mt:4,float:"right"}} onClick={bookSlot}>Select</Button>
        
        </Box>
      </Modal>
    </div>
  )
}

export default BookingSlot