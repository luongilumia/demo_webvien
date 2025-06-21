import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import NewsDetail from "./pages/NewsDetail";
import ServiceDetail from "./pages/ServicesDetail";
import BlogDetail from "./pages/BlogsDetail";
import Blog from "./components/Blog";
import Notification from "./components/Notification";
import NotificationDetail from "./pages/NotificationDetail";
import Chatbot from "./components/ui/Chatbot";
import { useAuth } from "./hooks/useAuth";
import CategoryManager from "./pages/CategoryManager";
import Login from "./pages/Login"; // ✅ Thêm dòng này
import Register from "./pages/Register"; // ✅ Thêm dòng này
import AdminHome from "./pages/AdminHome"; // ✅
import AdminUsers from "./pages/AdminUsers";
import AdminNewsManager from "./pages/AdminNewsManager";
function App() {
  const { isAdmin } = useAuth();

  return (
    <Router>
      <Routes>
        {/* 👤 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/users" element={<AdminUsers />} />

        {/* 🔐 Chỉ admin mới thấy */}

        {isAdmin && <Route path="/admin" element={<AdminHome />} />}
        {isAdmin && <Route path="/admin/news" element={<AdminNewsManager />} />}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/notification/:id" element={<NotificationDetail />} />
      </Routes>

      <Chatbot />
    </Router>
  );
}

export default App;
