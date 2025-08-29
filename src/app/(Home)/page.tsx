import Image from "next/image";
import { Hero } from "@/components/Home/Hero";
import { Vision } from "@/components/Home/Vision";
import { Capability } from "@/components/Home/Capability";
import { ClosingPoster } from "@/components/Home/ClosingPoster";

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <Capability />
      <ClosingPoster />
    </>
  );
}
