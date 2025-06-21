exports.getServices = (req, res) => {
  try {
    // Logic xử lý (ví dụ: lấy dữ liệu từ database)
    const services = [
      { id: 1, name: "Dịch vụ 1" },
      { id: 2, name: "Dịch vụ 2" },
    ];
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: "Lỗi server" });
  }
};
