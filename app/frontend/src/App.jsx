import React from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar.jsx';
import Navbar2 from './components/Navbar2.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Html from './pages/Html';
import CoursesPage from './pages/CoursesPage.jsx';
import CourseContent from './pages/CourseContent.jsx';
import SelectLanguage from './pages/SelectLanguage.jsx';
import QuizPage from './pages/QuizPage.jsx';


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
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:id" element={<CourseContent />} />
            <Route path="/select-language" element={<SelectLanguage />} />
            <Route path="/quiz/:language" element={<QuizPage />} />
         </Routes>
         
      </>
   );
};

export default App;
