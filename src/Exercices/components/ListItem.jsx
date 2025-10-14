import React from 'react'

export default function ListItem({itemData, deleteTodo}) {
  return (
    <li className="flex justify-between bg-cyan-500/20 rounded-full p-2 px-6 my-2 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_#00f7ff] items-center ">
        <span>{itemData.text}</span>

        <button className="w-8 h-8 text-center bg-[#FF3131] rounded-full border border-red-400/40 text-black shadow-[0_0_15px_#FF3131]  hover:shadow-[0_6px_15px_#b22222] 
               transition " onClick={() => deleteTodo(itemData.id)}>X</button>
    </li>
  )
}
