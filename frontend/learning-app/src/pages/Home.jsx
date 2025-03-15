import React from 'react';
import { useState } from 'react';
import { NavBar } from '../components/Navbar';
import {Banner} from '../components/Banner';
import {Navbar2} from '../components/Navbar2';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {

  return (
    <>
      <div className="home">
        <NavBar />
        <Navbar2/>
        <Banner />
         
      </div>
    </>
  )
}

export default Home;