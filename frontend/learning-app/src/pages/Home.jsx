import React from 'react';
import { NavBar } from '../components/Navbar';
import {Banner} from '../components/Banner';
import {Navbar2} from '../components/Navbar2';
import MyCards from '../components/MyCards';
import Footer from '../components/Footer';
// import CodeEditor from '../components/CodeEditor';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <Navbar2/>
        <Banner />
        <MyCards/>
        {/* <CodeEditor/> */}
        <Footer/>
      </div>
    </>
  )
}

export default Home;