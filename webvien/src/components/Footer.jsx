import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

export default function Footer() {
  return (
    <footer className="bg-[#5c74a1] text-white py-10 mt-4 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Cột 1: Thông tin liên hệ */}
        <div>
          <h3 className="font-bold text-lg mb-2">
            <span className="font-semibold">Viện</span> Phát triển{" "}
            <span className="font-semibold">Khoa học</span> Công nghệ và{" "}
            <span className="font-semibold">Giáo dục</span>
          </h3>
          <p className="font-semibold">
            224, đường Điện Biên Phủ, phường Võ Thị Sáu, quận 3, thành phố Hồ
            Chí Minh
          </p>
          <p className="mt-2">Phone: +84903661688</p>
          <p>Email: contact@ised.edu.vn</p>
        </div>

        {/* Cột 2: Menu */}
        <div>
          <h3 className="font-bold mb-2">ISED</h3>
          <ul className="space-y-1 text-gray-200">
            <li>
              <Link to="/" className="hover:underline">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Dịch vụ
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline">
                Bảng tin
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 3: Bản quyền + Social */}
        <div className="text-center md:text-right flex flex-col justify-between">
          <p className="font-bold mb-4">
            © Bản quyền của Viện Phát triển Khoa học Công nghệ và Giáo dục. All
            Rights Reserved
          </p>
          <div className="flex justify-center md:justify-end gap-4">
            {[FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-[#3b4c74] hover:bg-[#2f3f64] p-3 rounded-md text-white text-lg transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
