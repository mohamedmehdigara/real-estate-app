// session.js

// Function to retrieve the authentication token and its expiration time from storage
// session.js

// Function to retrieve the authentication token, its expiration time, and calculate the remaining time until expiration
function retrieveAuthToken() {
    const authToken = localStorage.getItem('auth_token');
    const decodedToken = jwt.decode(authToken);
    const expirationTime = decodedToken && decodedToken.exp; // Expiration time in seconds
  
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
    const remainingTime = expirationTime - currentTime; // Remaining time in seconds
  
    return { authToken, expirationTime, remainingTime };
  }
  
  
  // Function to check if the token is expired
  function isTokenExpired(expirationTime) {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  
    return expirationTime && currentTime > expirationTime;
  }
  
  // Function to refresh the authentication token
 // session.js

// Function to refresh the authentication token
function refreshAuthToken() {
  const expiredToken = localStorage.getItem('auth_token');

  // Make a request to the backend server to refresh the token
  axios.post('/refresh-token', { token: expiredToken })
    .then(response => {
      const newToken = response.data.token;

      // Update the stored token with the new token
      localStorage.setItem('auth_token', newToken);

      // Optionally, update the token expiration time if provided by the server
      const newExpirationTime = response.data.expirationTime;
      if (newExpirationTime) {
        localStorage.setItem('auth_token_expiration', newExpirationTime);
      }
    })
    .catch(error => {
      // Handle token refresh failure
    });
}

  
  // Function to handle session expiration and token refreshing
 // session.js

// Function to handle session expiration and token refreshing
// session.js

// Function to handle session expiration and token refreshing
function handleSessionExpiration() {
    const { authToken, expirationTime, remainingTime } = retrieveAuthToken();
    const threshold = 300; // Threshold in seconds (e.g., 5 minutes)
  
    if (isTokenExpired(expirationTime)) {
      try {
        refreshAuthToken(); // Refresh the authentication token
      } catch (error) {
        // Handle token refresh failure
      }
    }
  
    // Check remaining time periodically
    const checkRemainingTime = setInterval(() => {
      const { remainingTime } = retrieveAuthToken();
  
      if (remainingTime <= 0) {
        clearInterval(checkRemainingTime); // Stop checking if remaining time is 0 or less
  
        // Perform necessary actions (e.g., prompt user to reauthenticate)
      } else if (remainingTime <= threshold) {
        // Trigger token refreshing process
        try {
          refreshAuthToken(); // Refresh the authentication token
        } catch (error) {
          // Handle token refresh failure
        }
      }
    }, 1000); // Interval in milliseconds (1000 milliseconds = 1 second)
  }
  
  
  export { retrieveAuthToken, isTokenExpired, refreshAuthToken, handleSessionExpiration };
  