const express=require('express');
const path = require('path');
var cors = require('cors');

const app=express();
app.use(cors());
bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',require('./routes/api'));
app.use('/search',express.static('./client/search/build'));
app.use('/movie',express.static('./client/movie/build'));


app.get('/search',function(req,res){
    res.sendFile(path.join(__dirname,'/client/search/build/index.html'));
})

app.get('/movie',function(req,res){
    res.sendFile(path.join(__dirname,'/client/movie/build/index.html'));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);