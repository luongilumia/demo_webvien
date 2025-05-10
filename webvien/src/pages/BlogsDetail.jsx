import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const BlogDetail = () => {
  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title:
        "Lớp bồi dưỡng kiến thức UNESCO về Phát triển Khoa học, Công nghệ và Giáo dục",
      description:
        "Ngày 26/05/2024, Viện Phát triển Khoa học Công nghệ và Giáo dục phối hợp cùng Trung tâm UNESCO Khoa học, Công nghệ và Tư vấn đầu tư phát triển đã tổ chức lớp bồi dưỡng kiến thức UNESCO.",
      content: `
Chương trình tập trung vào các nội dung:

- Giới thiệu các tiêu chuẩn của UNESCO trong lĩnh vực giáo dục, khoa học và công nghệ.
- Nâng cao nhận thức cho cán bộ, giáo viên về ứng dụng công nghệ trong giảng dạy và nghiên cứu.
- Thúc đẩy hợp tác quốc tế trong lĩnh vực phát triển bền vững thông qua công nghệ giáo dục.

Sự kiện có sự tham gia của các chuyên gia đến từ UNESCO và các trường đại học lớn, mang lại nhiều kiến thức thực tiễn, hướng dẫn chuyên sâu và tạo cơ hội kết nối cho người tham dự.

👉 Đây là một bước tiến quan trọng giúp đội ngũ giáo viên, nhà nghiên cứu tại Việt Nam hội nhập và phát triển theo xu thế quốc tế.`,
      imageUrl: "/your-image-path.png",
    },
    {
      id: 2,
      title: "Sự kiện UNESCO về Phát triển Khoa học và Công nghệ",
      description:
        "Sự kiện được tổ chức nhằm thúc đẩy phát triển khoa học và công nghệ tại các quốc gia thành viên, với sự tham gia của các chuyên gia quốc tế.",
      content: `
Tại sự kiện, nhiều chủ đề được đưa ra thảo luận:

- Tác động của trí tuệ nhân tạo trong giáo dục và đời sống.
- Đổi mới sáng tạo trong giáo dục STEM.
- Các mô hình thành phố thông minh và giáo dục thích ứng.

Sự kiện mang tính chất kết nối giữa các quốc gia, tạo nền tảng cho hợp tác đa phương trong các dự án khoa học công nghệ tương lai.`,
      imageUrl: "/your-image-path-2.png",
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="text-center text-red-500 mt-10">
        ❌ Blog không tồn tại!
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Nav />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-80 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-600 italic mb-6 text-base">
              {blog.description}
            </p>
            <div className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
