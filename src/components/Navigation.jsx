import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

export default function Navigation() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navStyles = {
    background: "var(--bg)",
    borderBottom: "1px solid var(--border)",
    padding: "0 var(--space-4)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
  };

  const logoStyles = {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--text-h)",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const linksContainerStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  };

  const getLinkStyles = (isActive) => ({
    padding: "0.5rem 0.75rem",
    borderRadius: "var(--radius-md)",
    color: isActive ? "var(--accent)" : "var(--text)",
    background: isActive ? "var(--accent-bg)" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "0.9375rem",
    transition: "all var(--transition-fast)",
  });

  const userSectionStyles = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const avatarStyles = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "var(--accent-bg)",
    border: "1px solid var(--accent-border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 600,
    fontSize: "0.875rem",
    color: "var(--accent)",
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/profile", label: "Profile" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        <Link to="/" style={logoStyles}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>ReactApp</span>
        </Link>

        <div style={linksContainerStyles}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={getLinkStyles(location.pathname === to)}
              onMouseEnter={(e) => {
                if (location.pathname !== to) {
                  e.target.style.background = "var(--bg-secondary)";
                  e.target.style.color = "var(--text-h)";
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== to) {
                  e.target.style.background = "transparent";
                  e.target.style.color = "var(--text)";
                }
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div style={userSectionStyles}>
          {user ? (
            <>
              <div style={avatarStyles}>{user.name.charAt(0)}</div>
              <span style={{ fontSize: "0.875rem", color: "var(--text)" }}>
                {user.name}
              </span>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Button variant="primary" size="sm" onClick={() => window.location.href = "/login"}>
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}