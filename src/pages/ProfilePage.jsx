import { useAuth } from "../contexts/AuthContext";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ThemedCard from "../components/ThemedCard";
import Button from "../components/Button";

export default function ProfilePage() {
  useDocumentTitle("User Profile");
  const { user } = useAuth();

  if (!user) {
    return (
      <ThemedCard padding="xl" style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
        <div style={{
          width: "64px",
          height: "64px",
          margin: "0 auto var(--space-6)",
          background: "var(--warning-bg)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" strokeWidth="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
        <h2 style={{ marginBottom: "var(--space-3)" }}>Authentication Required</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
          You must be logged in to view your profile.
        </p>
        <Button variant="primary" onClick={() => window.location.href = "/login"}>
          Sign In
        </Button>
      </ThemedCard>
    );
  }

  const containerStyles = {
    maxWidth: "600px",
    margin: "0 auto",
  };

  const avatarStyles = {
    width: "96px",
    height: "96px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
    fontWeight: 700,
    color: "#fff",
    margin: "0 auto var(--space-6)",
    boxShadow: "var(--shadow-lg)",
  };

  const statStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
    marginTop: "var(--space-6)",
  };

  const statItemStyles = {
    textAlign: "center",
    padding: "var(--space-4)",
    background: "var(--bg-secondary)",
    borderRadius: "var(--radius-md)",
  };

  return (
    <div style={containerStyles}>
      <ThemedCard padding="xl" style={{ textAlign: "center" }}>
        <div style={avatarStyles}>{user.name.charAt(0)}</div>
        <h1 style={{ marginBottom: "var(--space-2)", fontSize: "1.875rem" }}>
          {user.name}
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
          User ID: <code>{user.id}</code>
        </p>
        <p style={{ color: "var(--text)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
          This is your profile dashboard. Here you can manage your account settings,
          view your activity, and customize your preferences.
        </p>

        <div style={statStyles}>
          <div style={statItemStyles}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-h)" }}>0</div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Posts</div>
          </div>
          <div style={statItemStyles}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-h)" }}>0</div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Comments</div>
          </div>
          <div style={statItemStyles}>
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-h)" }}>0</div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>Likes</div>
          </div>
        </div>
      </ThemedCard>
    </div>
  );
}