"use client";
import React, { useRef, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

const clients = [
  { image: "/images/clients/1.svg" },
  { image: "/images/clients/2.svg" },
  { image: "/images/clients/3.svg" },
  { image: "/images/clients/4.svg" },
  { image: "/images/clients/5.svg" },
  { image: "/images/clients/6.svg" },
  { image: "/images/clients/9.svg" },
  { image: "/images/clients/10.svg" },
  { image: "/images/clients/11.webp" },
  { image: "/images/clients/12.webp" },
  { image: "/images/clients/13.webp" },
  { image: "/images/clients/14.webp" },
  { image: "/images/clients/15.svg" },
  { image: "/images/clients/16.webp" },
  { image: "/images/clients/18.avif" },
  { image: "/images/clients/19.png" },
  { image: "/images/clients/21.png" },
  { image: "/images/clients/22.png" },
  { image: "/images/clients/23.webp" },
  { image: "/images/clients/24.webp" },
  { image: "/images/clients/25.png" },
  { image: "/images/clients/26.webp" },
  { image: "/images/clients/27.png" },
];

export default function InfiniteClientSlider() {
  const rowRef = useRef(null);
  const x = useRef(0);

  const baseSpeed =
    typeof window !== "undefined" && window.innerWidth < 768 ? 100 : 50;

  useEffect(() => {
    if (rowRef.current) {
      const width = rowRef.current.scrollWidth / 2;
      x.current = 0;
      rowRef.current.style.transform = `translateX(${x.current}px)`;
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!rowRef.current) return;

    const width = rowRef.current.scrollWidth / 2;
    x.current -= (baseSpeed * delta) / 1000; // move left
    if (Math.abs(x.current) >= width) x.current = 0; // reset to start

    rowRef.current.style.transform = `translateX(${x.current}px)`;
  });

  return (
    <div className="w-[90%] mx-auto flex flex-col gap-10 mt-20 overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white shadow-lg">
      <div className="relative w-full overflow-hidden">
        <div ref={rowRef} className="flex gap-10">
          {clients.concat(clients).map((client, index) => (
            <img
              key={index}
              src={client.image}
              alt={`client-${index}`}
              className="h-20 w-auto object-contain flex-shrink-0 bg-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
