const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
let configFile = require("./config/general.json")
let passFile = require("./config/pass.json")
let isConnected = false;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res){
    res.render("pages/login.ejs");   
});

app.post('/', function(req, res){
    if(req.body.pass != passFile.pass){
        isConnected = false
    }else{
        res.redirect("/panel")
        isConnected = true
    }
});

app.get('/panel', function (req, res){
    if(isConnected){
        res.render("pages/panel.ejs");   
    }else{
        res.redirect('/')
    }
});

app.get('/logout', function (req, res){
    res.redirect('/');
    isConnected = false  
});


app.listen(configFile.port);