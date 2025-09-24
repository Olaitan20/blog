import TopBar from '@/components/TopBar';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Headline from '@/components/Headline';
import ContentGrid from '../components/ContentGrid';
import Store from '../components/Store';
// import Hero from '../components/Hero';
// import ContentGrid from '../components/ContentGrid';
// import MerchSection from '../components/MerchSection';
// import Newsletter from '../components/Newsletter';
// import Footer from '../components/Footer';

export default function Home() {
  const videoItems = [
    {
      title: "Orange (Official Music Video)",
      description: "The official music video for Orange",
      bgColor: "#ff6b35"
    },
    {
      title: "Behind the Scenes",
      description: "Making of the Orange album",
      bgColor: "#1a5f7a"
    },
    {
      title: "Live Performance",
      description: "Orange live at Red Rocks",
      bgColor: "#ff6b35"
    }
  ];

  const newsItems = [
    {
      title: "New Album 'Orange' Available Now",
      description: "Stream and download everywhere",
      bgColor: "#ff6b35"
    },
    {
      title: "World Tour Announced",
      description: "Tickets on sale Friday",
      bgColor: "#1a5f7a"
    },
    {
      title: "Behind the Music Documentary",
      description: "Coming to streaming platforms",
      bgColor: "#ff6b35"
    }
  ];

  return (
    <div className="min-h-screen">
      <TopBar/>
      <Header />
      <Headline />
      <Hero />
      <ContentGrid title="LATEST VIDEOS" items={videoItems} />
      <Store/>
      {/* <Hero />
      <ContentGrid title="LATEST VIDEOS" items={videoItems} />
      <MerchSection />
      <ContentGrid title="LATEST NEWS" items={newsItems} />
      <Newsletter />
      <ContentGrid title="LATEST IN THE WORLD OF ORANGE" items={videoItems} />
      <Footer /> */}
    </div>
  );
}
