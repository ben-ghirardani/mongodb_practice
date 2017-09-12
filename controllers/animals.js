var express = require('express');
var animalsRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;

// Connect to db once, rather than in every route. Use variable to refer back to it.
MongoClient.connect('mongodb://localhost:27017/farm', function(err, database){
        if (err) console.log("Oops " + err.toString());
        db = database;
    });


// animals INDEX
// GET animals from DB
// Send back to client
animalsRouter.get('/', function(req, res){    
    db.collection('animals').find().toArray(function(err, results){
        res.json(results);
    });
});

// SHOW

// EDIT

// UPDATE

// CREATE

// DELETE

module.exports = animalsRouter;