var friends = require('../app/data/friends.js');

module.exports = function(app){
  // Show Friends JSON
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  })

  // Take in Post request
  app.post('/api/friends', function (req, res) {
    res.send('Got a POST request');
    console.log(res.body);

    var newFriend = req.body;
    // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
    characters.push(newFriend);
  
    res.json(newFriend);

  })
}