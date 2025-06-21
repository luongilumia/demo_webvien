// controllers/notificationController.js
const { notificationList } = require("../data/notification"); // Import dữ liệu

exports.getNotifications = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: notificationList, // Sử dụng dữ liệu từ file
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Lỗi server",
    });
  }
};
