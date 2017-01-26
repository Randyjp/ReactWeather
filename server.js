/**
 * Created by rperez on 1/8/17.
 */
var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

//fowards all https traffic to http
//this is because open weather app free is
//only on http
app.use(function (req, res, next) {
  //checks the protocol
  if (req.header['x-forwarded-proto'] === 'http') {
    //if http just keep going
    next();
  } else {
    //if https, redirect to http
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public')); //exposed folder

app.listen(PORT, function () { //Starts a UNIX socket and listens for connections on the given path.
   console.log('Express server is up and running in port ' + PORT);
});
