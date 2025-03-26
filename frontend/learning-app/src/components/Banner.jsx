import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import slide1 from '../assets/new1.jpg'
import slide2 from '../assets/bg2.jpg';
import slide3 from '../assets/bg.jpg';
import { Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import '../components/Banner.css';

export const Banner = () => {
  return (
    <Carousel>
        <CarouselItem>
            <img src={slide3} alt="first slide"/>
            <CarouselCaption>
                <h4>🖥️ Learn to Code from Scratch</h4>
                <h5>Start Your Coding Journey Today!</h5>
                <p>Learn programming from the ground up with interactive lessons in HTML, CSS, JavaScript, Python, and more. No prior experience needed—just your curiosity! Get step-by-step guidance, quizzes, and real-world examples to master coding.</p>
                <Button>get started</Button>
            </CarouselCaption>
            
        </CarouselItem>
        <CarouselItem>
            <img src={slide3} alt="second slide"/>
            <CarouselCaption>
                <h4>🚀 Build Real-World Projects</h4>
                <h5>Turn Your Skills into Real Applications</h5>
                <p>Apply what you learn by building real-world projects. Work on exciting hands-on exercises, create dynamic websites and applications, and enhance your coding portfolio. Our platform helps you develop job-ready skills with guided challenges.</p>
                <Button>get started</Button>
            </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
            <img src={slide3} alt="third slide"/>
            <CarouselCaption>
                <h4>🎯 Learn Anytime, Anywhere</h4>
                <h5>Flexible Learning for Every Developer</h5>
                <p>Whether you’re at home, on the go, or at a café—learn at your own pace. Access engaging tutorials, live coding exercises, and expert guidance from any device. Our courses are designed to fit into your busy schedule.</p>
                <Button>get started</Button>
            </CarouselCaption>
        </CarouselItem>
    </Carousel>


  );
};

export default Banner;
