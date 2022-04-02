import React from 'react'
import Adminheader from '../Components/AdminHeader/Adminheader'
import AdminSideBar from '../Components/AdminSideBar/AdminSideBar'
import ApplicantList from '../Components/ApplicantList/ApplicantList'
import RecordTracking from '../Components/RecordTracking/RecordTracking'

function ApplicantListPage() {
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

export default ApplicantListPage