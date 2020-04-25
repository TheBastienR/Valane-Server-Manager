const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
let configFile = require("./config/general.json")

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.render("pages/login.ejs");   
});

app.post('/', function(req, res){
    res.send("<h1>Work In Progress...</h1>")
});


app.listen(configFile.port);