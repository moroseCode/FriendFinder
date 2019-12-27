var friends = require("../data/friends")
var questions = require("../data/questions")

module.exports = function(app) {
    // Displays all characters
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.get("/api/questions", function(req, res) {
        res.json(questions);
      });

    app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
        friends.push(req.body);
        res.json(friends)
    });
};
