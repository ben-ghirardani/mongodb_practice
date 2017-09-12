var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient
var mongoUrl = 'mongodb::localhost27017'

router.use('/api/animals', require('./animals'));

module.exports = router;