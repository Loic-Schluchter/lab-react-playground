import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Chronometre() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [isRunning]);

  function reset() {
    setTime(0);
  }

  return (
    <div className="card rgb-border ">
      <h2 className="title">Chronometre</h2>
      <h2 className="inline mx-auto p-4 rounded-full  bg-cyan-500/20  border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_#00f7ff]">
        {time}
      </h2>
      <div className="flex justify-around my-4 gap-4 ">
        <button className="button" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="button" onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
