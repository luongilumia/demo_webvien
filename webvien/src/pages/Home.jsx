import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import CardDefault from "../components/CardDefault";
import NewsCard from "../components/NewsCard";
import Notification from "../components/Notification";
import Blog from "../components/Blog";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />

      <div className="flex justify-center items-center py-8">
        <div className="text-5xl font-semibold -mt-5">
          Chào mừng quý khách đã đến thăm
        </div>
        <div className="text-6xl font-semibold text-blue-700 -mt-5">
          &nbsp;ISED
        </div>
      </div>

      <div className="flex justify-center items-center py-8 text-4xl -mt-15">
        <h1>Viện Phát triển Khoa học Công nghệ và Giáo dục</h1>
      </div>

      <div className="flex justify-center items-center py-8">
        <h1 className="font-semibold text-blue-700 text-3xl">Dịch vụ</h1>
      </div>
      <CardDefault />

      <div className="font-semibold text-blue-700 text-3xl">
        <h1 className="flex justify-center items-center font-semibold text-blue-700 mt-4 mb-4">
          Tin tức
        </h1>
      </div>
      <NewsCard />

      <div className="font-semibold text-blue-700 text-3xl">
        <h1 className="flex justify-center items-center font-semibold text-blue-700 mt-4 mb-4">
          Thông báo
        </h1>
      </div>
      <Notification />

      <div className="font-semibold text-blue-700 text-3xl">
        <h1 className="flex justify-center items-center font-semibold text-blue-700 mt-4 mb-4">
          Blog
        </h1>
      </div>
      <Blog />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
