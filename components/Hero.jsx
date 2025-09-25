"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const slides = [
  {
    image: "/images/victony.png",
    title: "Victony Releases Debut Album ‘Stubborn’",
    subtitle: "/// FEATURED",
    details: "ZIA TIFFAH • MUSIC • 56 MINS AGO",
  },
  {
    image: "/images/minz.png",
    title: "A Bold New Sound for Afrobeats",
    subtitle: "/// MUSIC SPOTLIGHT",
    details: "TEAM EDITORIAL • MUSIC • 1 HR AGO",
  },
  {
    image: "/images/wizkid.png",
    title: "The Visual Storytelling Behind ‘Stubborn’",
    subtitle: "/// CREATIVE ARTS",
    details: "JANE DOE • ARTS • 2 HRS AGO",
  },
  {
    image: "/images/burna.png",
    title: "How Burna Boy Changed African Music Forever",
    subtitle: "/// MUSIC",
    details: "ADEWALE • MUSIC • 3 HRS AGO",
  },
];

const news = [
  {
    title:
      "‘Everybody Loves Jenifa’ Becomes Highest Grossing Nigerian Movie Of All Time",
    author: "ZIA TIFFAH",
    category: "NEWS",
    time: "1 HR AGO",
  },
  {
    title: "Fuel Price Reaches A New All Time High",
    author: "REUBEN ADEWALE",
    category: "NEWS",
    time: "1 HR AGO",
  },
  {
    title:
      "Here Are 5 Things You Should Know Before Investing In Cryptocurrency",
    author: "FISAYO FOSUDO",
    category: "CREATIVE HUB",
    time: "2 HR AGO",
  },
  {
    title: "Llona Is Breakout Star For The Year",
    author: "CHIBBY",
    category: "MUSIC",
    time: "2 HR AGO",
  },
  {
    title: "Nigerian Fashion Designers Dominate Paris Fashion Week",
    author: "TEAM EDITORIAL",
    category: "FASHION",
    time: "3 HR AGO",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
    setAnimating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [paused, index]);

  return (
    <div className="md:mx-12 lg:mx-24 md:mt-1 flex gap-4 text-white">
      {/* Left: Slideshow (3/4 width on desktop) */}
      <div
        className="relative w-full md:w-3/4 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out ${
            animating ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"
          }`}
        >
          {/* Make the slide clickable */}
          <Link href={`/article/${slugify(slides[index].title)}`}>
            <img
              src={slides[index].image}
              alt={slides[index].title}
              className="w-full h-[50vh] object-cover cursor-pointer"
            />
          </Link>

          {/* Captions BELOW the image */}
          <div className="p-2 mt-4 mb-6 md:mb-0">
            <p className="text-xs md:text-[12px] uppercase tracking-widest text-white/50 mb-[8px]">
              {slides[index].subtitle}
            </p>
            <p className="text-[14px] md:text-[16px] font-semibold">
              {slides[index].title}
            </p>
            <p className="text-xs md:text-[12px] mt-[8px] text-white/50">
              {slides[index].details}
            </p>
          </div>
        </div>
      </div>

      {/* Right: News List (1/4 width on desktop) */}
      <div className="hidden md:flex w-1/4 flex-col p-2 max-h-[40vh]">
        {news.map((item, i) => (
          <Link
            key={i}
            href={`/article/${slugify(item.title)}`}
            className="my-3 pb-2 cursor-pointer hover:opacity-80 transition block"
          >
            <p className="text-[14px] font-semibold line-clamp-2">
              {item.title}
            </p>
            <p className="text-[12px] text-white/50 mt-[8px]">
              {item.author} • {item.category} • {item.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}


