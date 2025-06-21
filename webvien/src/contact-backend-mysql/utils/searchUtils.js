// backend/utils/searchUtils.js
const { blogList } = require("../data/blogs");
const { newsList } = require("../data/news");
const { notificationList } = require("../data/notification");
const { serviceList } = require("../data/services");

// Hàm tìm kiếm chung
function searchData(data, query, fields) {
  const lowerQuery = query.toLowerCase();

  return data.filter((item) =>
    fields.some(
      (field) => item[field] && item[field].toLowerCase().includes(lowerQuery)
    )
  );
}

// Tìm kiếm toàn bộ dữ liệu
function searchAll(query) {
  const results = {
    blogs: searchData(blogList, query, ["title", "description", "content"]),
    news: searchData(newsList, query, ["title", "description"]),
    notifications: searchData(notificationList, query, [
      "title",
      "description",
    ]),
    services: searchData(serviceList, query, [
      "title",
      "description",
      "content",
    ]),
  };

  return results;
}

module.exports = { searchAll };
