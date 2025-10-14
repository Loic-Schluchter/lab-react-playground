import React from 'react'
import { useState } from 'react'
import Button from "@mui/material/Button";


export default function Switch() {

    const [showText, setShowText] = useState(false)

    function text(){
        setShowText(!showText)
    }

  return (
    <div className="card rgb-border ">
      <div className="flex flex-col gap-5 justify-center my-2 py-4">
        <h2 className="title">Switch/Toggle</h2>
        <button  onClick={text}className="button mx-auto">{showText ? "Hide" : "Show" }</button>
          
        {showText && <div className='border m-4 p-4 bg-[#D0AC61] rounded shadow-lg text-justify max-h-64 overflow-y-auto'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officiis totam earum aspernatur reiciendis, obcaecati neque nostrum, illo libero magni esse ab. Porro suscipit unde similique doloribus nemo quasi rem voluptate, illo fuga facere accusantium laborum neque dolores aspernatur facilis maxime provident, vitae quas repellat tenetur necessitatibus iure ea expedita temporibus! Adipisci iusto, odit id corrupti assumenda voluptatum ducimus quia explicabo, quod repellendus omnis, cumque aut inventore asperiores ea? Dicta molestiae vitae odit expedita, reprehenderit corporis est eaque iure natus veritatis mollitia fugit ipsum aliquid vero nobis? Magni officia ullam totam corrupti porro animi debitis soluta ad corporis tempore illo mollitia eaque itaque nulla praesentium natus omnis repellat dolor, aut ex? Eius qui aliquid error deleniti, beatae dolores sit, laborum harum perspiciatis tempora similique perferendis impedit itaque voluptatibus magni unde neque praesentium nostrum vitae ad officiis sed iure aperiam quis. Harum ullam tempore ad quis veniam eveniet at asperiores officia eos provident sit alias error, impedit facere totam nulla repellendus quas tempora delectus qui repellat magni sequi voluptates fugit. Natus officiis suscipit soluta saepe incidunt excepturi id, omnis nam doloremque maxime porro distinctio tenetur at consequuntur odio illum aut optio accusantium fugit ipsa exercitationem. Sit doloribus dolores ea culpa rem?</p>
        </div>}
        

        </div>
    </div>
  )
}
