"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const headlines = [
  "FAVE REACHES NUMBER 1 ON UGANDA CHARTS",
  "BURNA BOY PULLS 20K AS HE SHUTS DOWN FRANCE",
  "REMA SET TO RELEASE DEBUT ALBUM ‘RAVES AND ROSES’",
  "DAVIDO ANNOUNCES WORLD TOUR 2025",
  "AYRA STARR WINS BEST FEMALE ARTIST IN AFRICA",
];

export default function Headline() {
  const containerRef = useRef(null);;

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const clone = container.innerHTML;
      container.innerHTML += clone; // duplicate content for seamless loop
    }
  }, []);

  return (
    <div className="relative bg-[#F2F2F2]  md:mx-24 text-black text-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center py-3">
        {/* "What's Hot?" label */}
        <div className="absolute left-0 top-0 h-full flex items-center gap-1 px-3 bg-gray-100 z-10">
          <Image
            src="/icons/fire.png"
            alt="Fire Icon"
            width={20}
            height={20}
          />
          <p className="uppercase text-xs font-medium">What's Hot?</p>
        </div>

        {/* Marquee */}
        <div
          ref={containerRef}
          className="flex gap-6 text-xs font-normal text-gray-600 marquee whitespace-nowrap pl-28"
        >
          {headlines.map((headline, i) => (
            <p key={i} className="flex items-center gap-3">
              {headline}
              {i !== headlines.length - 1 && <span className="text-black">•</span>}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
