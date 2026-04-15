import { useTheme } from "../contexts/ThemeContext";
export default function ThemedHeader() {
  const { theme } = useTheme();
  return <header style={{ padding: "1rem", background: theme === "dark" ? "#333" : "#f4f4f4" }}>
    <h1 style={{ color: theme === "dark" ? "#fff" : "#000" }}>My App</h1>
  </header>;
}