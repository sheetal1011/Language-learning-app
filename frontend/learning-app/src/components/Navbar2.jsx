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
    <Navbar expand="lg" className={`navbar2 ${scrolled ? "scrolled": ""}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as="div" className={activeLink === 'html' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('html')}><Link to="/html" className="navbar-link">HTML</Link></Nav.Link>
            <Nav.Link as="div" className={activeLink === 'css' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('css')}><Link to="/css" className="navbar-link">CSS</Link></Nav.Link>
            <Nav.Link href="#javascript" className={activeLink === 'javascript' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('javascript')}>JAVASCRIPT</Nav.Link>
            <Nav.Link href="#php" className={activeLink === 'php' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('php')}>PHP</Nav.Link>
            <Nav.Link href="#python" className={activeLink === 'python' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('python')}>PYTHON</Nav.Link>
            <Nav.Link href="#java" className={activeLink === 'java' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('java')}>JAVA</Nav.Link>
            <Nav.Link href="#c" className={activeLink === 'c' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('c')}>C</Nav.Link>
            <Nav.Link href="#cpp" className={activeLink === 'cpp' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('cpp')}>C++</Nav.Link>
            <Nav.Link href="#c#" className={activeLink === 'c#' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('c#')}>C#</Nav.Link>
            <Nav.Link href="#sql" className={activeLink === 'sql' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sql')}>SQL</Nav.Link>
            <Nav.Link href="#mysql" className={activeLink === 'mysql' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('mysql')}>MYSQL</Nav.Link>
            <Nav.Link href="#reactjs" className={activeLink === 'reactjs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('reactjs')}>REACT.JS</Nav.Link>
            <Nav.Link href="#nodejs" className={activeLink === 'nodejs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nodejs')}>NODE.JS</Nav.Link>
            <Nav.Link href="#django" className={activeLink === 'django' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('django')}>DJANGO</Nav.Link>
            <Nav.Link href="#dsa" className={activeLink === 'dsa' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('dsa')}>DSA</Nav.Link>
         </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;