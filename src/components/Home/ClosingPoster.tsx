import letTalkImg from "@/images/lets-talk-bg.jpg";
import { FadeIn } from "../FadeIn";

export function ClosingPoster() {
  return (
    <>
      {/* <div className="pt-0 sm:pt-0">
        <div className="relative isolate overflow-hidden  px-6 py-24 sm:px-24 xl:py-16 bg-[#224fa2]">
          <FadeIn>
            <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold tracking-tight text-white sm:text-4xl">
              Your AI Transformation Starts Here
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white">
              Partner with Humancloud to design, deploy, and scale Generative AI
              applications that are secure, scalable, and built to deliver
              measurable business impact.
            </p>
          </FadeIn>
          <a
            href="#"
            className=" block mx-auto text-center mt-6 max-w-[100px] rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black focus-visible:outline-2 hover:bg-white/80 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Let’s Talk
          </a>
        </div>
      </div> */}
      <section>
        <FadeIn>
          <div className="mx-auto max-w-8xl px-4 sm:px-6 my-8">
            <div
              className="relative overflow-hidden rounded-2xl text-center shadow-xl 
                 before:pointer-events-none before:absolute before:inset-0 
                 before:-z-10 before:rounded-2xl 
                 before:bg-gradient-to-r before:from-[#224fa2] before:via-[#5c84c8] before:to-[#8faee0]"
              data-aos="zoom-y-out"
            >
              <div className="px-4 py-12 md:px-12 md:py-20">
                <h2
                  className="mb-6 text-3xl font-bold text-gray-200 
                       md:mb-6 md:text-4xl"
                >
                  Your AI Transformation Starts Here
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white">
                  Partner with Humancloud to design, deploy, and scale
                  Generative AI applications that are secure, scalable, and
                  built to deliver measurable business impact.
                </p>
                <a
                  href="#"
                  className="block mx-auto text-center mt-6 max-w-[100px] rounded-md 
                     bg-white px-3.5 py-2.5 text-sm font-semibold text-black 
                     hover:bg-white/80 focus-visible:outline-2 
                     focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
