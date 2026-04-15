export default function LoadingSpinner({ size = "md", text, fullScreen = false }) {
  const sizeMap = {
    sm: "2rem",
    md: "3rem",
    lg: "4rem",
    xl: "6rem",
  };

  const spinnerSize = sizeMap[size] || sizeMap.md;

  const containerStyles = fullScreen ? {
    position: "fixed",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--bg)",
    zIndex: 9999,
  } : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "2rem",
  };

  return (
    <div style={containerStyles}>
      <div
        className="spinner"
        style={{
          width: spinnerSize,
          height: spinnerSize,
          borderWidth: "3px",
        }}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p style={{ 
          color: "var(--text-muted)", 
          fontSize: "0.875rem",
          margin: 0,
        }}>
          {text}
        </p>
      )}
    </div>
  );
}
