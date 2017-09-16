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

    // Converts all scores to int
    for( var i=0; i < newFriend.scores.length; i++ ) { 
      newFriend.scores[i] = +newFriend.scores[i]; 
    } 

    // loop through friends array
    for( var i=0; i < friends.length; i++ ) {

      var sum = 100;
      var num  = 0;
      var match = {};

      // If array lenghts match
      if ( newFriend.scores.length == friends[i].scores.length ) {

        // loop through scores and get differences
        for ( var j = 0; j < newFriend.scores.length; j++ ) {
          num += Math.abs( newFriend.scores[j] - friends[i].scores[j] );
          // Whos a match
          if ( num <= sum ) {
            sum = num;
            match = friends[i];
          }
        }
      
      }
    }
    
    // Adds to friends array
    friends.push(newFriend);

    // Respond with 
    res.json(match);
  })
}