export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  loading = false,
  type = "button",
  onClick,
  ...props 
}) {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--sans)",
    fontWeight: 500,
    border: "none",
    borderRadius: "var(--radius-md)",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    transition: "all var(--transition-fast)",
    opacity: disabled || loading ? 0.6 : 1,
  };

  const sizeStyles = {
    sm: { padding: "0.375rem 0.75rem", fontSize: "0.875rem" },
    md: { padding: "0.625rem 1.25rem", fontSize: "1rem" },
    lg: { padding: "0.875rem 1.75rem", fontSize: "1.125rem" },
  };

  const variantStyles = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
    },
    secondary: {
      background: "var(--bg-secondary)",
      color: "var(--text-h)",
      border: "1px solid var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text)",
    },
    danger: {
      background: "var(--error)",
      color: "#fff",
    },
  };

  const hoverStyles = {
    primary: { 
      ":hover": { background: "var(--accent-hover)", transform: "translateY(-1px)", boxShadow: "var(--shadow-md)" }
    },
    secondary: { 
      ":hover": { background: "var(--border)", transform: "translateY(-1px)" }
    },
    ghost: { 
      ":hover": { background: "var(--bg-secondary)", transform: "translateY(-1px)" }
    },
    danger: { 
      ":hover": { filter: "brightness(0.9)", transform: "translateY(-1px)", boxShadow: "var(--shadow-md)" }
    },
  };

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading && hoverStyles[variant][":hover"]) {
          Object.assign(e.target.style, hoverStyles[variant][":hover"]);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
          if (variant === "primary") e.target.style.background = "var(--accent)";
          if (variant === "secondary") e.target.style.background = "var(--bg-secondary)";
          if (variant === "ghost") e.target.style.background = "transparent";
          if (variant === "danger") e.target.style.filter = "none";
        }
      }}
      {...props}
    >
      {loading && <span className="spinner" style={{ width: "1rem", height: "1rem", borderWidth: "2px" }} />}
      {children}
    </button>
  );
}
