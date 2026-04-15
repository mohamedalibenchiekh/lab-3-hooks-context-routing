import { useParams } from "react-router-dom";
export default function UserDetailPage() {
  const { id } = useParams();
  return <h2>User ID: {id}</h2>;
}