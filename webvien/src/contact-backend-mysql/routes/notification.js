const express = require("express");
const router = express.Router();
// Import đúng hàm từ controller
const { getNotifications } = require("../controllers/notificationController");

// Định nghĩa route với handler là hàm getNotifications
router.get("/", getNotifications);

module.exports = router;
