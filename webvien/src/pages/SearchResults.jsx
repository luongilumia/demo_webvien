import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function SearchResults() {
  const [results, setResults] = useState({
    blogs: [],
    news: [],
    notifications: [],
    services: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError(null);
      axios
        .get(`http://localhost:3001/api/search?q=${encodeURIComponent(query)}`)
        .then((res) => {
          setResults(res.data.results || {});
        })
        .catch((err) => {
          console.error(err);
          setError("Lỗi khi tìm kiếm.");
        })
        .finally(() => setLoading(false));
    }
  }, [query]);

  if (!query) return <div className="p-4">Vui lòng nhập từ khóa tìm kiếm.</div>;
  if (loading) return <div className="p-4">Đang tìm kiếm...</div>;
  if (error) return <div className="p-4 text-red-600">{error}</div>;

  const Section = ({ title, data }) => (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="ml-4">
            • {item.title}
          </div>
        ))
      ) : (
        <div className="ml-4 text-gray-500">Không có kết quả.</div>
      )}
    </section>
  );

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">
        Kết quả tìm kiếm cho: "{query}"
      </h1>

      <Section title="🔔 Thông báo" data={results.notifications} />
      <Section title="📰 Tin tức" data={results.news} />
      <Section title="📝 Bài viết" data={results.blogs} />
      <Section title="💼 Dịch vụ" data={results.services} />
    </div>
  );
}
