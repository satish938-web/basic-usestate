import React, { useState, useEffect } from "react";
import { use } from "react";

function Get() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const addUser = () => {
    if (!name || !job) return alert("Enter name and job");

    fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, job })
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
        setName("");
        setJob("");
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} ({user.job})
            <button
            onClick={()=>{
                fetch(`http://localhost:5000/api/users/${user.id}` , { method:"DELETE"})
                .then(res => res.json())
                .then(()=>setUsers(users.filter(u=>u.id !==user.id)));
            }}
            className="m-3"
            >Delete</button>

            <button onClick={()=>{
                const newname=prompt("Enter new name",user.name);
                const newjob =prompt("Enter new job",user.job);
                if (!newname || !newjob) return;
fetch(`http://localhost:5000/api/users/${user.id}`,{
    method:"put",
    headers:{"content-Type":"Application/json"},
     body: JSON.stringify({ name: newname, job: newjob })
}).then(res => res.json())
.then(updatedUser => {
              setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
            })
   .catch(err => console.error(err));
            }} >Update</button>
          </li>
        ))}
      </ul>

      <h2>Add Users</h2>
      <input
        type="text"
        placeholder="Name"
        className="border"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your job"
        className="border m-3"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <button className="m-3" onClick={addUser}>Add User</button>
    </div>
  );
}

export default Get;
