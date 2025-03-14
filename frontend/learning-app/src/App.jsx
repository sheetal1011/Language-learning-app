import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/Navbar';
const App = () => {
   return (
      <>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/html" element={<Html />} />
            <Route path="/css" element={<Css />} />
            
         </Routes>
      </>
   );
};

export default App;
