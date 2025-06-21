import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Đăng nhập thất bại");
        return;
      }

      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("username", username);
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      setError("Không thể kết nối đến server");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Đăng nhập</h2>
      {error && (
        <div className="bg-red-100 text-red-700 p-2 mb-2 rounded">{error}</div>
      )}
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
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 w-full"
      >
        Đăng nhập
      </button>
    </div>
  );
}
