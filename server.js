var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('./public'));

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

// Server on Port 3000
app.listen(PORT, function () {
  console.log('Friend Finder App listening on port 3000!');
})

