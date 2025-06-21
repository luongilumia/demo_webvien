import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const { username, token, role, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Danh sách menu động
  const navItems = [
    { label: "Trang chủ", link: "/" },
    { label: "Giới thiệu", link: "/about" },
    { label: "Dịch vụ", link: "/services" },
    { label: "Tin tức", link: "/news" },
    { label: "Thông báo", link: "/notifications" },
  ];

  if (token) {
    if (isAdmin) {
      navItems.push({ label: "Quản lý", link: "/admin" });
    } else {
      navItems.push({ label: "Khóa học", link: "/services" });
    }
  }

  const authLinks = token
    ? [] // Nếu đã đăng nhập, không hiện
    : [
        { label: "Đăng nhập", link: "/login" },
        { label: "Đăng ký", link: "/register" },
      ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img
            src="/images/logo-removebg-preview.png"
            width="60"
            height="60"
            alt="Logo"
          />

          <div className="text-2xl text-blue-600 font-bold text-center">
            Viện Phát triển Khoa học Công nghệ và Giáo dục
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {authLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {token && (
              <>
                <span className="text-gray-700">👋 Xin chào, {username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Đăng xuất
                </button>
              </>
            )}
          </div>

          {/* Nút menu mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {openNav && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {[...navItems, ...authLinks].map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-2">
              <SearchBar />
            </div>

            {token && (
              <div className="pt-2">
                <p className="text-sm text-gray-600">👋 Xin chào, {username}</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
