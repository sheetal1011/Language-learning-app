import { Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import Login from './pages/Login';

const App = () => {
   return (
      <>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      </>
   );
};

export default App;
