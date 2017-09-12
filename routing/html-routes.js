var path = require('path');

module.exports = function(app){
  // Show Survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));  
  })

  // Show Homepage
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  })
}