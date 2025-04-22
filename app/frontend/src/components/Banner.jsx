import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import slide3 from '../assets/bg.jpg';
import { Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import '../components/Banner.css';
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <Carousel>
        <CarouselItem>
        <div className="gradient-slide">
            <CarouselCaption>
                <h4>🖥️ Learn to Code from Scratch</h4>
                <h5>Start Your Coding Journey Today!</h5>
                <p>Learn programming from the ground up with interactive lessons in HTML, CSS, JavaScript, Python, and more. No prior experience needed—just your curiosity! Get step-by-step guidance, quizzes, and real-world examples to master coding.</p>
                <Button>get started</Button>
            </CarouselCaption>
        </div>
        </CarouselItem>
        
        <CarouselItem>
        <div className="gradient-slide">
            <CarouselCaption>
            <h2>Test Your Knowledge</h2>
            <p>Take quizzes and improve your coding skills.</p>
            <Button><Link to="/select-language" className="add-quiz-button">
            <span>Take a Quiz</span>
            </Link>
            </Button>
            </CarouselCaption>
            </div>
        </CarouselItem>

        <CarouselItem>
        <div className="gradient-slide">
            <CarouselCaption>
                <h4>🎯 Learn Anytime, Anywhere</h4>
                <h5>Flexible Learning for Every Developer</h5>
                <p>Whether you’re at home, on the go, or at a café—learn at your own pace. Access engaging tutorials, live coding exercises, and expert guidance from any device. Our courses are designed to fit into your busy schedule.</p>
                <Button>get started</Button>
            </CarouselCaption>
        </div>
        </CarouselItem>
    </Carousel>


  );
};

export default Banner;
