import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <Header />
      <Nav />
      <div className="bg-gray-100 py-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Dịch vụ
        </h2>
      </div>

      <div className="px-8 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dịch vụ 1 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Đào tạo, nâng cao kiến thức và năng lực chuyên môn
            </h3>
            <p className="text-gray-700 mb-4">
              Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan
              trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn,
              sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Xem tiếp
            </button>
          </div>

          {/* Dịch vụ 2 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Dịch vụ đăng ký thương hiệu, nhãn hiệu độc quyền
            </h3>
            <p className="text-gray-700 mb-4">
              Nhãn hiệu là dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các
              tổ chức, cá nhân khác nhau. Nhãn hiệu bao gồm nhãn hiệu thông
              thường, nhãn hiệu tập thể, nhãn hiệu chứng nhận, nhãn hiệu liên
              kết và nhãn hiệu nổi tiếng.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Xem tiếp
            </button>
          </div>

          {/* Dịch vụ 3 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Dịch vụ chứng nhận ISO 9001:2015
            </h3>
            <p className="text-gray-700 mb-4">
              Để đạt được chứng nhận ISO 9001:2015, tổ chức phải hoàn thành một
              quá trình đánh giá và xác minh của một tổ chức độc lập bên thứ 3
              để chứng minh rằng hệ thống quản lý chất lượng của doanh nghiệp
              mình đáp ứng được các yêu cầu của tiêu chuẩn ISO 9001.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Xem tiếp
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
