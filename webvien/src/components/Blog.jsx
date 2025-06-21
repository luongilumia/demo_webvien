import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục",
      description:
        "Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO tổ chức lớp bồi dưỡng kiến thức.",
      imageUrl: "/images/news1.jpg",
    },
    {
      id: 2,
      title: "Sự kiện UNESCO về Phát triển Khoa học và Công nghệ",
      description:
        "Sự kiện thúc đẩy phát triển khoa học và công nghệ với sự tham gia của các chuyên gia quốc tế.",
      imageUrl: "/images/news2.jpg",
    },
    {
      id: 3,
      title: "Sự kiện UNESCO về Phát triển Khoa học và Công nghệ",
      description:
        "Sự kiện thúc đẩy phát triển khoa học và công nghệ với sự tham gia của các chuyên gia quốc tế.",
      imageUrl: "/images/news6.jpg",
    },
    // Bạn có thể thêm bài viết mới tại đây
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <div key={blog.id} className="flex">
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg w-full h-full">
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="flex flex-col flex-grow px-6 py-4">
              <h2 className="text-lg font-bold text-blue-800 leading-snug mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {blog.description}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline mt-auto"
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
        </div>
      ))}
    </div>
  );
};

export default Blog;
