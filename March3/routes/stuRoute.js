const express = require("express");
const route = express.Router();
const stuController = require("../controllers/stuController");

route.get("/home", stuController.homePage);
route.get("about",stuController.AboutPage);
module.exports = route;