import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import CreateListings from "./Pages/CreateListing";
import EditListing from "./Pages/EditListing";
import ForgotPassword from "./Pages/ForgotPassword";
import HomePage from "./Pages/HomePage";
import Listing from "./Pages/Listing";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
      
        <Route path='/' element={<HomePage/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path='/editlisting/:listingId' element={<EditListing/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/profile' element={<PrivateRoute/>}>
            <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact/:landlordId' element={<Contact/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/create-listing' element={<CreateListings/>}/>
        <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
