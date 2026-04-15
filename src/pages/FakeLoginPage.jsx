import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
export default function FakeLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = () => { login(); navigate("/dashboard"); };
  return <button onClick={handleLogin}>Login & Go to Dashboard</button>;
}