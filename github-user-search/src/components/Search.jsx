// src/components/Search.jsx
import React, { useState } from "react";
import fetchUserData from "../services/githubService";
import UserCard from "./UseCard";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);      
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const perPage = 10;

  const doSearch = (reset = true) => {
    setLoading(true);
    setError(null);

    const nextPage = reset ? 1 : page + 1;
    fetchUserData(username, location, minRepos, nextPage, perPage)
      .then(({ items, total_count }) => {
        if (reset) {
          setUsers(items);
          setPage(1);
        } else {
          setUsers(prev => [...prev, ...items]);
          setPage(nextPage);
        }
        setTotalCount(total_count);
        if (total_count === 0) setError("No users found");
      })
      .catch(() => setError("An error occurred while fetching users"))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSearch(true);
  };

  const loadMore = () => {
    if (users.length >= totalCount) return;
    doSearch(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
        <input
          type="text" value={username} placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
           className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text" value={location} placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number" value={minRepos} placeholder="Min Repos"
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      <p style={{ color: "#666" }}>{totalCount > 0 ? `Found ${totalCount} users` : null}</p>

      <div>
        {users.map(u => <UserCard key={u.id} user={u} />)}
      </div>
      {users.length > 0 && users.length < totalCount && (
        
        <div className="flex justify-center mt-3">
  <button
    onClick={loadMore}
    disabled={loading}
    className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition disabled:opacity-50"
  >
    {loading ? "Loading..." : "Load more"}
  </button>
</div>
      )}
    </div>
  );
}
