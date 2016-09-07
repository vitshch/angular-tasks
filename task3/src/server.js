var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

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

app.get("/notes", function(req, resp) {
    resp.send(req.session.notes || []);
});

app.post("/notes", function(req, res) {
    if(!req.session.notes) {
        req.session.notes = [];
        req.session.last_note_id = 0;
    }
    var note = req.body;
    note.id = req.session.last_note_id;
    req.session.last_note_id++;
    req.session.notes.push(note);
    res.end();
});

app.delete("/notes", function(req,res) {
    var id = req.query.id;
    var notes = req.session.notes || [];
    var updatedNotesList = [];
    for (var i=0;i<notes.length;i++) {
        if (notes[i].id != id) {
        updatedNotesList.push(notes[i]);
        }
    }
    req.session.notes = updatedNotesList;
    res.end();
});