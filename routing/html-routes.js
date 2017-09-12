var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('public'));

// Server on Port 3000
app.listen(3000, function () {
  console.log('Friend Finder App listening on port 3000!');
})

// Show Survey
app.get('/survey', function (req, res) {
  fs.readFile('public/survey.html', function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
})

// Show Homepage
app.use(function (req, res, next) {
  fs.readFile('public/home.html', function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
})