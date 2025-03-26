import React from "react";
import { Container, Row, Col, Card , Button } from "react-bootstrap";
import card1 from '../assets/html.png';
import card2 from '../assets/css.png';
import card3 from '../assets/javascript.png';
import card4 from '../assets/java.jpg';
import card5 from '../assets/python.webp';
import card6 from '../assets/cpp.jpg';
import { Link } from "react-router-dom";
import '../components/MyCards.css';

const MyCards = () => {
  return (
    <div className="mycards">
    <Container className="mt-4">
      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card1}/>
            <Card.Body>
              <Card.Title>Master HTML basics</Card.Title>
              <Card.Text>Build the foundation of web development with structured markup.</Card.Text>
              <Button ><Link to="/html" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Style with CSS</Card.Title>
              <Card.Text>Design beautiful, responsive websites with modern CSS techniques.</Card.Text>
              <Button ><Link to="/css" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Javascript essentials</Card.Title>
              <Card.Text>Make your websites interactive with JavaScript programming.</Card.Text>
              <Button><Link to="/javascript" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card4}/>
            <Card.Body>
              <Card.Title>Java programming</Card.Title>
              <Card.Text>Learn Java from basics to advanced concepts with real-world applications.</Card.Text>
              <Button><Link to="/java" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card5} />
            <Card.Body>
              <Card.Title>Python for everyone</Card.Title>
              <Card.Text>Master Python programming for web, AI, and data science.</Card.Text>
              <Button><Link to="/python" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={card6} />
            <Card.Body>
              <Card.Title>C++ fundamentals</Card.Title>
              <Card.Text>Develop high-performance applications with C++ programming.</Card.Text>
              <Button><Link to="/cpp" className="button-class">Get Started</Link></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default MyCards;

