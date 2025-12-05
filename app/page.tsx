import { HeroSection } from "@/components/Hero/HeroSection";
import { HERO_DATA } from "@/data/hero/heroData";

const heroItem = HERO_DATA[0];

export default function Home() {
  return (
    <>
      <HeroSection
        imageUrl={heroItem.imageUrl}
        title1={heroItem.title1}
        title2={heroItem.title2}
        title3={heroItem.title3}
        ctaButton={heroItem.ctaButton}
      />
    </>
  );
}
