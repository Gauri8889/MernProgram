const express = require("express");
const route = express.Router();
const stuController = require("../controllers/studentController");
route.post("/save",stuController.dataSave);
 route.get("/show",stuController.dataShow);
route.get("/searchdata", stuController.searchData);
route.delete("/deletedata",stuController.dataDelete);
route.put("/dataupdate", stuController.dataUpdate);
module.exports=route;