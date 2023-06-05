import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Listing = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [bathroomsFilter, setBathroomsFilter] = useState('');

  const fetchPropertyListings = async () => {
    try {
      // Build the query string based on the selected filters
      let queryString = '/api/property-listings?';
      if (propertyTypeFilter) {
        queryString += `propertyType=${propertyTypeFilter}&`;
      }
      if (priceRangeFilter) {
        queryString += `priceRange=${priceRangeFilter}&`;
      }
      if (bedroomsFilter) {
        queryString += `bedrooms=${bedroomsFilter}&`;
      }
      if (bathroomsFilter) {
        queryString += `bathrooms=${bathroomsFilter}&`;
      }

      // Send the API request with the query string
      const response = await fetch(queryString);
      if (response.ok) {
        const data = await response.json();
        setPropertyListings(data);
      } else {
        console.error('Failed to fetch property listings');
      }
    } catch (error) {
      console.error('Failed to fetch property listings:', error);
    }
  };

  useEffect(() => {
    fetchPropertyListings();
  }, [propertyTypeFilter, priceRangeFilter, bedroomsFilter, bathroomsFilter]);

  // ...

  return (
    <div>
      <h1>Property Listings</h1>
      <div>
        {/* Property Type Filter */}
        <label>Property Type:</label>
        <select
          value={propertyTypeFilter}
          onChange={(e) => setPropertyTypeFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          {/* Add other property types */}
        </select>

        {/* Price Range Filter */}
        <label>Price Range:</label>
        <input
          type="text"
          value={priceRangeFilter}
          onChange={(e) => setPriceRangeFilter(e.target.value)}
        />

        {/* Bedrooms Filter */}
        <label>Bedrooms:</label>
        <input
          type="text"
          value={bedroomsFilter}
          onChange={(e) => setBedroomsFilter(e.target.value)}
        />

        {/* Bathrooms Filter */}
        <label>Bathrooms:</label>
        <input
          type="text"
          value={bathroomsFilter}
          onChange={(e) => setBathroomsFilter(e.target.value)}
        />

        <button onClick={fetchPropertyListings}>Apply Filters</button>
      </div>

      {/* Display property listings */}
      {propertyListings.length > 0 ? (
        <ul>
          {propertyListings.map((property) => (
            <li key={property.id}>
              <p>{property.title}</p>
              <p>{property.description}</p>
              {/* Display other property details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No property listings found.</p>
      )}
    </div>
  );
};

export default Listing;
