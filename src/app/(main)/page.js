import FeaturedTiles from "@/components/featured-tiles/FeaturedTiles";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/marquee/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedTiles />
    </>
  );
}
