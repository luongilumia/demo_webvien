import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs"; // ✅ Import từ file tách riêng

const BlogDetail = () => {
  const { id } = useParams();
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
