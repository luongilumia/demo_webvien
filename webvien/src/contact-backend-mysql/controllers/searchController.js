const { blogList } = require("../data/blogs");
const { newsList } = require("../data/news");
const { notificationList } = require("../data/notification");
const { serviceList } = require("../data/services");

exports.search = async (req, res) => {
  const query = (req.query.q || "").toLowerCase().trim();

  if (!query) return res.json({ results: [] });

  // Tìm trong từng danh sách
  const blogResults = blogList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
  );

  const newsResults = newsList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
  );

  const notificationResults = notificationList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.content.toLowerCase().includes(query)
  );

  const serviceResults = serviceList.filter(
    (item) =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
  );

  res.json({
    results: {
      blogs: blogResults,
      news: newsResults,
      notifications: notificationResults,
      services: serviceResults,
    },
  });
};
