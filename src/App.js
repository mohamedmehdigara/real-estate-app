import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('https://realestateapi.com/api/v1/properties')
     .then(response => {
        setProperties(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/properties">Properties</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/properties" element={<h1>Properties</h1>} />
          <Route path="/properties/:id" element={<h1>Property Details</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;