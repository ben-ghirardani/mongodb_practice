var express = require('express');
var animalsRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;
var db;
var Animal = require('../client/src/models/animal');

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
// post
// insert into Mongo
// test with Insomnia
animalsRouter.post('/', function(req, res){
    var animal = new Animal({
        name: req.body.name,
        type: req.body.type,
        feedingTimes: req.body.feedingTimes
    });

    db.collection('animals').insertOne(animal, function(err, result){
        res.json({message: "Animal added"});
    });

});

// DELETE

module.exports = animalsRouter;