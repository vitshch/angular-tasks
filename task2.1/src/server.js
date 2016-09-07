var express = require('express');
var session = require('express-session');

var app = express();
var path = require('path');

//static content folder
    app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);

app.use(session({
    secret: 'angular-tutorial',
    resave: true,
    saveUninitialized: true
}));

app.get("/greeting", function(req, res) {
    res.send("Hello " + req.query.name + "!!!");
});