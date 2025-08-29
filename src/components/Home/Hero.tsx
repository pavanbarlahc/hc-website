import Image from "next/image";
import { Container } from "@/components/Container";
import logoLaravel from "@/images/logos/laravel.svg";
import logoMirage from "@/images/logos/mirage.svg";
import logoStatamic from "@/images/logos/statamic.svg";
import logoStaticKit from "@/images/logos/statickit.svg";
import logoTransistor from "@/images/logos/transistor.svg";
import logoTuple from "@/images/logos/tuple.svg";
import HeroBackgroud from "@/images/home-bg.jpg";

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
        className="pt-48 pb-48 text-center lg:pt-48"
        style={{
          backgroundImage: `url(${HeroBackgroud.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="mx-auto max-w-4xl font-display text-xl font-medium tracking-tight text-white sm:text-xl opacity-0 animate-fade-down"
          style={{ animation: "fadeDown 0.8s ease-out forwards" }}
        >
          AI-First Product Engineering Partner
        </h1>

        <h1
          className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl mt-5 lg:mt-5 opacity-0 animate-fade-down"
          style={{
            animation: "fadeDown 0.8s ease-out forwards",
            animationDelay: "0.2s",
          }}
        >
          Engineer Intelligent Systems. Deliver AI at Scale.
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-white mb-6 opacity-0 animate-fade-down"
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
          className="rounded-full bg-[#224fa2] px-6 py-3 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#224fa2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Contact US
        </a>
      </Container>
      <Container className="pb-16 text-center">
        <div className="mt-36">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            AI-First Product Engineering Partner
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {aiPartners.map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        unoptimized
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
