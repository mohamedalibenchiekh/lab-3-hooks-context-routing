import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ThemedCard from "../components/ThemedCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function DashboardPage() {
  useDocumentTitle("Dashboard");
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=12");

  if (loading) {
    return (
      <LoadingSpinner
        size="lg"
        text="Loading posts..."
      />
    );
  }

  if (error) {
    return (
      <ThemedCard padding="lg" style={{ textAlign: "center" }}>
        <div style={{
          width: "64px",
          height: "64px",
          margin: "0 auto var(--space-4)",
          background: "var(--error-bg)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--error)" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h3 style={{ color: "var(--error)", marginBottom: "var(--space-2)" }}>
          Failed to Load Posts
        </h3>
        <p style={{ color: "var(--text-muted)" }}>{error}</p>
      </ThemedCard>
    );
  }

  const headerStyles = {
    marginBottom: "var(--space-8)",
  };

  const subtitleStyles = {
    color: "var(--text-muted)",
    fontSize: "1.125rem",
    marginTop: "var(--space-2)",
  };

  const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "1.5rem",
  };

  const cardContentStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const postIdStyles = {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--accent)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "var(--space-2)",
  };

  const titleStyles = {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "var(--text-h)",
    marginBottom: "var(--space-3)",
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  const excerptStyles = {
    color: "var(--text-muted)",
    fontSize: "0.9375rem",
    lineHeight: 1.6,
    flex: 1,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    marginBottom: "var(--space-4)",
  };

  const linkStyles = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "var(--accent)",
    fontWeight: 500,
    fontSize: "0.9375rem",
    textDecoration: "none",
    transition: "gap var(--transition-fast)",
  };

  return (
    <div>
      <div style={headerStyles}>
        <h1>Dashboard</h1>
        <p style={subtitleStyles}>
          Browse the latest posts from our community
        </p>
      </div>

      <div style={gridStyles}>
        {data.map((item, index) => (
          <div key={item.id} style={{ animationDelay: `${index * 50}ms` }} className="fade-in">
            <ThemedCard hoverable padding="lg">
              <div style={cardContentStyles}>
                <span style={postIdStyles}>Post #{item.id}</span>
                <h3 style={titleStyles}>{item.title}</h3>
                <p style={excerptStyles}>{item.body}</p>
                <Link
                  to={`/dashboard/items/${item.id}`}
                  style={linkStyles}
                  onMouseEnter={(e) => { e.target.style.gap = "0.75rem"; }}
                  onMouseLeave={(e) => { e.target.style.gap = "0.5rem"; }}
                >
                  Read More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </ThemedCard>
          </div>
        ))}
      </div>
    </div>
  );
}