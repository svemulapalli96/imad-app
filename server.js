var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var starterOne= {
    title: 'Shashikanths starter-one',
    date: '5th Sept 2017',
    heading: 'Starter-one',
    content: `
            <p>
                This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. vThis is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. 
            <p>
                This is Starter One webpage of shashikanth vemulapalli's first article. 
                This is Starter One webpage of shashikanth vemulapalli's first article. 
                This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. 
                
            </p>
            <p>
                This is Starter One webpage of shashikanth vemulapalli's first article. 
                This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. This is Starter One webpage of shashikanth vemulapalli's first article. 
            </p>
        
        `
 };
 function createTemplate(data)
 {
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 
 var htmlTemplate = `<html>
    
    <head>
        <title>
            ${title}
        </title>
        <meta name = "viewport" content = "width = content-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
       
    </head>
    
    <body>
        <div class = "container">
        <div>
            <a href = "/"> Home </a>
            <a href = "/starter-one"> Second page</a>
            <a href = "/starter-two"> Third Page</a>
        </div>
        <hr/>
        <h3> ${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
    </body>
</html>`;
return htmlTemplate;
}

app.get('/starter-one', function(req,res)
{
   res.send(createTemplate(starterOne)) ;
});

app.get('/starter-two', function(req,res)
{
   res.sendFile(path.join(__dirname,'ui','starter-two.html')) ;
});

app.get('/starter-three', function(req,res)
{
    res.sendFile(path.join(__dirname,'ui','starter-three.html')) ;
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
