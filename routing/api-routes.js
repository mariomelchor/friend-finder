var friends = require('../app/data/friends.js');

module.exports = function(app){
  // Show Friends JSON
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  })

  // Take in Post request
  app.post('/api/friends', function (req, res) {
    // Get post request and add to friends array
    var newFriend = req.body;
    friends.push(newFriend);

    // Respond with newFriend
    res.json(friends);

  })
}