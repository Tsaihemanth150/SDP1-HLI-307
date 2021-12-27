const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const authenticate=require("./middleware/authenticate");
//databse
dotenv.config({path:'./config.env'});
require('./database/cons');

app.use(express.json());


app.use(require('./router/auth'));

// User = require('./model/schema');



//app.get('/Services',(req,res) =>{
//      res.send('hello world from node');    
//});

//app.get('/About',(req,res) =>{
  //    res.send('hello world from node');    
//});

app.get('/Login',(req,res) =>{
      res.send('hello world from node');    
});

app.get('/Sinup',(req,res) =>{
      res.send('hello world from sinuo');    
});
app.get('/Contact',(req,res) =>{
      //res.cookie("test","yesdone");
      res.send('hello world from node');    
});




//port
app.listen(3001,()=>{
      console.log('server is runningat port no 3001')
})