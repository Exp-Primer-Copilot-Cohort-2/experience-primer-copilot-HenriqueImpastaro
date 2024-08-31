// Create web server
var express = require('express');
var app = express();

// Create a new comment
app.post('/comments', function(req, res) {
  res.send('Creating a new comment');
});

// Get all comments
app.get('/comments', function(req, res) {
  res.send('Getting all comments');
});

// Get a comment by id
app.get('/comments/:id', function(req, res) {
  res.send('Getting a comment with id: ' + req.params.id);
});

// Update a comment by id
app.put('/comments/:id', function(req, res) {
  res.send('Updating a comment with id: ' + req.params.id);
});

// Delete a comment by id
app.delete('/comments/:id', function(req, res) {
  res.send('Deleting a comment with id: ' + req.params.id);
});

// Start server
app.listen(3000, function() {
  console.log('Server is running on http://localhost:3000');
});