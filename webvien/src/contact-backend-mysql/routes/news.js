// routes/news.js
const express = require("express");
const router = express.Router();
const { getAllNews, getNewsById } = require("../controllers/newsController"); // Import hàm controller

// Định nghĩa route
router.get("/", getAllNews); // Lấy tất cả bài viết
router.get("/:id", getNewsById); // Lấy bài viết theo ID

module.exports = router;
