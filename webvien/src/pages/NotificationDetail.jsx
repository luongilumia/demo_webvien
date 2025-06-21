import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const notificationList = [
  {
    id: 1,
    title: "Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí",
    content: `
Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

- Nhằm thực hiện chương trình “Gắn kết yêu thương – thắt chặt tình đoàn kết” của Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group;
- Nhằm giúp học sinh được tiếp cận với công nghệ, tăng cường kỹ năng số cho học sinh;

Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

Khi tham gia lớp học này, học sinh sẽ được tìm hiểu về ngôn ngữ lập trình và thiết kế website gồm HTML, CSS và Javascript. Học sinh sẽ ứng dụng những ngôn ngữ trên để sáng tạo ra những website của riêng mình. Thông qua chương trình, học sinh còn được rèn luyện kỹ năng sử dụng máy tính, giao tiếp trên môi trường số, trang bị thêm kỹ năng công nghệ.

⏰ Lớp học dự kiến khai giảng: thứ Bảy, ngày 05/04/2025 từ 19:00 đến 20:30 qua Zoom. 
📚 Tổng thời lượng: 12 buổi học trực tuyến.

🚨 Đây là lớp học hoàn toàn miễn phí với số lượng có giới hạn. Nếu đủ học viên, đơn vị tổ chức sẽ mở thêm lớp mới trong tương lai.

👉 Quý phụ huynh vui lòng đăng ký sớm tại đường link: https://example.com/dang-ky
    `,
    image: "/images/news4.jpg",
  },
  {
    id: 2,
    title: "Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí",
    content: `
Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

- Nhằm thực hiện chương trình “Gắn kết yêu thương – thắt chặt tình đoàn kết” của Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group;
- Nhằm giúp học sinh được tiếp cận với công nghệ, tăng cường kỹ năng số cho học sinh;

Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

Khi tham gia lớp học này, học sinh sẽ được tìm hiểu về ngôn ngữ lập trình và thiết kế website gồm HTML, CSS và Javascript. Học sinh sẽ ứng dụng những ngôn ngữ trên để sáng tạo ra những website của riêng mình. Thông qua chương trình, học sinh còn được rèn luyện kỹ năng sử dụng máy tính, giao tiếp trên môi trường số, trang bị thêm kỹ năng công nghệ.

⏰ Lớp học dự kiến khai giảng: thứ Bảy, ngày 05/04/2025 từ 19:00 đến 20:30 qua Zoom. 
📚 Tổng thời lượng: 12 buổi học trực tuyến.

🚨 Đây là lớp học hoàn toàn miễn phí với số lượng có giới hạn. Nếu đủ học viên, đơn vị tổ chức sẽ mở thêm lớp mới trong tương lai.

👉 Quý phụ huynh vui lòng đăng ký sớm tại đường link: https://example.com/dang-ky
    `,
    image: "/images/news5.jpg",
  },
  {
    id: 3,
    title: "Đăng ký Lớp học Lập trình HTML, CSS và Javascript miễn phí",
    content: `
Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

- Nhằm thực hiện chương trình “Gắn kết yêu thương – thắt chặt tình đoàn kết” của Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group;
- Nhằm giúp học sinh được tiếp cận với công nghệ, tăng cường kỹ năng số cho học sinh;

Chi bộ Công ty Cổ phần Đầu tư AN NÔNG PHÚ Group kết hợp cùng Trung tâm Đào tạo và Ứng dụng Công nghệ số thuộc Viện Phát triển Khoa học Công nghệ và Giáo dục tiến hành chiêu sinh lớp học “Lập trình HTML, CSS và Javascript” miễn phí.

Khi tham gia lớp học này, học sinh sẽ được tìm hiểu về ngôn ngữ lập trình và thiết kế website gồm HTML, CSS và Javascript. Học sinh sẽ ứng dụng những ngôn ngữ trên để sáng tạo ra những website của riêng mình. Thông qua chương trình, học sinh còn được rèn luyện kỹ năng sử dụng máy tính, giao tiếp trên môi trường số, trang bị thêm kỹ năng công nghệ.

⏰ Lớp học dự kiến khai giảng: thứ Bảy, ngày 05/04/2025 từ 19:00 đến 20:30 qua Zoom. 
📚 Tổng thời lượng: 12 buổi học trực tuyến.

🚨 Đây là lớp học hoàn toàn miễn phí với số lượng có giới hạn. Nếu đủ học viên, đơn vị tổ chức sẽ mở thêm lớp mới trong tương lai.

👉 Quý phụ huynh vui lòng đăng ký sớm tại đường link: https://example.com/dang-ky
    `,
    image: "/images/news3.jpg",
  },
];

const NotificationDetail = () => {
  const { id } = useParams();
  const notification = notificationList.find(
    (item) => item.id === parseInt(id)
  );

  if (!notification) {
    return (
      <div className="p-8 text-center text-red-500">
        Không tìm thấy thông báo
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Nav />
      <div className="max-w-4xl mx-auto p-6">
        <img
          src={notification.image}
          alt={notification.title}
          className="w-full h-80 object-cover rounded-xl mb-6 shadow"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          {notification.title}
        </h1>
        <div className="text-gray-800 text-lg whitespace-pre-line leading-relaxed">
          {notification.content}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotificationDetail;
