const express = require("express");
const app=express();
const stuRoute = require("./routes/studentRoute");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");



mongoose.connect("mongodb://127.0.0.1:27017/mern6pm").then(()=>{
    console.log("mongoDB connect");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
app.use("/students",stuRoute);


app.listen(8000, ()=>{
    console.log("server run on 8000 port");
})