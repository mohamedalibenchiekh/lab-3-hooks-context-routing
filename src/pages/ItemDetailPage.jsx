import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ThemedCard from "../components/ThemedCard";
import LoadingSpinner from "../components/LoadingSpinner";
import Button from "../components/Button";

export default function ItemDetailPage() {
  const { id } = useParams();
  useDocumentTitle(`Post #${id}`);
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <LoadingSpinner size="md" text="Loading post..." />;

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
          Failed to Load Post
        </h3>
        <p style={{ color: "var(--text-muted)" }}>{error}</p>
      </ThemedCard>
    );
  }

  const breadcrumbStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "var(--space-6)",
    fontSize: "0.875rem",
  };

  const breadcrumbLinkStyles = {
    color: "var(--text-muted)",
    textDecoration: "none",
  };

  const metaStyles = {
    display: "flex",
    gap: "1.5rem",
    marginTop: "var(--space-8)",
    paddingTop: "var(--space-6)",
    borderTop: "1px solid var(--border)",
    fontSize: "0.875rem",
    color: "var(--text-muted)",
  };

  const metaItemStyles = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  return (
    <div>
      <nav style={breadcrumbStyles}>
        <Link to="/dashboard" style={breadcrumbLinkStyles}>Dashboard</Link>
        <span style={{ color: "var(--text-muted)" }}>/</span>
        <span style={{ color: "var(--text-h)", fontWeight: 500 }}>Post #{id}</span>
      </nav>

      <ThemedCard padding="xl">
        <span style={{
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}>
          Post #{data.id}
        </span>
        <h1 style={{
          marginTop: "var(--space-3)",
          marginBottom: "var(--space-6)",
          fontSize: "1.875rem",
          lineHeight: 1.3,
        }}>
          {data.title}
        </h1>
        <p style={{
          fontSize: "1.125rem",
          lineHeight: 1.8,
          color: "var(--text)",
        }}>
          {data.body}
        </p>

        <div style={metaStyles}>
          <div style={metaItemStyles}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Author ID: {data.userId}</span>
          </div>
          <div style={metaItemStyles}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Post ID: {data.id}</span>
          </div>
        </div>
      </ThemedCard>

      <div style={{ marginTop: "var(--space-6)", textAlign: "center" }}>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Button variant="secondary" size="md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "0.5rem" }}>
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}