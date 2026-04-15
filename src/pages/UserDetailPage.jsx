import { useParams, Link } from "react-router-dom";
import ThemedCard from "../components/ThemedCard";
import Button from "../components/Button";

export default function UserDetailPage() {
  const { id } = useParams();

  const containerStyles = {
    maxWidth: "500px",
    margin: "0 auto",
  };

  const avatarStyles = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "var(--accent-bg)",
    border: "2px solid var(--accent-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: 700,
    color: "var(--accent)",
    margin: "0 auto var(--space-4)",
  };

  return (
    <div style={containerStyles}>
      <ThemedCard padding="xl" style={{ textAlign: "center" }}>
        <div style={avatarStyles}>👤</div>
        <h1 style={{ marginBottom: "var(--space-2)", fontSize: "1.5rem" }}>
          User Profile
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--accent)",
          fontWeight: 600,
          marginBottom: "var(--space-6)",
        }}>
          ID: {id}
        </p>
        <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
          This is a placeholder user detail page. In a real application,
          this would display user information, posts, and activity.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.5rem" }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Button>
        </Link>
      </ThemedCard>
    </div>
  );
}