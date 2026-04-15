import { Link } from "react-router-dom";
import Button from "../components/Button";
import ThemedCard from "../components/ThemedCard";

export default function HomePage() {
  const heroStyles = {
    textAlign: "center",
    padding: "var(--space-16) 0",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const taglineStyles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 1rem",
    background: "var(--accent-bg)",
    border: "1px solid var(--accent-border)",
    borderRadius: "var(--radius-full)",
    color: "var(--accent)",
    fontSize: "0.875rem",
    fontWeight: 500,
    marginBottom: "var(--space-6)",
  };

  const descriptionStyles = {
    fontSize: "1.25rem",
    color: "var(--text-muted)",
    marginBottom: "var(--space-8)",
    lineHeight: 1.7,
  };

  const ctaStyles = {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const featuresGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
    marginTop: "var(--space-12)",
  };

  const features = [
    {
      icon: "⚡",
      title: "React Router",
      description: "Seamless client-side routing with nested routes and dynamic parameters.",
      link: "/dashboard",
    },
    {
      icon: "🔐",
      title: "Authentication",
      description: "Context-based auth with protected routes and user state management.",
      link: "/profile",
    },
    {
      icon: "🎨",
      title: "Theming",
      description: "Dynamic theme switching with CSS variables and dark mode support.",
      link: "/about",
    },
    {
      icon: "📊",
      title: "Dashboard",
      description: "Protected dashboard with data fetching and interactive components.",
      link: "/dashboard",
    },
  ];

  return (
    <div>
      <section style={heroStyles} className="fade-in">
        <div style={taglineStyles}>
          <span style={{ fontSize: "1rem" }}>✨</span>
          <span>Modern React SPA</span>
        </div>
        <h1 style={{ marginBottom: "var(--space-6)", fontSize: "3.5rem" }}>
          Welcome to Your <span style={{ color: "var(--accent)" }}>React App</span>
        </h1>
        <p style={descriptionStyles}>
          A beautifully designed single-page application demonstrating React hooks,
          context API, and modern routing patterns with a polished UI.
        </p>
        <div style={ctaStyles}>
          <Button variant="primary" size="lg" onClick={() => window.location.href = "/dashboard"}>
            Explore Dashboard
          </Button>
          <Button variant="secondary" size="lg" onClick={() => window.location.href = "/about"}>
            Learn More
          </Button>
        </div>
      </section>

      <section style={featuresGridStyles}>
        {features.map((feature, index) => (
          <ThemedCard key={index} hoverable padding="lg">
            <Link to={feature.link} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "var(--space-4)" }}>{feature.icon}</div>
              <h3 style={{ marginBottom: "var(--space-2)", fontSize: "1.25rem" }}>{feature.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </Link>
          </ThemedCard>
        ))}
      </section>
    </div>
  );
}