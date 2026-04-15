import { useAuth } from "../contexts/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function ProfilePage() {
  // Sets browser tab title when this page mounts
  useDocumentTitle("User Profile");
  
  // Consumes global auth state without prop drilling
  const { user } = useAuth();

  // Handle unauthenticated state gracefully
  if (!user) {
    return (
      <section>
        <h2>Profile</h2>
        <p>You must be logged in to view your profile.</p>
      </section>
    );
  }

  // Render authenticated user info
  return (
    <section>
      <h2>Welcome, {user.name}!</h2>
      <p><strong>User ID:</strong> {user.id}</p>
      <p>This is your profile dashboard. Settings and preferences would go here.</p>
    </section>
  );
}