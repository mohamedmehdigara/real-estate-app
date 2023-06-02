import React, { useEffect, useState } from 'react';

const SavedProperties = () => {
    // ...
  
    const handleAddProperty = async (propertyId) => {
      try {
        // Send a request to the server to add the property to the user's saved list
        const response = await fetch(`/api/saved-properties/${propertyId}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
  
        if (response.ok) {
          // Update the UI by fetching the updated saved properties
          fetchSavedProperties();
        } else {
          // Handle the error response from the server
          console.error('Failed to add property to saved list');
        }
      } catch (error) {
        // Handle any network or fetch error
        console.error('Failed to add property to saved list:', error);
      }
    };
  
    const handleRemoveProperty = async (propertyId) => {
      try {
        // Send a request to the server to remove the property from the user's saved list
        const response = await fetch(`/api/saved-properties/${propertyId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        });
  
        if (response.ok) {
          // Update the UI by fetching the updated saved properties
          fetchSavedProperties();
        } else {
          // Handle the error response from the server
          console.error('Failed to remove property from saved list');
        }
      } catch (error) {
        // Handle any network or fetch error
        console.error('Failed to remove property from saved list:', error);
      }
    };
  
    // ...
  
    return (
      <div>
        <h1>Saved Properties</h1>
        {savedProperties.length > 0 ? (
          <ul>
            {savedProperties.map((property) => (
              <li key={property.id}>
                <p>{property.title}</p>
                <p>{property.description}</p>
                {/* Display the Save or Unsave button based on the saved status */}
                {property.isSaved ? (
                  <button onClick={() => handleRemoveProperty(property.id)}>
                    Unsave
                  </button>
                ) : (
                  <button onClick={() => handleAddProperty(property.id)}>
                    Save
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No saved properties found.</p>
        )}
      </div>
    );
  };
  
export default SavedProperties;
