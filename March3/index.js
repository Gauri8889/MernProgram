const express = require("express");
const app = express();
const route = express.Router();

const stuRoute = require("./routes/stuRoute");


app.use("/students", stuRoute); 


app.listen(7000, () => {
    console.log("Server is running on port 7000");
});