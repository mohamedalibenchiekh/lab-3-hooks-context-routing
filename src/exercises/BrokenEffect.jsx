import { useState, useEffect } from "react";

// 🔍 BROKEN VERSION (Provided by lab)
// export default function BrokenEffect() {
//   const [userId, setUserId] = useState(1);
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     fetch(`/api/users/${userId}`).then(r => r.json()).then(setUser);
//   }, []); // ❌ BUG: userId used but missing from dependency array
//   return <button onClick={() => setUserId(u => u + 1)}>Next User</button>;
// }

// ✅ FIXED VERSION
export default function BrokenEffect() {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Using a public API for testing
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(r => r.json())
      .then(setUser)
      .catch(err => console.error("Fetch failed:", err));
  }, [userId]); // ✅ FIX: Added userId to dependency array

  return (
    <div>
      <p>Current User: {user?.name || "Loading..."}</p>
      <button onClick={() => setUserId(u => u + 1)}>Next User</button>
    </div>
  );
}