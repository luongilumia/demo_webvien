import React from "react";
import { Link } from "react-router-dom";
import { notificationList } from "../data/NotList"; // ✅ chỉ cần import

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
            <div className="mt-auto">
              <Link
                to={`/notification/${notification.id}`}
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
        </div>
      ))}
    </div>
  );
};

export default Notification;
