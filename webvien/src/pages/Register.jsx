import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.success) navigate("/login");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Đăng ký</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Tài khoản"
        className="border p-2 my-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        className="border p-2 my-2 w-full"
      />
      <button
        onClick={handleRegister}
        className="bg-green-500 text-white p-2 w-full"
      >
        Đăng ký
      </button>
    </div>
  );
}
