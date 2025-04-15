import React from "react";

import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const navItems = ["Sales", "New In", "Blocks", "Docs"];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <img
            src="/images/logo-removebg-preview.png"
            width="50"
            height="50"
            alt="Logo"
          />

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            <h1>Viện Phát triển Khoa học Công nghệ và Giáo dục</h1>
          </div>

          {/* Desktop Navigation */}

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
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
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
