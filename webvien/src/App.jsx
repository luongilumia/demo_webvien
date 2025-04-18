import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import CardDefault from "./components/CardDefault";
import NewsCard from "./components/NewsCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <div className="flex justify-center items-center py-8">
        <a className="text-5xl font-semibold -mt-10 ">
          Chào mừng quý khách đã đến thăm
        </a>
        <a className="text-6xl font-semibold text-blue-700 -mt-10">
          &nbsp;ISED
        </a>
      </div>
      <div className="flex justify-center items-center py-8 text-4xl -mt-15">
        <p>
          <h1>Viện Phát triển Khoa học Công nghệ và Giáo dục</h1>
        </p>
      </div>
      <div className="flex justify-center items-center py-8">
        <h1 className=" font-semibold text-blue-700 text-3xl">Dịch vụ</h1>
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
    </div>
  );
}

export default App;
