import { useState, useEffect } from "react";

export default function DebounceSearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 2) {
        fetch(`https://jsonplaceholder.typicode.com/users?name=${query}`)
          .then(res => res.json())
          .then(data => setResult(data));
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input className="border" onChange={e => setQuery(e.target.value)} />
      {result.map(u => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}
