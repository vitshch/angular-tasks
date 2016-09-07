var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'angular_tutorial',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

app.post("/notes", function(req, res) {
    var note = req.body;
    note.id = req.session.lastNoteId;
    req.session.lastNoteId++;

    var noteText = JSON.stringify(note)+"\n";
    fs.appendFile("notes.json", noteText, function(err) {
        if (err) console.log("something is wrong");
        res.end();
    });
});

app.get("/notes", function(req, res) {
    if(!req.session.lastNoteId) {
        req.session.lastNoteId = 0;
    }
    fs.readFile("notes.json", function(err, result) {
        if (result) {
            result = "" + result; // convert Object to String
            //remove last \n in file
            result = result.substring(0, result.length - 1);
            result = "["+result+"]";
            result = result.split("\n").join(",");
            res.send(result);
        } else {
            res.end();
        }
    });
});

app.delete("/notes", function(req, res) {
    var id = req.query.id;
    var notesArr = [];
   fs.readFile("notes.json", function(err, result) {
         console.log(result);
   });

})

