import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar} from "react-bootstrap";
import { useState, useEffect } from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';

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
            <Nav.Link as="div"><Link to="/course/6807ac5f8bf06dfdfcd95445" className="navbar-link">HTML</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807bce08bf06dfdfcd95447" className="navbar-link">CSS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807bd3c8bf06dfdfcd95448" className="navbar-link">JAVASCRIPT</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807bdea8bf06dfdfcd95449" className="navbar-link">PHP</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807be888bf06dfdfcd9544a" className="navbar-link">JAVA</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807beef8bf06dfdfcd9544b" className="navbar-link">PYTHON</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807c8c88bf06dfdfcd9544d" className="navbar-link">C</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807c8e88bf06dfdfcd9544e" className="navbar-link">C++</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807c9078bf06dfdfcd9544f" className="navbar-link">MongoDB</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807cca08bf06dfdfcd95450" className="navbar-link">SQL</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/6807ccbf8bf06dfdfcd95451" className="navbar-link">MYSQL</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/68090af58bf06dfdfcd95461" className="navbar-link">REACT.JS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/" className="navbar-link">NODE.JS</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/" className="navbar-link">DJANGO</Link></Nav.Link>
            <Nav.Link as="div"><Link to="/course/" className="navbar-link">DSA</Link></Nav.Link>
         </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Navbar2;