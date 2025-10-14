import React, { use } from 'react'
import { useRef, useEffect } from 'react'

export default function Observer() {

    const loremRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                loremRef.current.classList.add("visible");
            }
            else{
                loremRef.current.classList.remove("visible");
            }
        });
        observer.observe(loremRef.current);

        return () => {
            observer.unobserve(loremRef.current);
        }
    },[]);


  return (
    <div className="card rgb-border">
      <h2 className="title">Observer</h2>
      <p ref={loremRef} className = "lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quisquam, possimus cupiditate nulla distinctio dolorem rerum doloremque omnis modi veniam. Veritatis iure perferendis hic voluptas.</p>
    </div>
  )
}
