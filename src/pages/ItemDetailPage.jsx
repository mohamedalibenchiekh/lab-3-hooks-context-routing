import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ThemedCard from "../components/ThemedCard";

export default function ItemDetailPage() {
  const { id } = useParams();
  useDocumentTitle(`Item ${id}`);
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (loading) return <p>Loading detail...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <ThemedCard>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <small>ID: {data.id} | User ID: {data.userId}</small>
    </ThemedCard>
  );
}