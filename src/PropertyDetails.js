import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {   useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`https://realestateapi.com/api/v1/properties/${id}`)
     .then(response => {
        setProperty(response.data);
      })
     .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!property) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
      <img src={property.image} alt={property.name} />
      <p>Price: {property.price}</p>
      <Header/>
      <Footer/>
    </div>
  );
}

export default PropertyDetails;