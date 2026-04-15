import { useTheme } from "../contexts/ThemeContext";

export default function ThemedCard({
  children,
  padding = "lg",
  shadow = "md",
  hoverable = false,
  className = "",
  style = {}
}) {
  const { theme } = useTheme();

  const paddingMap = {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  };

  const shadowMap = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
  };

  const cardStyles = {
    padding: paddingMap[padding] || paddingMap.lg,
    background: theme === "dark" ? "var(--bg-secondary)" : "var(--bg)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-lg)",
    boxShadow: shadowMap[shadow] || shadowMap.md,
    transition: "all var(--transition)",
    cursor: hoverable ? "pointer" : "default",
    ...style,
  };

  return (
    <div
      className={`fade-in ${className}`}
      style={cardStyles}
      onMouseEnter={(e) => {
        if (hoverable) {
          e.target.style.transform = "translateY(-4px)";
          e.target.style.boxShadow = "var(--shadow-lg)";
        }
      }}
      onMouseLeave={(e) => {
        if (hoverable) {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = shadowMap[shadow] || shadowMap.md;
        }
      }}
    >
      {children}
    </div>
  );
}