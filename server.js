var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{ 
 'articleone':{
 title:"Article one",
 content:'Part 1 of the text develops the concepts that are needed for the discussion ofequilibria in chemistry. Equilibria include physical change, such as fusion an vaporization, and chemical change, including electrochemistry. The discussion isin terms of thermodynamics, and particularly in terms of enthalpy and entropy.We see that we can obtain a unified view of equilibrium and the direction of spontaneous change in terms of the chemical potentials of substances. The chapters in Part 1 deal with the bulk properties of matter; those of Part 2 willshow how these properties stem from the behaviour of individual atoms.'
 ,
 date:"24 sep 16"
},
 'articletwo':{
 title:"Article two",
 content:"this my second article",
 date:"25 sep 16"
},
 'articlethree':{
 title:"Article three",
 content:"this my third article",
 date:"26 sep 16"
}
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
var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1; 
   res.send(counter.toString());
});
app.get('/:articleName',function(req,res)

{    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
