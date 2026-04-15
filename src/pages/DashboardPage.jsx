import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ThemedCard from "../components/ThemedCard";

export default function DashboardPage() {
  useDocumentTitle("Dashboard");
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10");

  if (loading) return <p>Loading items...</p>;
  if (error) return <p style={{ color: "red" }}>Failed to load: {error}</p>;

  return (
    <ThemedCard>
      <h2>Dashboard</h2>
      <ul>
        {data.map(item => (
          <li key={item.id} style={{ marginBottom: 4 }}>
            <Link to={`/dashboard/items/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </ThemedCard>
  );
}