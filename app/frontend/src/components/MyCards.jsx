import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/MyCards.css";

import card1 from "../assets/html.png";
import card2 from "../assets/css.png";
import card3 from "../assets/javascript.png";
import card4 from "../assets/java.jpg";

const courses = [
  {
    img: card1,
    title: "Master HTML basics",
    text: "Build the foundation of web development with structured markup.",
    link: "/course/6807a1fdf33aef563ce1d6ab"
  },
  {
    img: card2,
    title: "Style with CSS",
    text: "Design beautiful, responsive websites with modern CSS techniques.",
    link: "/course/6807ac94f33aef563ce1da41"
  },
  {
    img: card3,
    title: "Javascript essentials",
    text: "Make your websites interactive with JavaScript programming. ....",
    link: "/course/6807b1a1f33aef563ce1dc20"
  },
  {
    img: card4,
    title: "Java programming",
    text: "Learn Java from basics to advanced concepts with real-world applications.",
    link: "/course/6807bd5ef33aef563ce1df10"
  }
];

const MyCards = () => (
  <div className="mycards">
    <Container className="mt-4">
      <Row className="g-4">
        {courses.map((course, idx) => (
          <Col md={3} key={idx}>
            <Card className="cards">
              <img src={course.img} className="card-img" />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.text}</Card.Text>
                <Button>
                  <Link to={course.link} className="button-class">Get Started</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default MyCards;