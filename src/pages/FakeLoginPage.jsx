import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import Button from "../components/Button";
import ThemedCard from "../components/ThemedCard";

export default function FakeLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      login();
      navigate("/dashboard");
    }, 800);
  };

  const containerStyles = {
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyles = {
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  };

  const iconStyles = {
    width: "64px",
    height: "64px",
    margin: "0 auto var(--space-6)",
    background: "var(--accent-bg)",
    borderRadius: "var(--radius-xl)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const subtitleStyles = {
    color: "var(--text-muted)",
    marginBottom: "var(--space-8)",
    fontSize: "0.9375rem",
  };

  return (
    <div style={containerStyles}>
      <ThemedCard style={cardStyles} padding="xl">
        <div style={iconStyles}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            <polyline points="10,17 15,12 10,7"></polyline>
            <line x1="15" y1="12" x2="3" y2="12"></line>
          </svg>
        </div>
        <h2 style={{ marginBottom: "var(--space-2)" }}>Welcome Back</h2>
        <p style={subtitleStyles}>
          Sign in to access your dashboard and manage your account.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={handleLogin}
          loading={isLoading}
          style={{ width: "100%" }}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
        <p style={{
          marginTop: "var(--space-6)",
          fontSize: "0.8125rem",
          color: "var(--text-muted)"
        }}>
          This is a demo login — no credentials required
        </p>
      </ThemedCard>
    </div>
  );
}