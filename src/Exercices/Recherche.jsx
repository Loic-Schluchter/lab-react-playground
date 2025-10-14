import React from "react";
import { useState, useEffect } from "react";

export default function Recherche() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [foundUser, setFoundUser] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("DATA CHANGÉ :", data);
  }, [data]);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la requete");
      }
      const returnedData = await response.json();
      setData(returnedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleResearch(e) {
    e.preventDefault();
    searchUser(user);
    setHasSearched(true);
    setUser("");
  }

  function searchUser(name) {
    const foundUser = data.find(
      (user) => user.name.toLowerCase() === name.toLowerCase()
    );
    if (foundUser) {
      setFoundUser(foundUser);
    } else {
      setFoundUser(null);
    }
  }

  return (
    <div className="Card rgb-border p-8">
      <div className="flex flex-col gap-8 justify-center my-2 py-4">
        <h2 className="title ">Recherche d'utilisateur</h2>
        <div className=" text-center">
          <h3 className=" font-techno text-cyan-400 tracking-widest drop-shadow-[0_0_6px_#00f7ff] text-2xl">
            {data.length} Utilisateur dans la base de données
          </h3>
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
        </div>
        <div className="text-center bg-cyan-500/20 rounded-lg p-4 rgb-border ">
          {!hasSearched ? null : foundUser ? (
            <p className="text-green-500 font-bold">
              Utilisateur trouvé ! : <br></br> Nom : {foundUser.name} - Email :{" "}
              {foundUser.email} - Ville : {foundUser.address.city} - Société :{" "}
              {foundUser.company.name}
            </p>
          ) : (
            hasSearched && (
              <p className="text-red-500 font-bold">Aucun utilisateur trouvé</p>
            )
          )}
          <form onSubmit={handleResearch} className="">
            <input
              className="bg-cyan-500/20 rounded-full p-2 text-center w-1/2 my-4"
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Entrez le nom..."
            />
            <div className="flex justify-center gap-4 my-4">
              <button className="button">Rechercher</button>
              <button
                className="button"
                type="button"
                onClick={() => {
                  setFoundUser(null);
                  setHasSearched(false);
                  setUser("");
                }}
              >
                Effacer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
