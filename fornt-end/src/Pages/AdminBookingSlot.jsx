import React from 'react'
import Adminheader from '../Components/AdminHeader/Adminheader'
import AdminSideBar from '../Components/AdminSideBar/AdminSideBar'
import BookingSlot from '../Components/BookingSlot/BookingSlot'
function AdminBookingSlot() {
  return (
    <div>

    <Adminheader/>
    <div style={{display:"flex"}}>

    <AdminSideBar/>
    
    <BookingSlot/>
    
    
    </div>
    </div>
  )
}

export default AdminBookingSlot