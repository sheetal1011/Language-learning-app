import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from "react-bootstrap";
import { useState, useEffect } from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';
import Html from '../pages/Html';
import Css from '../pages/Css';

export const Navbar2 = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className='navbar2'>
      <Container>
        
        <Navbar.Collapse id="lang">
          <Nav className="languages">
            <Nav.Link as="div"><Link to="/html" className="navbar-link">HTML</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/css" className="navbar-link">CSS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/javascript" className="navbar-link">JAVASCRIPT</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/php" className="navbar-link">PHP</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/python" className="navbar-link">PYTHON</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/java" className="navbar-link">JAVA</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/c" className="navbar-link">C</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/cpp" className="navbar-link">C++</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/c#" className="navbar-link">C#</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/sql" className="navbar-link">SQL</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/mysql" className="navbar-link">MYSQL</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/reactjs" className="navbar-link">REACT.JS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/nodejs" className="navbar-link">NODE.JS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/django" className="navbar-link">DJANGO</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/dsa" className="navbar-link">DSA</Link></Nav.Link>
         </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navbar2;