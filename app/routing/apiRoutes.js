// We are linking our routes to a series of "data" source
// The data source holds arrays of information on friendData
var friendData = require("../data/friends");




module.exports = function (app) {
    // API GET requests
    //  the code handles when users "visit" a page
    // Don't think my app.get api route is right
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //API POST Requests
    // the code below handles 
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)

    app.post("/api/friends", function (req, res) {
        var newFriendScoreArray = req.body.score;
        var scoresArray = [];
        var bestMatch = 0;
        var count = 0;
        // for current friend 
        console.log(friendData);
        for (var i = 0; i < friendData.length; i++) {
            var scoresDiff = 0;
            console.log(newFriendScoreArray);
            // compare the friend with existing friend
            for (var j = 0; j < newFriendScoreArray.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendData[i].score[j]) - parseInt(newFriendScoreArray[j])));
            }
            // then add the json the user sent to the friendsData array 
            scoresArray.push(scoresDiff);
        }
        // find best match after comparision  with all friends
        for (var i = 0; i < scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        //return data
        var yourMatch = friendData[bestMatch];
        res.json(yourMatch);
        friendData.push(req.body);
    });

};