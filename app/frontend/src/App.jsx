import React from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar.jsx';
import Navbar2 from './components/Navbar2.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Html from './pages/Html';


const App = () => {
   return (
      <>
     
      <NavBar/>
      <Navbar2/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
         </Routes>
         
      </>
   );
};

export default App;
