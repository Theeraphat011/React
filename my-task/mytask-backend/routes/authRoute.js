const express = require("express");
const { register, login } = require("../controllers/authController");
const authLimiter = require("../middleware/authLimit");
const router = express.Router();

router.post("/register", authLimiter, register);
router.post("/login", authLimiter, login);

module.exports = router;