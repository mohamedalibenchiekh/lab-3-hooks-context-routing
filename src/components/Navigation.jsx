import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function Navigation() {
  const { user, logout } = useAuth();
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 8 }}>Home</Link>
      <Link to="/about" style={{ marginRight: 8 }}>About</Link>
      <Link to="/login" style={{ marginRight: 8 }}>Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      {user && <span style={{ marginLeft: 16 }}>Hello, {user.name} | <button onClick={logout}>Logout</button></span>}
    </nav>
  );
}