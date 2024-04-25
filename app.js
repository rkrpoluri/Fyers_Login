document.getElementById('authenticate-button').addEventListener('click', function() {
    const apiKey = document.getElementById('api-key').value;
    const apiSecret = document.getElementById('api-secret').value;
  
    // Basic Authentication Encoding (Same concept as in Python example)
    const credentials = btoa(`${apiKey}:${apiSecret}`);
    const authHeader = `Basic ${credentials}`;
  
    // Send Authentication Request to Your Back-end
    fetch('/authenticate', { 
      method: 'POST',
      headers: {
        'Authorization': authHeader
      }
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('auth-status').textContent = 'Authentication Successful!';
        // Might need to handle/store an access token from the response
      } else {
        document.getElementById('auth-status').textContent = 'Authentication Failed. Check your credentials.';
      }
    })
    .catch(error => {
       console.error("Authentication Error: ", error);
    });
  });
  