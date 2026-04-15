import { useAuth } from "../contexts/AuthContext";
export default function UserProfile() {
  const { user } = useAuth();
  return <p>{user ? `Welcome, ${user.name}!` : "Please log in to see your profile."}</p>;
}