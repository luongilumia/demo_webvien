import { Card, CardBody, CardFooter } from "@material-tailwind/react"; // Import các component từ Material Tailwind
import { Link } from "react-router-dom"; // Import Link từ React Router
import { Button, Typography } from "@material-tailwind/react"; // Import Button và Typography từ Material Tailwind

// Dữ liệu dịch vụ
const services = [
  {
    id: 1,
    title: "Đào tạo, nâng cao kiến thức và năng lực chuyên môn",
    description:
      "Viện Phát triển Khoa học Công nghệ và Giáo dục có chức năng quan trọng trong công tác đào tạo, nhằm nâng cao năng lực chuyên môn, sáng tạo và quản trị cho các cá nhân, tổ chức có nhu cầu.",
    link: "/service/1",
  },
  {
    id: 2,
    title: "Tư vấn phát triển công nghệ và giáo dục",
    description:
      "Chúng tôi cung cấp các dịch vụ tư vấn chuyên sâu về phát triển công nghệ và giáo dục cho các tổ chức và cá nhân muốn cải thiện hiệu quả công việc.",
    link: "/service/2",
  },
  {
    id: 3,
    title: "Chương trình đào tạo kỹ năng lãnh đạo",
    description:
      "Chương trình đào tạo kỹ năng lãnh đạo của Viện giúp các cá nhân trở thành những nhà lãnh đạo tài ba, có khả năng quản lý và điều hành hiệu quả.",
    link: "/service/3",
  },
  // Thêm các dịch vụ khác nếu cần
];

const CardDefault = () => {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-4 justify-items-center">
      {services.map((service) => (
        <div key={service.id}>
          <Card className="mt-5 max-w-sm md:max-w-lg h-80">
            <CardBody>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mb-4 h-12 w-12 text-gray-900"
              >
                <path
                  fillRule="evenodd"
                  d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                <b>{service.title}</b>
              </Typography>
              <Typography>{service.description}</Typography>
              <CardFooter className="pt-0">
                <Link to={service.link} className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2 text-blue-500"
                  >
                    Đọc thêm
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4 text-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </Link>
              </CardFooter>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CardDefault;
