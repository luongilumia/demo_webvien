import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

const newsList = [
  {
    id: 1,
    title:
      "Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục theo tinh thần của UNESCO",
    description:
      "Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO tổ chức lớp bồi dưỡng kiến thức UNESCO.",
    image: "/your-image-path.png",
  },
  {
    id: 2,
    title: "Sự kiện Khoa học Công nghệ 2025",
    description:
      "Sự kiện trọng điểm của Viện về phát triển khoa học công nghệ sẽ diễn ra vào tháng 1/2025 tại TP.HCM.",
    image: "/your-image-path.png",
  },
  {
    id: 3,
    title: "Ký kết hợp tác đào tạo chuyển đổi số",
    description:
      "Viện ký kết hợp tác chiến lược với các đơn vị giáo dục hàng đầu về đào tạo chuyển đổi số.",
    image: "/your-image-path.png",
  },
  {
    id: 4,
    title:
      "Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục theo tinh thần của UNESCO",
    description:
      "Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO tổ chức lớp bồi dưỡng kiến thức UNESCO.",
    image: "/your-image-path.png",
  },
  {
    id: 5,
    title: "Sự kiện Khoa học Công nghệ 2025",
    description:
      "Sự kiện trọng điểm của Viện về phát triển khoa học công nghệ sẽ diễn ra vào tháng 1/2025 tại TP.HCM.",
    image: "/your-image-path.png",
  },
  {
    id: 6,
    title: "Ký kết hợp tác đào tạo chuyển đổi số",
    description:
      "Viện ký kết hợp tác chiến lược với các đơn vị giáo dục hàng đầu về đào tạo chuyển đổi số.",
    image: "/your-image-path.png",
  },
];

const NewsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 p-4">
      {newsList.map((news) => (
        <div
          key={news.id}
          className="rounded-xl overflow-hidden shadow-lg bg-white max-w-sm md:max-w-lg mx-auto"
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-60 object-cover"
          />
          <div className="px-6 py-4">
            <h2 className="text-lg font-bold text-blue-800 leading-snug mb-2">
              {news.title}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{news.description}</p>
            <Link
              to={`/news/${news.id}`} // ✅ Link đến trang chi tiết
              className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline"
            >
              Đọc tiếp
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
