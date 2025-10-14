import React from "react";
import { useState, useEffect } from "react";


export default function EventListener() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }), [];
  return (
    <div className="card rgb-border ">
      <h2 className="title">Event Listener</h2>
      <div className="text-gray-400">
      <p>Largeur de la fenêtre : {windowWidth}</p>
      <p>Hauteur de la fenêtre : {windowHeight}</p>
      </div>
    </div>
  );
}
