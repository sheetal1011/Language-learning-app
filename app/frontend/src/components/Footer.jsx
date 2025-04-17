import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../components/Footer.css';
import icon1 from '../assets/nav-icon1.svg';
import icon2 from '../assets/nav-icon2.svg';
import icon3 from '../assets/nav-icon3.svg';
function Footer() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We provide high-quality tutorials and resources<br/>
                to help you learn web development, programming,<br/>
                and design.
              </p>
            </Col>
  
            <Col md={4}>
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#">Home</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </Col>
  
            <Col md={4} >
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="#"><img src={icon1} alt="linkedin" /></a>
                <a href="#"><img src={icon2} alt="facebook" /></a>
                <a href="#"><img src={icon3} alt="Instagram" /></a>
              </div>
            </Col>
          </Row>
  
          <Row className="text-center mt-3">
            <Col>
              <p>&copy; {new Date().getFullYear()} FluentCode. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer;