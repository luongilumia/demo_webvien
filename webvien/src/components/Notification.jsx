import React from "react";
import { Link } from "react-router-dom";

const notificationList = [
  {
    id: 1,
    title: "Lớp bồi dưỡng kiến thức UNESCO",
    description:
      "Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO tổ chức lớp bồi dưỡng kiến thức UNESCO.",
    image: "/your-image-path.png", // Thay đường dẫn ảnh thực tế
  },
  {
    id: 2,
    title: "Sự kiện UNESCO về Khoa học và Công nghệ",
    description:
      "Sự kiện nhằm thúc đẩy khoa học và công nghệ tại các quốc gia thành viên, thu hút nhiều chuyên gia quốc tế tham dự.",
    image: "/your-image-path-2.png",
  },
  {
    id: 3,
    title: "Ký kết hợp tác đào tạo chuyển đổi số",
    description:
      "Viện ký kết hợp tác chiến lược với các đơn vị giáo dục hàng đầu về đào tạo chuyển đổi số.",
    image: "/your-image-path-3.png",
  },
  // Thêm nhiều bản tin khác nếu cần
];

const Notification = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6 p-4">
      {notificationList.map((notification) => (
        <div
          key={notification.id}
          className="rounded-2xl overflow-hidden shadow-lg bg-white max-w-sm md:max-w-lg mx-auto flex flex-col"
        >
          <img
            src={notification.image}
            alt={notification.title}
            className="w-full h-60 object-cover"
          />
          <div className="flex flex-col flex-grow px-6 py-4">
            <h2 className="text-lg font-bold text-blue-800 leading-snug mb-2">
              {notification.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 flex-grow">
              {notification.description}
            </p>
            <Link
              to={`/notification/${notification.id}`}
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
      ))}
    </div>
  );
};

export default Notification;
