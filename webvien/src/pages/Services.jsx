import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { serviceList } from "../data/services";
import { Link } from "react-router-dom"; // <-- import Link từ react-router-dom

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
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow p-6 text-left flex flex-col justify-between"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="mt-auto">
                <Link to={`/services/${service.id}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Xem tiếp
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
