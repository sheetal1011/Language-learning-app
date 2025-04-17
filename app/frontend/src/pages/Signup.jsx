import React,{useState} from 'react';
import '../pages/Signup.css';


const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
    
        if (!name || !email || !password) {
          setError('All fields are required.');
          return;
        }
        setLoading(true); 

    const userData = { name, email, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert("Signup seccessful!")
        window.location.href = '/';
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
      console.error(err);
    } finally {
      setLoading(false); 
    }
  };

    return(
        <div className='signup'>
            <form onSubmit={handleSignup}>
            <h2>Get in Touch</h2>
            {error && <div className='error-message'>{error}</div>}
                <div className='input-row'>
                    <input type='text' name="name" placeholder='Enter your name' required  
                    value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='input-row'>
                    <input type='email' name="email" placeholder='Enter Email Address' required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='input-row'>
                    <input type='password' name="password" placeholder='Enter Password' required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit' disabled={loading}>{loading ? 'Signing up...' : 'Submit'}</button>
                <div className='login-option'>
                    <p>Already have an account? LOGIN</p>
                </div>
            </form>
        </div>
    )
}

export default Signup;