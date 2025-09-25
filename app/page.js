import Hero from "@/components/Hero";
import ContentGrid from "@/components/ContentGrid";
import Store from "@/components/Store";
import Latest from "@/components/Latest";
import Magazine from "@/components/Magazine";
import Sports from "@/components/Sports";
import Footer from "@/components/Footer";
import Headline from "@/components/Headline";

export default function Home() {
  const videoItems = [
    {
      title: "Orange (Official Music Video)",
      description: "The official music video for Orange",
      bgColor: "#ff6b35",
    },
    {
      title: "Behind the Scenes",
      description: "Making of the Orange album",
      bgColor: "#1a5f7a",
    },
    {
      title: "Live Performance",
      description: "Orange live at Red Rocks",
      bgColor: "#ff6b35",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="hidden md:block">

      <Headline />
      </div>
      <Hero />
      <div className=" md:hidden">

      <Headline />
      </div>
      <ContentGrid title="LATEST VIDEOS" items={videoItems} />
      <Store />
      <Latest />
      <Magazine />
      <Sports />
      <Footer />
    </div>
  );
}

