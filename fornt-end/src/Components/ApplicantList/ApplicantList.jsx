import * as React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal, Box, Typography, Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { API_BASE_URL } from '../../constants/url'
import api from '../../constants/axios';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflowX:'scroll'
 
};




function ApplicantList() {
  let token
  let config={}
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [newList, setNewList] = useState([])
  const [companyDetails, setCompanyDetails] = useState({})
  const [pendingList, setPendingList] = useState([])
  const [status, setStatus] = useState("")

 

  const getNewList = async () => {
    await api.get(`/admin/getNewList`).then((res) => {
      setNewList(res.data)
    })
  }
  const getPendingList = async () => {
    await axios.get(`${API_BASE_URL}/admin/getPendingList`,config).then((res) => {
      setPendingList(res.data)
    })
  }
  const getComapanyDetails = async (id) => {
    console.log(id);
    const data = {
      id: id
    }
    await axios.post(`${API_BASE_URL}/admin/getCompanyDetails`,data,config).then((response) => {
      console.log(response.data);
      setCompanyDetails(response.data)
    })
    setOpen(true)
    console.log(companyDetails);
  }

  const changeStatus = async(status, id) => {
    const obj = { status, id }
    console.log(config)
    await api.post(`/admin/changeStatus`,obj)
  }
  
  useEffect(() => {
   
    getNewList(); 
    getPendingList();
 

  }, [status])
 
   

  let admin=JSON.parse(localStorage.getItem("adminData"))
  console.log(admin);
  token=admin.token
  console.log(token);
  config= {
    
    headers: {
      
      Authorization:`${token}`
       }  
       
};
  // console.log(newList);


  return (
    <div>
      <TableContainer sx={{ m: 5 }}>
        <h1>New Applicant List</h1>
        <Table sx={{ minWidth: 1050 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Si.No</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Company details</TableCell>
              <TableCell align="right">Control</TableCell>
              <TableCell align="right">Control</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newList.map((tableData) => (
              <TableRow
                key={tableData.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right">{tableData.CompanyName}</TableCell>
                <TableCell align="right">{tableData.aboutCompany}</TableCell>
                <TableCell align="right"><Button variant="outlined" onClick={() => getComapanyDetails(tableData._id)}>Open</Button></TableCell>
                <TableCell align="right"><Button variant="outlined" onClick={() => { setStatus("pending"); changeStatus("Pending", tableData._id) }}>pending</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h1 sx={{ mt: 8 }}>Pendig Applicant List</h1>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Si.No</TableCell>
              <TableCell align="right">Company Name</TableCell>
              <TableCell align="right">Company details</TableCell>
              <TableCell align="right">Control</TableCell>
              <TableCell align="right">Control</TableCell>
              <TableCell align="right">Control</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pendingList.map((tableData) => (
              <TableRow
                key={tableData.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="right">{tableData.CompanyName}</TableCell>
                <TableCell align="right">{tableData.aboutCompany}</TableCell>
                <TableCell align="right"><Button variant="outlined"  >open</Button></TableCell>
                <TableCell align="right"><Button variant="outlined" onClick={() => { setStatus("Approved"); changeStatus("Approved", tableData._id) }}>approve</Button></TableCell>
                <TableCell align="right"><Button variant="outlined" onClick={() => { setStatus("Declined"); changeStatus("Declined", tableData._id) }}>decline</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        fullscreen={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}><br /><br /><br />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Table>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Name</TableCell>
        <TableCell>{companyDetails.Name}</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Header 1</TableCell>
        <TableCell>fgkjdhsfkjgsdfkjhgskdfhjgkjshdfgkjshdfkgljhsdkfjhgskldjfhgkljshdfglkjhsdfkjghskldjhfgkljshdfkjhgskdfjhgksdhjfgl</TableCell>
    </TableRow>
</Table>
        </Box>
      </Modal>
    </div>
  )
}

export default ApplicantList