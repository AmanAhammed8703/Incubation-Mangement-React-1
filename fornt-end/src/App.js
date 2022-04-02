
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Components/Login/Login';
import UserHomePage from './Pages/UserHomePage';
import UserHomeNextPage from './Pages/UserHomeNextPage'
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminHomePage from './Pages/AdminHomePage';
import AdminBookingSlot from './Pages/AdminBookingSlot';
import AdminRecordTracking from './Pages/AdminRecordTracking';


function App() {
  
  return (
    <BrowserRouter>
    <div>

    <Routes>
      <Route  path='/' element={<LoginPage/>}/>
      <Route  path='/signup' element={<SignupPage/>}/>
      <Route  path='/userhome' element={<UserHomePage/>}/>
      <Route  path='/userhome/next' element={<UserHomeNextPage/>}/>
      <Route  path='/admin' element={<AdminLoginPage/>}/>
      <Route  path='/adminhome/applicantslist' element={<AdminHomePage/>}/>
      <Route  path='/adminhome/bookingSlot' element={<AdminBookingSlot/>}/>
      <Route  path='/adminhome/recordTrack' element={<AdminRecordTracking/>}/>
      

     
      
    </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
