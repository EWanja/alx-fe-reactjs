// src/components/UserCard.jsx
import React, { useState } from "react";
import { fetchUserDetails } from "../services/githubService";

export default function UserCard({ user }) {
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [detailError, setDetailError] = useState(null);

  const loadDetails = () => {
    if (details || loadingDetails) return;

    setLoadingDetails(true);
    setDetailError(null);

    fetchUserDetails(user.login)
      .then((d) => {
        if (d) setDetails(d);
        else setDetailError("Could not load details");
      })
      .catch(() => setDetailError("Could not load details"))
      .finally(() => setLoadingDetails(false));
  };

  return (
    <div className="flex gap-3 items-start mb-3">
  <img
    src={user.avatar_url}
    alt={user.login}
    className="w-12 h-12 ounded-full object-cover"
  />
  <div>
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      className="font-bold text-blue-600 hover:underline"
    >
      {user.login}
    </a>
    <div className="mt-2 space-x-2">
      <button
        onClick={loadDetails}
        disabled={loadingDetails}
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      >
        {loadingDetails ? "Loading..." : details ? "Hide details" : "Show details"}
      </button>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 hover:underline"
      >
        Full profile
      </a>
    </div>

    {detailError && (
      <p className="text-red-500 mt-2">{detailError}</p>
    )}

    {details && (
      <div className="mt-2 space-y-1 text-sm text-gray-700">
        <p>Name: {details.name || "N/A"}</p>
        <p>Location: {details.location || "N/A"}</p>
        <p>Public repos: {details.public_repos}</p>
      </div>
    )}
  </div>
</div>
  );
}
