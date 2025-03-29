import React,{useState} from 'react';
import '../pages/Signup.css';
import axios from 'axios';

const Signup = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5001/api/user/signup', {
                name, email, password
            });
            console.log(response.data);
            alert(response.data.message); 

            setName("");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error(err);
            alert("Signup failed. Please try again.");
        }
    }
    return(
        <div className='signup'>
            
            <form onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
                <div className='input-row'>
                    <input type='text' name="name" placeholder='Enter your name' required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='input-row'>
                    <input type='email' name="email" placeholder='Enter Email Address' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input-row'>
                    <input type='password' name="password" placeholder='Enter Password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
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