import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Listing = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [propertyTypeFilter, setPropertyTypeFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');
  const [bathroomsFilter, setBathroomsFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage] = useState(10); // Set the desired number of listings per page

  const fetchPropertyListings = async () => {
    try {
      const response = await fetch(`/api/property-listings?page=${currentPage}&limit=${listingsPerPage}`);
      // Handle the response and update the propertyListings state variable
    } catch (error) {
      console.error('Failed to fetch property listings:', error);
    }
  };

  useEffect(() => {
    fetchPropertyListings();
  }, [currentPage, listingsPerPage]);

  const totalPages = Math.ceil(propertyListings.length / listingsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Header />
      {/* Property listings */}
      {propertyListings.length > 0 ? (
        <ul>
          {/* Display listings for the current page */}
          {propertyListings
            .slice((currentPage - 1) * listingsPerPage, currentPage * listingsPerPage)
            .map((property) => (
              // Render each property listing
              <li key={property.id}>{property.name}</li>
            ))}
        </ul>
      ) : (
        <p>No property listings found.</p>
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </button>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Listing;
