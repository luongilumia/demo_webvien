import React from "react";
import { useParams } from "react-router-dom";
import Headers from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const newsList = [
  {
    id: 1,
    title: "Lớp bồi dưỡng kiến thức UNESCO",
    content: "Đây là nội dung chi tiết của tin tức số 1...",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Tin tức 2",
    content: "Nội dung chi tiết của tin tức số 2...",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Tin tức 2",
    content: "Nội dung chi tiết của tin tức số 2...",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "Tin tức 2",
    content: "Nội dung chi tiết của tin tức số 2...",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    title: "Tin tức 2",
    content: "Nội dung chi tiết của tin tức số 2...",
    image: "/images/news5.jpg",
  },
  {
    id: 6,
    title: "Tin tức 2",
    content: "Nội dung chi tiết của tin tức số 2...",
    image: "/images/news6.jpg",
  },
];

const NewsDetail = () => {
  const { id } = useParams(); // Lấy id trên URL
  const news = newsList.find((item) => item.id === parseInt(id));

  return (
    <div>
      <Headers />
      <Nav />
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Nội dung bài viết chi tiết */}
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-blue-gray-800 mb-4">
            {news?.title}
          </h1>
          {news?.image && (
            <img
              src={news.image}
              alt={news.title}
              className="w-full max-h-[400px] object-cover mb-6 rounded"
            />
          )}
          <div className="whitespace-pre-line text-gray-800 leading-relaxed text-lg">
            {news?.content}
          </div>
        </div>

        {/* Danh sách tin tức khác */}
        <div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-3">
              Tin tức khác
            </h2>
            <ul className="space-y-4 text-sm">
              {newsList
                .filter((item) => item.id !== parseInt(id))
                .map((item) => (
                  <li key={item.id} className="flex space-x-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <a
                        href={`/tin-tuc/${item.id}`}
                        className="text-blue-700 hover:underline font-medium"
                      >
                        {item.title}
                      </a>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {item.content}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsDetail;
