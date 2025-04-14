const express = require("express");
const route = express.Router();
const AdminController= require("../controllers/adminControllers");

route.post("/adminlogin", AdminController.adminLogin)


module.exports = route;