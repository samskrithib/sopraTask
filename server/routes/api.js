const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
    if (err) return console.log(err);

  closure(db);
});
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

//get ukairports
router.get('/ukairports', (req, res) => {
  connection((db) => {
  db.collection('ukairports')
    .find()
    .toArray()
    .then((ukairports) => {
    response.data = ukairports;
  res.json(response);
})
.catch((err) => {
    sendError(err, res);
});
});
});

//get overseasAirports
router.get('/overseasAirports', (req, res) => {
  connection((db) => {
  db.collection('overseasAirports')
    .find()
    .toArray()
    .then((overseasAirports) => {
    response.data = overseasAirports;
  res.json(response);
})
.catch((err) => {
    sendError(err, res);
});
});
});

//get searchResults
router.get('/searchResults', (req, res) => {
  connection((db) => {
  db.collection('searchResults')
    .find()
    .toArray()
    .then((searchResults) => {
    response.data = searchResults;
  res.json(response);
})
.catch((err) => {
    sendError(err, res);
});
});
});

module.exports = router;
