import React from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar.jsx';
import Navbar2 from './components/Navbar2.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quizzes from './pages/Quizzes.jsx';
import Quiz from './pages/Quiz.jsx';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';
import Php from './pages/Php.jsx';
import Python from './pages/Python.jsx';
import Java from './pages/Java.jsx';
import C from './pages/C';
import Csharp from './pages/Csharp';
import Cpp from './pages/Cpp';

const App = () => {
   return (
      <>
     
      <NavBar/>
      <Navbar2/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quiz/:language" element={<Quiz />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path='/javascript' element={<Javascript/>} />
            <Route path='/php' element={<Php/>} />
            <Route path='/python' element={<Python/>} />
            <Route path='/java' element={<Java/>} />
            <Route path='/c' element={<C/>} />
            <Route path='/csharp' element={<Csharp/>} />
            <Route path='/cpp' element={<Cpp/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
         </Routes>
         
      </>
   );
};

export default App;
