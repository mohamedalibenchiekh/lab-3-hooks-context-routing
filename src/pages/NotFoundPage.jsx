import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFoundPage() {
  const containerStyles = {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "var(--space-8)",
  };

  const errorCodeStyles = {
    fontSize: "8rem",
    fontWeight: 800,
    color: "var(--accent)",
    lineHeight: 1,
    marginBottom: "var(--space-4)",
    textShadow: "0 0 40px var(--accent-bg)",
  };

  const messageStyles = {
    fontSize: "1.5rem",
    color: "var(--text-h)",
    marginBottom: "var(--space-4)",
  };

  const descriptionStyles = {
    color: "var(--text-muted)",
    maxWidth: "400px",
    marginBottom: "var(--space-8)",
    lineHeight: 1.6,
  };

  const suggestionsStyles = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerStyles} className="fade-in">
      <div style={errorCodeStyles}>404</div>
      <h1 style={messageStyles}>Page Not Found</h1>
      <p style={descriptionStyles}>
        The page you are looking for might have been removed,
        had its name changed, or is temporarily unavailable.
      </p>
      <div style={suggestionsStyles}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="primary" size="md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.5rem" }}>
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Go Home
          </Button>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="md">
            View Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}