import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/home';
// import Navbar from './sub-component/navbar';
import Register from './sub-component/register';
import Login from './sub-component/login';
import AdminDashboard from './Administrator/dashboard';
import RegisterForm from './sub-component/demo1';
// import NavbarAfter from './sub-component/navbarafterTanent';
import UploadDoc from './Component/uploadDoc';
import ProperTymaintanance from './sub-component/propertymaintanance';
import Rentalflate from './Component/rental-Flate';
import Checkout from './Component/checkout';
import ProperNews from './Component/propert-newa';
import AllUsers from './Administrator/Components/AllUsers';
import NoteState from './Context/notes/noteContext';
import AllQuery from './Administrator/Components/AllQuery';
import AllRentalDetails from './Administrator/Components/RentalflateDetail';
import CreateUser from './Administrator/Components/createUser';
import UploadNews from './Administrator/Components/uploadnews';
import UploadForRentFlate from './Component/uploadRentalFlat';
import AllNews from './Administrator/Components/allNews';
import AllDocuments from './Administrator/Components/AllDocuments';
import Navbar from './sub-component/navbar';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
 

  return (
    <>
       <NoteState>
      <Router>
        <Routes>
        <Route element={<Navbar setIsLoggedIn={setIsLoggedIn}/>} path='/navbar' />
          <Route element={<Home />} path='/' />
          <Route element={<Register />} path='/register' />
          <Route element={<Login setIsLoggedIn={setIsLoggedIn}/>} path='/login' /> 
          <Route element={<RegisterForm />} path='/demo1' />
          <Route element={<UploadDoc/>} path='/uploaddoc' />
          <Route element={<ProperTymaintanance/>} path='/property' />
          <Route element={<Rentalflate/>} path='/rentalflate' />
          <Route element={<Checkout setIsLoggedIn={setIsLoggedIn}/>} path='/checkout' />

          <Route element={<UploadForRentFlate/>} path='/uploadflateforrent' />
          <Route element={<ProperNews/>} path='/propertynews' />
          <Route element={<AllQuery/>} path='/allquery' />
          <Route element={<CreateUser/>} path='/createuser' />
          <Route element={<UploadNews/>} path='/uploadnews' />
          <Route element={<AllRentalDetails/>} path='/rentalDetail' />
          <Route element={<AdminDashboard />} path='/admindashboard' />
          <Route element={<AllUsers />} path='/allusers'/>
          <Route element={<AllNews />} path='/allnews'/>
          <Route element={<AllDocuments />} path='/alldocuments'/>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}