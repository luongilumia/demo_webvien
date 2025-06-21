const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

// 📦 Kết nối MySQL bằng pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "contact_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 🔐 API Đăng ký
app.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Thiếu tài khoản hoặc mật khẩu" });
    }

    const [existing] = await pool.query(
      "SELECT * FROM users WHERE username = ?",
      [username]
    );
    if (existing.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Tài khoản đã tồn tại" });
    }

    await pool.query(
      "INSERT INTO users (username, password, role) VALUES (?, ?, ?)",
      [username, password, "user"]
    );
    res.json({ success: true, message: "Đăng ký thành công" });
  } catch (err) {
    console.error("❌ Lỗi đăng ký:", err);
    res.status(500).json({ success: false, message: "Lỗi máy chủ" });
  }
});

// 🔐 API Đăng nhập
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const [users] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [username, password]
    );
    if (users.length === 0) {
      return res.status(401).json({ error: "Sai tài khoản hoặc mật khẩu" });
    }

    const user = users[0];
    res.json({
      token: "fake-jwt-token",
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    console.error("❌ Lỗi đăng nhập:", err);
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
});

// 📄 API CRUD Tin tức
app.get("/api/news", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM news ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error("❌ Lỗi lấy tin:", err);
    res.status(500).json({ success: false, message: "Không thể lấy tin tức" });
  }
});

app.post("/api/news", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    await pool.query(
      "INSERT INTO news (title, description, image) VALUES (?, ?, ?)",
      [title, description, image]
    );
    res.json({ success: true, message: "Đã thêm tin mới" });
  } catch (err) {
    console.error("❌ Lỗi thêm tin:", err);
    res.status(500).json({ success: false, message: "Không thể thêm tin" });
  }
});

app.put("/api/news/:id", async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const { id } = req.params;
    await pool.query(
      "UPDATE news SET title = ?, description = ?, image = ? WHERE id = ?",
      [title, description, image, id]
    );
    res.json({ success: true, message: "Đã cập nhật tin" });
  } catch (err) {
    console.error("❌ Lỗi cập nhật tin:", err);
    res.status(500).json({ success: false, message: "Không thể cập nhật tin" });
  }
});

app.delete("/api/news/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM news WHERE id = ?", [id]);
    res.json({ success: true, message: "Đã xoá tin" });
  } catch (err) {
    console.error("❌ Lỗi xoá tin:", err);
    res.status(500).json({ success: false, message: "Không thể xoá tin" });
  }
});

// ✅ Bắt route không tồn tại
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Không tìm thấy đường dẫn" });
});

// 🚀 Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
