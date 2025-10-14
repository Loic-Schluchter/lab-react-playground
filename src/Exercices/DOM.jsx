import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function DOM() {

  const [Compteur, setCompteur] = useState(0);

  function addCompteur() {
    setCompteur(Compteur + 1);
  }

  function removeCompteur() {
    setCompteur(Compteur - 1);
  }
    

  function resetCompteur() {
    setCompteur(0);
  }

  useEffect(() => {
    document.title = `Compteur: ${Compteur}`;
  }, [Compteur]);

  return (
    <div className='rgb-border card '>
      <h2 className='title'>DOM</h2>
      <div className='flex justify-around my-4 gap-4 '>
      <button className="button" onClick={removeCompteur}>-</button>
      <button className="button" onClick={resetCompteur}>Reset</button>
      <button className="button" onClick={addCompteur}>+</button>
      </div>

    </div>
  )
}
