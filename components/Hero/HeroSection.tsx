import Image from "next/image";
import { heroProps } from "@/types/hero/heroTypes";

export function HeroSection({
  imageUrl,
  title1,
  title2,
  title3,
  ctaButton,
}: heroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={imageUrl}
        alt="Narada"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
        <h2 className="text-xl md:text-3xl font-bold mb-2 text-center">
          {title1}
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center">
          {title2}
        </h1>
        <p className="text-md md:text-xl mb-6 max-w-2xl text-center">
          {title3}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 cursor-pointer">
          {ctaButton}
        </button>
      </div>
    </section>
  );
}
