import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('http://localhost:5000/login', { username, password });
      const response = await axios.post('http://localhost:5000/user/signin', { phoneNo: phoneNo, password: password });
      console.log(response.data)

      if(response.data.success == true) {
        localStorage.setItem('token', response.data.token)
        alert('Login successful!');
        console.log(response.data)
        // localStorage.setItem('token', response.data.token)
        navigate('/home'); // Redirect to home after successful login
      } else {
        setWarning(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setWarning(error.response.data.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {warning && <p className="warning">{warning}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default Login;