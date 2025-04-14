const express = require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const EmpRoute = require("./routes/empRoute");
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/gouriemp").then(()=>{
    console.log("DB Succefully connected!!");
})
app.use("/employees",EmpRoute);

app.listen(8000, ()=>{
    console.log("server run on 8000!!!")
})