import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import '../components/Banner.css';
import { Link } from "react-router-dom";
import blueBg from "../assets/blue-bg.webp";
export const Banner = () => {
  return (
    <Carousel>
        <CarouselItem>
        <img style={{height:'85vh'}}
        className="d-block w-100" src={blueBg} alt="first slide"/>
            <CarouselCaption>
                <h4>🖥️ Learn to Code from Scratch</h4>
                <h5>Start Your Coding Journey Today!</h5>
                <p>Learn programming from the ground up with interactive lessons in HTML, CSS, JavaScript, Python, and more. No prior experience needed—just your curiosity! Get step-by-step guidance, quizzes, and real-world examples to master coding.</p>
                <Button>Get started</Button>
            </CarouselCaption>
        </CarouselItem>
        
        <CarouselItem>
        <img style={{height:'85vh'}}
        className="d-block w-100" src={blueBg} alt="second slide"/>
            <CarouselCaption>
            <h4>🏆Test Your Knowledge</h4>
            <h5>Welcome to the coding quiz challenge!</h5>
            <p>Are you ready to test your coding powers?
               Solve questions, learn new tricks, and climb to the top!<br/>
               Choose your favorite language and let's get started!</p>
            <Button><Link to="/select-language" className="add-quiz-button">
            <span>Take a Quiz</span>
            </Link>
            </Button>
            </CarouselCaption>
        </CarouselItem>

        <CarouselItem>
        <img style={{height:'85vh'}}
        className="d-block w-100" src={blueBg} alt="third slide"/>
            <CarouselCaption>
                <h4>🎯 Learn Anytime, Anywhere</h4>
                <h5>Flexible Learning for Every Developer</h5>
                <p>Whether you’re at home, on the go, or at a café—learn at your own pace. Access engaging tutorials, live coding exercises, and expert guidance from any device. Our courses are designed to fit into your busy schedule.</p>
                <Button>Get started</Button>
            </CarouselCaption>
       
        </CarouselItem>
    </Carousel>


  );
};

export default Banner;
