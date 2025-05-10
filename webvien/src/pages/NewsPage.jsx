import React from "react";
import { Link } from "react-router-dom";

const newsList = [
  { id: 1, title: "Tin tức 1", image: "/img1.png" },
  { id: 2, title: "Tin tức 2", image: "/img2.png" },
  { id: 3, title: "Tin tức 3", image: "/img3.png" },
  { id: 4, title: "Tin tức 3", image: "/img3.png" },
  { id: 5, title: "Tin tức 3", image: "/img3.png" },
  { id: 6, title: "Tin tức 3", image: "/img3.png" },
];

const NewsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {newsList.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{news.title}</h2>
            <Link
              to={`/news/${news.id}`}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Đọc tiếp
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;
