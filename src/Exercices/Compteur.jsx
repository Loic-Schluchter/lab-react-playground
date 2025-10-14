import React from 'react'
import { useState } from 'react'
import Button from "@mui/material/Button";
import { ButtonGroup } from '@mui/material';


export default function Compteur() {
    
    const [clicks, setClicks] = useState(0)
  
    function addClick(){
    
        setClicks(clicks + 1)
    }
    function removeClick(){
        if(clicks > 0){
            setClicks(clicks - 1)
        }
    }
    function resetClick(){
        setClicks(0)
    }

    return (
    <>
      <div className="card rgb-border ">
        <div className="flex flex-col gap-5 justify-center  py-4">
        <h2 className='title'>Compteur</h2>
        <div className=" inline mx-auto p-4 rounded-full  bg-cyan-500/20  border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_#00f7ff]">{clicks}</div>
        </div>
        <div className="flex justify-around my-4 gap-4 ">
          <button  onClick={removeClick} className="button">-</button>
          <button onClick={resetClick} className="button ">Reset</button>
          <button onClick={addClick} className='button '>+</button>

        </div>

      </div>
    </>
  )
}
