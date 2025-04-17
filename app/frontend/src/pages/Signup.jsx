import React,{useState} from 'react';
import '../pages/Signup.css';


const Signup = () => {

    return(
        <div className='signup'>
            <form >
            <h2>Get in Touch</h2>
                <div className='input-row'>
                    <input type='text' name="name" placeholder='Enter your name' required />
                </div>
                <div className='input-row'>
                    <input type='email' name="email" placeholder='Enter Email Address' required />
                </div>
                <div className='input-row'>
                    <input type='password' name="password" placeholder='Enter Password' required />
                </div>
                <button type='submit'>Submit</button>
                <div className='login-option'>
                    <p>Already have an account? LOGIN</p>
                </div>
            </form>
        </div>
    )
}

export default Signup;