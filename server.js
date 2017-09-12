var express = require('express');
var app = express();
app.use(express.static('./public'));

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

// Server on Port 3000
app.listen(3000, function () {
  console.log('Friend Finder App listening on port 3000!');
})

