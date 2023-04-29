const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
