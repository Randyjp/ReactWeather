/**
 * Created by rperez on 1/8/17.
 */
var express = require('express');
var app = express();

app.use(express.static('public')); //exposed folder

app.listen(3000, function () { //Starts a UNIX socket and listens for connections on the given path.
   console.log('Express server is up and running in port 3000')
});