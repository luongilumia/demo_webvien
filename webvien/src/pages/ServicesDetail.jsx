import { useParams } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ServiceDetail = () => {
  // Lấy ID của dịch vụ từ URL
  const { id } = useParams();

  // Thông tin dịch vụ (giả sử bạn có dữ liệu này)
  const services = [
    {
      id: 1,
      title: "Đào tạo, nâng cao kiến thức và năng lực chuyên môn",
      description:
        "Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn, sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.",
      content:
        "Chi tiết về các chương trình đào tạo, các phương pháp học tập, và các cơ hội phát triển nghề nghiệp sẽ được cung cấp trong các khóa học mà Viện tổ chức.",
    },
    {
      id: 2,
      title: "Dịch vụ Tư vấn Công nghệ",
      description:
        "Chúng tôi cung cấp các dịch vụ tư vấn công nghệ nhằm giúp các doanh nghiệp áp dụng các giải pháp công nghệ tối ưu nhất.",
      content:
        "Các dịch vụ tư vấn của chúng tôi bao gồm việc phân tích và tối ưu quy trình công nghệ, phát triển hệ thống phần mềm theo yêu cầu, và nâng cao hiệu quả công việc của các tổ chức.",
    },
    {
      id: 3,
      title: "Dịch vụ Tư vấn Công nghệ",
      description:
        "Chúng tôi cung cấp các dịch vụ tư vấn công nghệ nhằm giúp các doanh nghiệp áp dụng các giải pháp công nghệ tối ưu nhất.",
      content:
        "Các dịch vụ tư vấn của chúng tôi bao gồm việc phân tích và tối ưu quy trình công nghệ, phát triển hệ thống phần mềm theo yêu cầu, và nâng cao hiệu quả công việc của các tổ chức.",
    },
    // Thêm các dịch vụ khác nếu có
  ];

  // Tìm dịch vụ theo ID
  const service = services.find((service) => service.id.toString() === id);

  return (
    <div>
      <Header />
      <Nav />
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Nội dung dịch vụ chi tiết */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-semibold text-blue-gray-700 mb-6">
                {service.title}
              </h2>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="text-gray-800 space-y-4 leading-relaxed">
                  <p>{service.description}</p>
                  <p>{service.content}</p>
                  {/* Nếu bạn có nhiều đoạn nội dung, bạn có thể tách ra như bên dưới */}
                  {/* <h3 className="font-bold mt-4">Chức năng đào tạo</h3> */}
                  {/* <ul className="list-disc list-inside">
              <li>Nội dung chi tiết 1...</li>
              <li>Nội dung chi tiết 2...</li>
            </ul> */}
                </div>
                <div className="mt-6">
                  <Button
                    size="sm"
                    variant="outlined"
                    color="blue"
                    onClick={() => window.history.back()}
                  >
                    Quay lại
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar danh sách dịch vụ */}
            <div>
              <div className="bg-white shadow-md p-4 rounded-lg">
                <h3 className="text-blue-700 font-semibold mb-4 border-b pb-2">
                  Dịch vụ
                </h3>
                <ul className="space-y-2 text-sm">
                  {services
                    .filter((s) => s.id.toString() !== id)
                    .map((s) => (
                      <li key={s.id}>
                        <a
                          href={`/dich-vu/${s.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
