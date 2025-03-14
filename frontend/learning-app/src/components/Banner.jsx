import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import {Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/header-img.svg";

export const Banner = () => {

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to Language Learning.</span>
                        <h1>{`Learn Languages the `}<span className="wrap">Fun Way!</span></h1>
                        <p>Boost your fluency with interactive lessons, real-world conversations, and AI-powered feedback. Choose from multiple languages and start your journey today!</p>
                        <button onClick={() => console.log('connect')}>Get Started <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner