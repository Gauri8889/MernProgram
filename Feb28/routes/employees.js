const express = require("express");
const router = express.Router();

router.get("/detail", (req, res) => {
    res.send("Welcome to detail page");
});

router.get("/destination", (req, res) => {  // Corrected typo: 'desination' -> 'destination'
    res.send("Our destination");
});

router.get("/salary", (req, res) => {
    res.send("Our college fees");  // Corrected typo: 'collage' -> 'college'
});

module.exports = router;
