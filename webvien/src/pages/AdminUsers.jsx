import { useEffect, useState } from "react";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleAdd = () => {
    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((user) => {
        setUsers([...users, user]);
        setNewUser({ username: "", password: "", role: "user" });
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" }).then(
      () => setUsers(users.filter((u) => u.id !== id))
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lý người dùng</h2>

      <input
        placeholder="Username"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        className="border p-2 mr-2"
      />
      <select
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        className="border p-2 mr-2"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2">
        Thêm
      </button>

      <ul className="mt-4 space-y-2">
        {users.map((u) => (
          <li key={u.id} className="border p-2 flex justify-between">
            {u.username} ({u.role})
            <button onClick={() => handleDelete(u.id)} className="text-red-600">
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
