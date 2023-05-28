import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Listing from './Listing';
import PropertyDetails from './PropertyDetails';
import ThankYouPage from './ThankYouPage';
import Contact from './Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/propertydetails/:id" element={<PropertyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;