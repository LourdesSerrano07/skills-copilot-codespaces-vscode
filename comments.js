// Create web server
// 1. Create a web server with express
// 2. Create a new route to handle comments
// 3. Create a new route to handle comments with a post request
// 4. Create a new route to handle comments with a post request and save the comment to the database
// 5. Create a new route to handle comments with a post request and save the comment to the database and return all the comments
// 6. Create a new route to handle comments with a post request and save the comment to the database and return all the comments in the database

// 1. Create a web server with express
const express = require('express');
const app = express();
const port = 3000;

// 2. Create a new route to handle comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 3. Create a new route to handle comments with a post request
app.post('/comments', (req, res) => {
  res.send('Comments');
});

// 4. Create a new route to handle comments with a post request and save the comment to the database
app.post('/comments', (req, res) => {
  res.send('Comments');
});

// 5. Create a new route to handle comments with a post request and save the comment to the database and return all the comments
app.post('/comments', (req, res) => {
  res.send('Comments');
});

// 6. Create a new route to handle comments with a post request and save the comment to the database and return all the comments in the database
app.post('/comments', (req, res) => {
  res.send('Comments');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
