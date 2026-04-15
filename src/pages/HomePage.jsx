import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the SPA.</p>
      <Link to="/users/1">User 1</Link> | <Link to="/users/42">User 42</Link>
    </div>
  );
}