const express = require('express'); // Import Express module

const app = express(); // Create an Express application

// Define a route for handling GET requests to the root URL '/'
app.get('/', (req, res) => {
  // Sending 'Hello, World!' as the response
  res.send('Hello, World!');
});
  
// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
