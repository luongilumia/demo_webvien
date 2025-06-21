import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Header />
      <Nav />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Giới thiệu Viện Phát triển Khoa học Công nghệ và Giáo dục
        </h1>

        {/* Lời mở đầu */}
        <section className="mb-10">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Viện Phát triển Khoa học Công nghệ và Giáo dục là tổ chức khoa học
            và công nghệ hoạt động theo Luật Khoa học và Công nghệ năm 2013. Với
            mục tiêu thúc đẩy sự phát triển toàn diện, Viện tập hợp đội ngũ nhà
            khoa học, chuyên gia và cán bộ trình độ cao để nghiên cứu, đào tạo,
            ứng dụng công nghệ vào giáo dục và phát triển xã hội.
          </p>
        </section>

        {/* Sứ mệnh & Tầm nhìn */}
        <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Sứ mệnh & Tầm nhìn
            </h2>
            <p className="text-gray-700 text-justify">
              Sứ mệnh của Viện là nâng cao năng lực nghiên cứu, sáng tạo, đào
              tạo và ứng dụng khoa học công nghệ phục vụ cho công cuộc đổi mới
              giáo dục, phát triển kinh tế tri thức và hội nhập quốc tế.
              <br />
              <br />
              Tầm nhìn đến năm 2030, Viện trở thành trung tâm hàng đầu về nghiên
              cứu, đào tạo và tư vấn trong lĩnh vực giáo dục và công nghệ tại
              Việt Nam.
            </p>
          </div>
          <img
            src="/images/news1.jpg"
            alt="Sứ mệnh"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </section>

        {/* Chức năng nhiệm vụ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Chức năng & Nhiệm vụ
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
            <li>Đào tạo và bồi dưỡng nâng cao trình độ chuyên môn.</li>
            <li>Nghiên cứu, phát triển và ứng dụng công nghệ vào giáo dục.</li>
            <li>Tư vấn, chuyển giao công nghệ và giáo dục.</li>
            <li>Hợp tác quốc tế trong lĩnh vực khoa học và giáo dục.</li>
            <li>
              Tổ chức hội thảo, hội nghị và xuất bản các ấn phẩm khoa học.
            </li>
          </ul>
        </section>

        {/* Lời ngỏ */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Lời ngỏ</h2>
          <p className="text-gray-700 italic">
            “Viện Phát triển Khoa học Công nghệ và Giáo dục không ngừng nỗ lực
            vì một nền giáo dục tiên tiến, hội nhập và sáng tạo. Chúng tôi cam
            kết đồng hành cùng cộng đồng trong hành trình phát triển tri thức và
            công nghệ.”
          </p>
        </section>

        {/* Link về trang chủ */}
        <div className="text-center mt-10">
          <Link
            to="/"
            className="text-blue-500 underline hover:text-blue-700 font-medium"
          >
            ← Quay về Trang chủ
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
