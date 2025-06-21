// controllers/blogController.js
const { blogList } = require("../data/blogs"); // Import đúng tên

const getBlogs = (req, res) => {
  res.json(blogList); // Trả về blogList thay vì blogs
};

module.exports = {
  getBlogs,
};
