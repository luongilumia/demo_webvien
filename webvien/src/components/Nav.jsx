import React from "react";

const Nav = () => {
  const navItems = ["Trang chủ", "Giới thiệu", "Dịch vụ", "Liên hệ"];

  return (
    <nav className="hidden md:flex space-x-6 bg-blue-500 pl-30 h-10">
      {navItems.map((item) => (
        <a
          key={item}
          href="#"
          className="text-white hover:text-blue-500 transition-colors mt-2"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
