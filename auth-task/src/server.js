var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;

var app = express();
var path = require('path');

var db = new Db('social', new Server('localhost', 27017, {safe: true}, {auto_reconnect: true}, {}));

db.open(function() {
    console.log("mongo db is opened!!");
    db.collection('users');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

app.post("/login", function(req, res) {
    var user = req.body;
    console.log(user);
    result = db.users.find(user);
    if(result) {
        res.send(result);
    } else {
        res.send("error");
    }
});

//app.get("/notes", function(req, res) {
//    db.notes.find(req.query).toArray(function(err, items) {
//        res.send(items);
//    });
//});
//
//app.post("/notes", function(req, res) {
//
//    var orderNum = db.notes.find().sort({order: -1}).limit(1);
//    var note = req.body;
//    note.date = new Date().getTime();
//    note.order = orderNum;
//
//    db.notes.insert(note);
//    res.end();
//});
//
//app.delete("/notes", function(req, res) {
//    var id = new ObjectID(req.query.id);
//    db.notes.remove({_id: id}, function(err) {
//        if (err) {
//            console.log(err);
//            res.send("Error: " + err);
//        } else {
//            res.send("Success");
//        }
//    });
//});