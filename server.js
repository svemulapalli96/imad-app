var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/starter-one', function(req,res)
{
   res.send("This is the Starter Message and is working at /starter one here...!!") ;
});

app.get('/starter-two', function(req,res)
{
   res.send("This is the Starter two Message and is working at /starter two here...!!") ;
});

app.get('/starter-one', function(req,res)
{
   res.send("This is the Starter three Message and is working at /starter three here...!!") ;
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
