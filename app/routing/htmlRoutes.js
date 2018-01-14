//Dependency 
// Need to include the path package to get the correct file path for the html
var path = require("path");

//routing 
module.exports = function(app) {
    // HTML GET Requests
    // The code below handles when users "visit" a page
    // in each of the below cases the user is shown an HTML page of content
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // if no matching route is found, default to home
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};