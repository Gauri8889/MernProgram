const express = require("express");
const route = express.Router();
const EmpController= require("../controllers/empController");
route.post("/save", EmpController.dataSave);
route.get("/display",EmpController.dataDisplay);
route.get("/search",EmpController.dataSearch);
module.exports=route;
