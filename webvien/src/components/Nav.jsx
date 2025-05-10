import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Dịch vụ", path: "/services" }, // nếu có sau này
    { name: "Liên hệ", path: "/contact" }, // nếu có sau này
  ];

  return (
    <nav className="hidden md:flex space-x-6 bg-blue-500 pl-30 h-10">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className="text-white hover:text-blue-500 transition-colors mt-2"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
