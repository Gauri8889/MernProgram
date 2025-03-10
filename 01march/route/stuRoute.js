const express = require("express"); // Corrected typo here
const route = express.Router(); // Corrected typo here
const StuController = require("../controller/stuController");

route.get("/home", StuController.homePage);
route.get("/subject", StuController.subjectPage);
route.get("/fees", StuController.feesPage);

module.exports = route;






// const exprees = require("express");
// const route = exprees.Router();
// const StuController = require("../controller/stuController");
// route.get("/home", StuController.homePage);
// route.get("/subject", StuController.subjectPage);
// route.get("/fees", StuController.feesPage);
// module.exports= route;