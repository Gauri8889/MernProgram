const express = require("express");
const app = express();
app.get("/myhome", (req, res)=>{
    res.send("<h1>welcome to home page</h1>");

})
app.get("/aboutus", (req, res)=>{
    res.send("<h1>about  page</h1>");

})

app.get("/contact", (req, res)=>{
    res.send("<h1>contact  page</h1>");

})



app.listen(8000);