import React from "react";

const NewsItem = ({ title, description, image, link }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white max-w-sm md:max-w-lg mx-auto">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="px-6 py-4">
        <h2 className="text-lg font-bold text-blue-800 leading-snug mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <a
          href={link}
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
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
