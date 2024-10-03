import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await axios.post('http://localhost:5000/register', { username, email, password });
    //   alert('User registered successfully!');
    //   navigate('/login'); // Redirect to login after successful registration

        const response = await axios.post('http://localhost:5000/user/signup', { phoneNo: email, password: password , uname:username});
        console.log(response.data)
        if(response.data.success == true) {
            alert('Sign up successful!, Please login to the App with the credentials');
            console.log(response.data)
            navigate('/login'); // Redirect to home after successful login
        } else {
            setWarning(response.data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
      setWarning(error.response.data.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      {warning && <p className="warning">{warning}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;