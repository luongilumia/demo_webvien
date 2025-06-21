// controllers/newsController.js
const { newsList } = require("../data/news"); // Import dữ liệu news

// Lấy tất cả bài viết
exports.getAllNews = (req, res) => {
  res.json(newsList);
};

// Lấy bài viết theo ID
exports.getNewsById = (req, res) => {
  const id = parseInt(req.params.id);
  const newsItem = newsList.find((item) => item.id === id); // Sửa tên biến
  if (newsItem) {
    res.json(newsItem);
  } else {
    res.status(404).json({ message: "Bài viết không tồn tại" }); // Sửa thông báo
  }
};
