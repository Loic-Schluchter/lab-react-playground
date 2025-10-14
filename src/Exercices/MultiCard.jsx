import React from "react";
import Card from "./components/Card";
import { useRef, useEffect } from "react";

export default function MultiCard() {
  const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-8">
      {card.map((_, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="cardBoard"
        >
          <Card />
        </div>
      ))}
    </div>
  );
}
