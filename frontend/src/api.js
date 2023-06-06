const API_BASE_URL = 'http://localhost:8000'; // Replace with your actual backend server URL

const api = {
  fetchProperties: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch properties:', error);
      throw error;
    }
  },

  createProperty: async (propertyData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to create property:', error);
      throw error;
    }
  },

  updateProperty: async (propertyId, updatedData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${propertyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to update property with ID ${propertyId}:`, error);
      throw error;
    }
  },

  deleteProperty: async (propertyId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${propertyId}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to delete property with ID ${propertyId}:`, error);
      throw error;
    }
  },

  // Add more custom API functions for your specific endpoints and requirements
};

// api.js

// ... other imports and code ...

export const getUserProfile = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getAuthToken()}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      throw error;
    }
  };
  // api.js

// ... other imports and code ...

export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAuthToken()}`,
      },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to update user profile:', error);
    throw error;
  }
};

// ... other API functions ...

  
  // ... other API functions ...
  

export default api;

