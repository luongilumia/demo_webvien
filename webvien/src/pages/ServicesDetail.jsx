import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { serviceList } from "../data/services";
import { Button } from "@material-tailwind/react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceList.find((service) => service.id.toString() === id);

  if (!service) {
    return (
      <div>
        <Header />
        <Nav />
        <div className="py-16 text-center text-red-600 text-xl">
          Dịch vụ không tồn tại.
        </div>
        <Footer />
      </div>
    );
  }

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
                  {service.content && <p>{service.content}</p>}
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
                  Dịch vụ khác
                </h3>
                <ul className="space-y-2 text-sm">
                  {serviceList
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
