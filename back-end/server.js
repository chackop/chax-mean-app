var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var auth = require('./controllers/auth');
var message = require('./controllers/message');
var jwt = require('jwt-simple');
var moment = require('moment');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./srvices/cors');

// Middleware
app.use(bodyParser.json());

app.use(cors);

// Requests
app.get('/api/message', message.get);

app.post('/api/message', checkAuthenticated, message.post);

app.post('/api/register', auth.register);

// Connection
mongoose.connect("mongodb://localhost:27017/test", function(err, db) {
    if(!err){
      console.log("we connected to mongo");
      GetMessages();
      //db.collection('messages').insertOne({'msg':'test'});
    }
});
var server = app.listen(5000, function() {
  console.log('listening on port', server.address().port);
});
