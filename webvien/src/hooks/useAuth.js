export function useAuth() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");
  return {
    token,
    role,
    username,
    isAdmin: role === "admin",
  };
}
