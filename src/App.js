import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<h1>Welcome to the App!</h1>} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/profile" element={<Profile/>} /> */}
          {/* <Route path="/showtime" element={<Showtime/> } /> */}
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;