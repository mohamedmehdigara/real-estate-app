import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Listing from './Listing';
import PropertyDetails from './PropertyDetails';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Header />} />
      <Route path="/contact" element={<Footer />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/propertydetails" element={<PropertyDetails />} />
    </Routes>
    </Router>
  );
}
export default App;