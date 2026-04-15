import ThemedCard from "../components/ThemedCard";

export default function AboutPage() {
  const features = [
    { name: "React 19", desc: "Latest React with concurrent features" },
    { name: "React Router 7", desc: "Modern routing with loaders and actions" },
    { name: "CSS Variables", desc: "Dynamic theming with dark mode support" },
    { name: "Custom Hooks", desc: "useFetch, useDocumentTitle, and more" },
    { name: "Context API", desc: "Global state for auth and theme" },
    { name: "Protected Routes", desc: "Authentication-based route guards" },
  ];

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    marginTop: "var(--space-8)",
  };

  const featureCardStyles = {
    padding: "var(--space-5)",
  };

  return (
    <div>
      <h1 style={{ marginBottom: "var(--space-4)" }}>About This App</h1>
      <p style={{
        fontSize: "1.125rem",
        color: "var(--text-muted)",
        maxWidth: "600px",
        marginBottom: "var(--space-8)",
        lineHeight: 1.7,
      }}>
        This is a modern React single-page application built to demonstrate
        best practices in frontend development.
      </p>

      <div style={gridStyles}>
        {features.map((feature, index) => (
          <ThemedCard key={index} padding="md" style={featureCardStyles}>
            <h3 style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--accent)",
              marginBottom: "var(--space-2)"
            }}>
              {feature.name}
            </h3>
            <p style={{
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              margin: 0,
            }}>
              {feature.desc}
            </p>
          </ThemedCard>
        ))}
      </div>
    </div>
  );
}
