const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser = require('body-parser')
var cors = require('cors')
const adminRoute = require("./routes/adminRoute");
const DBCon = require("./config/db");
DBCon.connectDB();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

// use cors middleware
app.use(cors())
app.use("/admin", adminRoute);

const port=process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`server run on port : ${port}`);
})