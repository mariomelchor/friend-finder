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
    var lowestScore = 100;
    var match = {};

    // Converts all scores to int
    for( var i=0; i < newFriend.scores.length; i++ ) { 
      newFriend.scores[i] = +newFriend.scores[i]; 
    } 

    // loop through friends array
    for( var i=0; i < friends.length; i++ ) {

      // If array lenghts match
      if ( newFriend.scores.length == friends[i].scores.length ) {
        console.log(friends[i].name);
        var friendScore = 0;

        // loop through scores and get differences
        for ( var j = 0; j < newFriend.scores.length; j++ ) {
          friendScore += Math.abs( newFriend.scores[j] - friends[i].scores[j] );
        }

        // Whos a match
        if ( friendScore < lowestScore ) {
          match = friends[i];
          lowestScore = friendScore;
        }

        console.log('Friend Score:', friendScore);
        console.log('Lowest Score:', lowestScore + '\n');
      
      }
    }
    
    // Adds to friends array
    friends.push(newFriend);

    // Respond with 
    res.json(match);
  })
}