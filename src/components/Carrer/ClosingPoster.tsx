import letTalkImg from "@/images/lets-talk-bg.jpg";
import Image from "next/image";
import { Container } from "../Container";
import backgroundImage from "@/images/background-call-to-action.jpg";
import { FadeIn } from "../FadeIn";

export function ClosingPoster() {
  return (
    // <section
    //   id="get-started-today"
    //   className="relative overflow-hidden bg-blue-600 py-32"
    // >
    //   <Image
    //     className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    //     src={backgroundImage}
    //     alt=""
    //     width={2347}
    //     height={1244}
    //     unoptimized
    //   />
    //   <Container className="relative">
    //     <div className="mx-auto max-w-lg text-center">
    //       <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
    //         Let’s Build the Future Together
    //       </h2>
    //       <p className="mt-4 text-lg tracking-tight text-white mb-3">
    //         Join Humancloud and work on AI solutions that power industries
    //         around the world.
    //       </p>
    //       <a
    //         href="#"
    //         className="rounded-xl bg-[#224fa2] px-6 py-3 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#224fa2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       >
    //         Explore Careers
    //       </a>
    //     </div>
    //   </Container>
    // </section>
    <div className="pt-0 sm:pt-0">
      <div className="relative isolate overflow-hidden  px-6 py-24 sm:px-24 xl:py-16 bg-[#224fa2]">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s Build the Future Together
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-white">
            Join Humancloud and work on AI solutions that power industries
            around the world.
          </p>
        </FadeIn>
        <a
          href="#"
          className=" block mx-auto text-center mt-6 max-w-36 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black focus-visible:outline-2 hover:bg-white/80 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Explore Careers
        </a>
      </div>
    </div>
  );
}
