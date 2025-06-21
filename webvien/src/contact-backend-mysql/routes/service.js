const express = require("express");
const router = express.Router();
const { getServices } = require("../controllers/serviceController"); // Import controller

// Sử dụng hàm handler
router.get("/", getServices); // ✅ getServices phải là một hàm

module.exports = router;
