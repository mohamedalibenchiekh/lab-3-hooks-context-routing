import { useAuth } from "../contexts/AuthContext";
export default function LoginPanel() {
  const { user, login, logout } = useAuth();
  return user ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );
}