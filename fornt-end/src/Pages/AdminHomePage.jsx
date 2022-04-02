import React from 'react'
import Adminheader from '../Components/AdminHeader/Adminheader'
import AdminSideBar from '../Components/AdminSideBar/AdminSideBar'
import ApplicantList from '../Components/ApplicantList/ApplicantList'
import RecordTracking from '../Components/RecordTracking/RecordTracking'
import BookingSlot from '../Components/BookingSlot/BookingSlot'

function AdminHomePage() {
  return (
    <div>

    <Adminheader/>
    <div style={{display:"flex"}}>

    <AdminSideBar/>
    
    <ApplicantList/>
    
    </div>
    </div>
  )

  
}

export default AdminHomePage