import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import CardDefault from "./components/CardDefault";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <div className="flex justify-center items-center py-8">
        <h1 className="text-2xl font-semibold text-blue-700">Dịch vụ</h1>
      </div>

      <CardDefault />
    </div>
  );
}

export default App;
