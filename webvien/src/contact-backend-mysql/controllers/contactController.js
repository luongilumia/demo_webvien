const db = require("../config/db");

exports.submitContact = async (req, res) => {
  console.log("Dữ liệu nhận được từ frontend:", req.body); // DEBUG

  const { name, phone, email, message } = req.body;

  try {
    const sql = `INSERT INTO contacts (name, phone, email, message) VALUES (?, ?, ?, ?)`;
    await db.execute(sql, [name, phone, email, message]);
    res.status(201).json({ message: "Thông tin đã được lưu thành công!" });
  } catch (err) {
    console.error("Lỗi lưu dữ liệu:", err);
    res.status(500).json({ error: "Lưu dữ liệu thất bại." });
  }
};
