import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function Listing() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Fetch data from API or use mock data
    // Example API call using fetch:
    fetch('https://api.example.com/listings')
      .then(response => response.json())
      .then(data => setListings(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Real Estate Listings</h1>
      {listings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>{listing.address}</p>
          <p>{listing.description}</p>
        </div>
      ))}
      <Header />
      <Footer />
    </div>
  );
}

export default Listing;
