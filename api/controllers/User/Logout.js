const express = require("express");
const router = express.Router();

router.get("/logout", async (req, res) => {
  const token = req.cookies["token"];
  try {
    if (!token) {
      return res
        .status(401)
        .json({ message: "You need to be logged in to continue." });
    }
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ message: "Server error" });
  }
});

module.exports = router;
