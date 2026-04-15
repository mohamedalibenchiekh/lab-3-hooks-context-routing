import { useTheme } from "../contexts/ThemeContext";
export default function ThemedCard({ children }) {
  const { theme } = useTheme();
  return <div style={{ padding: "1rem", margin: "1rem 0", background: theme === "dark" ? "#444" : "#fff", border: "1px solid #ccc" }}>
    {children}
  </div>;
}