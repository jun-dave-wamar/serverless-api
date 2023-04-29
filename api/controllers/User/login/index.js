const express = require("express");
const router = express.Router();
const User = require("../../../models/User");
const connection = require("../../../../db");
require("dotenv").config();



router.post("/", async (req, res) => {
  try {
    

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
