"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const TopBar = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Day + Date + Month
      const day = now.toLocaleDateString("en-US", { weekday: "short" });
      const date = now.getDate();
      const month = now.toLocaleDateString("en-US", { month: "short" });

      // Time
      const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime(`${day} ${date} ${month} ${time.replace(" ", "")}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative border-b border-white/5 py-2 md:py-2.5 text-white stripes">
      <div className="mx-4 md:mx-12 lg:mx-24 flex items-center justify-center md:justify-between">
        {/* Date / Time */}
        <h2 className="text-base hidden md:block">{dateTime}</h2>

        {/* Title */}
        <h1 className="text-center font-bold text-xl tracking-tighter flex-1 md:flex-none">
          The 49TH STREET
        </h1>

        {/* Spotify */}
        <div className="hidden md:flex items-center gap-1">
          <Image
            src="/icons/spotify.svg"
            alt="Spotify Icon"
            width={24}
            height={24}
            className="inline-block mr-2"
          />
          <h2 className="text-base">Listen To Our New Music Playlist</h2>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

