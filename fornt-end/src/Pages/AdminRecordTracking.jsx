import React from 'react'
import Adminheader from '../Components/AdminHeader/Adminheader'
import AdminSideBar from '../Components/AdminSideBar/AdminSideBar'

import RecordTracking from '../Components/RecordTracking/RecordTracking'

function AdminRecordTracking() {
  return (
    <div>

    <Adminheader/>
    <div style={{display:"flex"}}>

    <AdminSideBar/>
    
    
    <RecordTracking/>
    
    </div>
    </div>
  )
}

export default AdminRecordTracking
