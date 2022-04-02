
import * as React from 'react';
import {useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LinearProgress } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/url'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
 
  ];
function RecordTracking() {
  const [approvedList, setApprovedList] = useState([])
  const getApprovedList=async()=>{
    await axios.get(`${API_BASE_URL}/admin/getApprovedList`).then((response)=>{
      console.log(response.data);
      setApprovedList(response.data)
    })
  }
  useEffect(() => {
    getApprovedList(); 
  
   
  }, [])
  
  return (
    <TableContainer sx={{m:5}}>
        <h1>New Applicant List</h1>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Si.No</TableCell>
          <TableCell align="right">Company Name</TableCell>
          <TableCell align="right">Company details</TableCell>
          <TableCell align="left">Registration approved</TableCell>
          <TableCell align="left">Under process</TableCell>
          <TableCell align="right">Apporoved</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {approvedList.map((row,index) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
             {index+1}
            </TableCell>
            <TableCell align="right">{row.CompanyName}</TableCell>
            <TableCell align="right">{row.aboutCompany}</TableCell>
            <TableCell align="right" colSpan={3}><LinearProgress variant='determinate' value={row.booked?100:50}/></TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default RecordTracking