import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function CategoryManager() {
  const { isAdmin } = useAuth();
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState("");
  const [parentId, setParentId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const handleAdd = () => {
    fetch("http://localhost:5000/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCat, parent_id: parentId }),
    })
      .then((res) => res.json())
      .then((cat) => setCategories([...categories, cat]));
  };

  if (!isAdmin) return <div>Bạn không có quyền truy cập.</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Quản lý danh mục</h2>
      <div className="flex flex-col gap-2 mb-4">
        <input
          className="border p-2"
          value={newCat}
          onChange={(e) => setNewCat(e.target.value)}
          placeholder="Tên danh mục mới"
        />
        <select
          className="border p-2"
          value={parentId || ""}
          onChange={(e) => setParentId(e.target.value || null)}
        >
          <option value="">-- Không có thư mục cha --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2"
        >
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.id} className="p-2 border rounded">
            {cat.name}{" "}
            {cat.parent_id && (
              <span className="text-sm text-gray-500">
                (thuộc ID {cat.parent_id})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
