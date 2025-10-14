import React from "react";
import { useState, useEffect } from "react";

export default function FetchingTitle() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    loadTitles();
  }, []);

  async function loadTitles() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la requete");
      }
      const data = await response.json();
      setTitles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card rgb-border">
      <h2 className=" title">Fetching Title</h2>
      <div className="flex flex-col gap-4 justify-center mx-auto my-2 py-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        <ul className="max-h-60 overflow-y-auto flex flex-col gap-4 items-start  bg-cyan-500/20 p-8 rounded-lg">
          {titles.map((item) => (
            <li key={item.id}>
              <span className="font-bold text-red-500"> Id {item.id} :</span>{" "}
              {item.title}
            </li>
          ))}
        </ul>
        <button className="self-center button " onClick={loadTitles}>
          Refresh
        </button>
      </div>
    </div>
  );
}
