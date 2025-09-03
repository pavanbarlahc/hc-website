import Image from "next/image";
import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";
import HeroBackgroud from "@/images/home-bg.jpg";
import { FadeIn } from "../FadeIn";

const aiPartners = [
  [
    { name: "Transistor", logo: logoTransistor },
    { name: "Tuple", logo: logoTuple },
    { name: "StaticKit", logo: logoStaticKit },
  ],
  [
    { name: "Mirage", logo: logoMirage },
    { name: "Laravel", logo: logoLaravel },
    { name: "Statamic", logo: logoStatamic },
  ],
];

export function Hero() {
  return (
    <>
      <Container
        className="pt-48 pb-32 text-center lg:pt-56 lg:pb-48"
        style={{
          backgroundImage: `url(${HeroBackgroud.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="mx-auto max-w-4xl font-display text-xl tracking-tight font-semibold text-white sm:text-xl opacity-0 animate-fade-down"
          style={{ animation: "fadeDown 0.8s ease-out forwards" }}
        >
          AI-First Product Engineering Partner
        </h1>

        <h1
          className="mx-auto max-w-5xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl mt-4 lg:mt-4 opacity-0 animate-fade-down"
          style={{
            animation: "fadeDown 0.8s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          Engineer{" "}
          <span className="bg-gradient-to-l from-[#224fa2] to-[#1cefff] bg-clip-text text-transparent">
            Intelligent Systems.
          </span>{" "}
          Deliver AI at Scale.
        </h1>

        <p
          className="mx-auto my-4 max-w-2xl text-base tracking-tight text-white mb-8 opacity-0 lg:mt-4 animate-fade-down"
          style={{
            animation: "fadeDown 0.8s ease-out forwards",
            animationDelay: "0.4s",
          }}
        >
          We <b>help build AI products</b>, enhance existing solutions to{" "}
          <b>use AI products 10× more effectively</b>, and design intelligent
          features that work at scale.
        </p>

        <a
          href="#"
          className="mx-auto rounded-lg bg-[#224fa2] px-6 py-3 mt-4 lg:mt-4 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#3a67ba] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Contact Us
        </a>
      </Container>
      <FadeIn>
      <Container className="py-20 text-center bg-gray-50 overflow-hidden">
  <div className="mt-0">
    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-balance">
      AI-First Product Engineering Partner
    </p>

    <div className="relative w-full overflow-hidden mt-8">
      <ul role="list" className="marquee gap-x-12">
        {/* duplicate the list back-to-back */}
        {[...aiPartners.flat(), ...aiPartners.flat()].map((company, i) => (
          <li key={company.name + i} className="flex px-6">
            <Image
              src={company.logo}
              alt={company.name}
              unoptimized
              className="h-12 w-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
</Container>

      </FadeIn>
    </>
  );
}
