// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import ServiceDetail from "./pages/ServicesDetail";
import CardDefault from "./components/CardDefault";
import BlogDetail from "./pages/BlogsDetail";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import NotificationDetail from "./pages/NotificationDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/services-list" element={<CardDefault />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/notification/:id" element={<NotificationDetail />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
