const express = require("express");
const router = express.Router();
const { createToken } = require("../../../../middleware/auth");

router.post("/", async (req, res) => {
  try {
 
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
