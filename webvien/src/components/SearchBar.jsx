// components/SearchBar.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // ✅ Dùng trong dự án JavaScript
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Điều hướng đến trang kết quả tìm kiếm, hoặc chi tiết nếu bạn có logic lookup
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Tìm kiếm thông báo, tin tức, bài viết..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
      </button>
    </form>
  );
}
