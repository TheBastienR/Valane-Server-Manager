var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.render("pages/login.ejs");   
});


app.listen(2301);