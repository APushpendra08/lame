import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [warning, setWarning] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  useEffect(() => {
    async function fetchMovies() {
        try {
            const response = await axios.get('http://localhost:5000/shows/live', { token});
            console.log(response.data)
    
            if(response.data.success == true) {
            //  alert('Fetch Successful');
                console.log(response.data)
                setMovies(response.data.data)
            // navigate('/home'); // Redirect to home after successful login
          } else {
                setWarning(response.data.message || '');
          }
        } catch (error) {
          setWarning(error|| 'Fetch Failed error');
        }
      };

      fetchMovies()
  }, [])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const response = await axios.post('http://localhost:5000/login', { username, password });
        const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/shows/live', { token});
      console.log(response.data)

      if(response.data.success == true) {
        // alert('Login successful!');
        console.log(response.data)
        // navigate('/home'); // Redirect to home after successful login
      } else {
        setWarning(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setWarning(error.response.data.message || 'Login failed. Please try again.');
    }
  };

  

  return (
    <div className="form-container">
      <h2>Welcome</h2>
      {warning && <p className="warning">{warning}</p>}
      <form onSubmit={handleSubmit}>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Sign up</a>
      </p>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <p>{movie.name}</p><button onClick={() => {}}>Click Here</button>
          </li>
        ))}
      </ul> 

    </div>
  );
};

export default Home;