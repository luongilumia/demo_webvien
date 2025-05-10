import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="p-8 max-w-4xl mx-auto">
        {/* Thông tin liên hệ */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Thông tin liên hệ
          </h2>
          <p className="text-gray-700 mb-2">
            📍 Địa chỉ: 123 Đường Nguyễn Văn Cừ, Quận 5, TP. Hồ Chí Minh
          </p>
          <p className="text-gray-700 mb-2">📞 Điện thoại: (028) 1234 5678</p>
          <p className="text-gray-700 mb-2">📧 Email: contact@ised.edu.vn</p>
          <p className="text-gray-700">
            ⏰ Giờ làm việc: 8:00 - 17:00 (Thứ 2 - Thứ 6)
          </p>
        </div>

        {/* Google Map */}
        <div className="mb-10">
          <iframe
            title="Bản đồ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.214192497712!2d106.67998347476376!3d10.795789389355142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d2f3ea2e6f%3A0xb8238e17eb41e92f!2zTmdoaeG7h3QgVsO1IFRow6BuaCBWxakgS2jDoW5nIFTDom4gSG_DoCAtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1715332634123!5m2!1svi!2s"
            width="100%"
            height="350"
            className="rounded-lg shadow"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form liên hệ */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Gửi liên hệ
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Họ và tên</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập họ tên của bạn"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nhập email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Nội dung</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Viết nội dung bạn muốn gửi"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Gửi liên hệ
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
