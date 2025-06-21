import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"; // ✅ thêm dòng này

export default function AdminNewsManager() {
  const { isAdmin } = useAuth();
  const navigate = useNavigate(); // ✅ khởi tạo navigate
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  // ✅ Load danh sách tin
  const fetchNews = () => {
    fetch("http://localhost:5000/api/news")
      .then((res) => res.json())
      .then(setNews);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // ✅ Thêm / cập nhật tin
  const handleSave = () => {
    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/news/${editingId}`
      : "http://localhost:5000/api/news";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      setForm({ title: "", description: "", image: "" });
      setEditingId(null);
      fetchNews();

      // ✅ Sau khi thêm/sửa, quay lại trang chủ sau 500ms
      setTimeout(() => {
        navigate("/"); // Chuyển hướng về Home
      }, 500);
    });
  };

  // ✅ Sửa tin
  const handleEdit = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  // ✅ Xoá tin
  const handleDelete = (id) => {
    if (confirm("Xác nhận xoá tin này?")) {
      fetch(`http://localhost:5000/api/news/${id}`, { method: "DELETE" }).then(
        fetchNews
      );
    }
  };

  if (!isAdmin)
    return <div className="text-red-600 p-4">Bạn không có quyền truy cập.</div>;

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📰 Quản lý Tin tức</h2>

      {/* Form nhập tin */}
      <input
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Tiêu đề"
        className="border p-2 w-full mb-2"
      />
      <textarea
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Mô tả"
        className="border p-2 w-full mb-2"
      />
      <input
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        placeholder="URL hình ảnh"
        className="border p-2 w-full mb-2"
      />
      <div className="flex gap-2 mb-4">
        <button
          onClick={handleSave}
          className={`${
            editingId ? "bg-yellow-500" : "bg-green-500"
          } text-white px-4 py-2 rounded`}
        >
          {editingId ? "Cập nhật" : "Thêm mới"}
        </button>
        {/* ✅ Nút trở về trang chủ */}
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Trở về trang chủ
        </button>
      </div>

      {/* Danh sách tin */}
      <ul className="mt-6 space-y-4">
        {news.map((n) => (
          <li key={n.id} className="border p-3 rounded shadow">
            <h3 className="font-bold">{n.title}</h3>
            <p className="text-gray-700">{n.description}</p>
            {n.image && (
              <img src={n.image} alt="" className="w-32 mt-2 rounded border" />
            )}
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => handleEdit(n)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(n.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Xoá
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
