import React, { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !job) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, job })
      });

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">POST Request in React</h2>

      <form className="flex flex-col gap-3 w-60" onSubmit={handleSubmit}>

        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter Job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />

        <button
          className="border p-2 rounded bg-blue-500 text-white"
          type="submit"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && (
        <p className="text-red-600 mt-3">{error}</p>
      )}

      {response && (
        <pre className="mt-4 p-3 bg-gray-100 rounded">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Post;
