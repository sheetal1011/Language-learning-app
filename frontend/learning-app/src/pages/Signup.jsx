import React from 'react';
import '../pages/Signup.css';

const Signup = () => {
    return(
        <div className='signup'>
            
            <form>
            <h2>Get in Touch</h2>
                <div className='input-row'>
                    <input type='text' placeholder='First name' required/>
                    <input type='text' placeholder='Last name' />
                </div>
                <div className='input-row'>
                    <input type='email' placeholder='Email Address' required/>
                    <input type='tel' placeholder='Mobile No.' />
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