import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Gửi liên hệ thành công!");
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("Lỗi: " + data.error || "Không gửi được.");
      }
    } catch (error) {
      console.error("Gửi form thất bại:", error);
      alert("Đã có lỗi xảy ra khi gửi.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 border-2 border-blue-500 rounded-md shadow-md mt-5">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Trao đổi với chúng tôi
      </h2>
      <div className="w-24 border-b-2 border-blue-900 mx-auto mb-6" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-semibold mb-1">Họ và tên:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-b border-gray-400 outline-none px-2 py-1"
            placeholder="Nguyễn Văn A"
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Số điện thoại:</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-b border-gray-400 outline-none px-2 py-1"
              placeholder="0912345678"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border-b border-gray-400 outline-none px-2 py-1"
              placeholder="abc@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Điền yêu cầu/ thắc mắc"
            rows="5"
            className="w-full border border-gray-400 rounded-md p-2 resize-none"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
}
