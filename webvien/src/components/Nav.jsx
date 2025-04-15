import React from "react";

const Nav = () => {
  const navItems = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Liên hệ"];

  return (
    <nav className="hidden md:flex space-x-6 bg-blue-500 pl-30">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className="text-gray-600 hover:text-blue-500 transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
