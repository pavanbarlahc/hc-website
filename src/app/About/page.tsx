import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/About/Hero";
import { OurStory } from "@/components/About/OurStory";
import { Mission } from "@/components/About/Mission";
import { Leadership } from "@/components/About/Leadership";
import { ClosingCta } from "@/components/About/ClosingCta";

export default function Service() {
  return (
    <>
      <Hero />
      <OurStory />
      <Mission />
      <Leadership />
      <ClosingCta />
    </>
  );
}
