import letTalkImg from "@/images/lets-talk-bg.jpg";
import Image from "next/image";
import { Container } from "../Container";
import backgroundImage from "@/images/background-call-to-action.jpg";

export function ClosingPoster() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Let’s Build the Future Together
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white mb-3">
            Join Humancloud and work on AI solutions that power industries
            around the world.
          </p>
          <a
            href="#"
            className="rounded-xl bg-[#224fa2] px-6 py-3 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#224fa2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Explore Careers
          </a>
        </div>
      </Container>
    </section>
  );
}
