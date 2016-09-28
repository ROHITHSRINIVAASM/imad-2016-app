var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
 title:"Article one",
 content:"this my first article",
 date:"24 sep 16"
};
createtemplate=function(data)
{var title=data.title;
var content=data.content;
var date=data.date;
var htmltemplate=`<html>
<head>
    <title>
    ${title}
    </title>
 
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class=container>
    <a href="/">Home</a>
    <h1>
        <p>
            ${content}
        </p>
    </h1>
    <h2>
        <p>
            ${date}
        </p>
    </h2>
    </div>
</body>
</html>`;
return htmltemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/articleone',function(req,res)
{ res.send(createtemplate(articleone));
    
});
app.get('/articletwo',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'articletwo.html'));
});
app.get('/articlethree',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'articlethree.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
