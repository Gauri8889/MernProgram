const express = require("express");
const router = express.Router();

router.get("/homepage", (req, res) => {
    res.send("Welcome to home page"); // Corrected the typo here
});

router.get("/about", (req, res) => {
    res.send("our about");
});

router.get("/services", (req, res) => {
    res.send("our service");
});

module.exports = router;
