import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  if (!isAdmin) return <div>Bạn không có quyền truy cập.</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">👑 Trang quản trị</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-yellow-500 text-white p-4 rounded"
          onClick={() => navigate("/admin/news")}
        >
          Quản lý Tin tức
        </button>
      </div>
    </div>
  );
}
