var friendData = require("../data/friends");
console.log(friendData);

module.exports = function(app) {

  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
   
  

  };
  