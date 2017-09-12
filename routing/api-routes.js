var path = require('path');

module.exports = function(app){
  // Show Friend JSON
  app.get('/api/friends', function (req, res) {
    res.json({ user: 'tobi' });
  })
}