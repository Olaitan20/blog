import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Components
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Headline from "@/components/Headline";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "The49thStreet",
  description: "The 49th Streetb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable}`}>
        {/* Global Components */}
        <TopBar />
        <Header />
        <Headline />

        {/* Page-Specific Content */}
        {children}
      </body>
    </html>
  );
}


