import Image from "next/image";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from "@/components/Carrer/Hero";
import { Culture } from "@/components/Carrer/Culture";
import { Opportunity } from "@/components/Carrer/Opportunity";
import { Review } from "@/components/Carrer/Review";

export default function Service() {
  return (
    <>
      <Hero />
      <Culture />
      <Opportunity />
      <Review />
    </>
  );
}
