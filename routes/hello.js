const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from CI/CD app!" });
});

module.exports = router;
