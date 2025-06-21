import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const newsList = [
  { id: 1, title: "Tin tức 1", image: "/images/news1.jpg" },
  { id: 2, title: "Tin tức 2", image: "/images/news2.jpg" },
  { id: 3, title: "Tin tức 3", image: "/images/news3.jpg" },
  { id: 4, title: "Tin tức 3", image: "/images/news4.jpg" },
  { id: 5, title: "Tin tức 3", image: "/images/news5.jpg" },
  { id: 6, title: "Tin tức 3", image: "/images/news6.jpg" },
];

const NewsPage = () => {
  return (
    <div>
      {" "}
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h2 className="text-lg font-bold mb-4">{news.title}</h2>
              <div className="mt-auto">
                <Link
                  to={`/news/${news.id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Đọc tiếp
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
