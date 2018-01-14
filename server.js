let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

//tells node that we are createing an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8003;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mapping our server to a series of "route" files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
// The below code effectively "starts" our server and it's listening

app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});
