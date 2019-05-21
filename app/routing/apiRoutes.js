var friendData = require("../data/friends");



module.exports = function(app) {

  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });
  
     
    app.post("/api/friends", function(req, res) {
 
            friendData.push(req.body);
        //     res.json(true);

        // var userScore = [];   
        // var friendScores = [];

        // var score= (friendData[8].scores);

        // score.forEach(num => {
        //   userScore.push(parseInt(num));
        // });
        
        // for (var i = 0; i < friendData.length; i++){
          
        //   friendScores.push(friendData[i].scores);
        // }
        
        // console.log(userScore);
        // console.log(friendScores);
      });
      
      
    };
    
    // console.log("friend" + friendScores);
    //  console.log(score.map(Number));
    
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }