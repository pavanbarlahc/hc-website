import letTalkImg from "@/images/lets-talk-bg.jpg";
import { FadeIn } from "../FadeIn";

export function ClosingPoster() {
  return (
    <div className="pt-0 sm:pt-0 mt-4">
      <div
        className="relative isolate overflow-hidden  px-6 py-24 sm:px-24 xl:py-32"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7794361/pexels-photo-7794361.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Your AI Transformation Starts Here
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-black">
            Partner with Humancloud to design, deploy, and scale Generative AI
            applications that are secure, scalable, and built to deliver
            measurable business impact.
          </p>
        </FadeIn>
        <a
          href="#"
          className=" block mx-auto text-center mt-6 max-w-[100px] rounded-md bg-[#224fa2] px-3.5 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Let’s Talk
        </a>
      </div>
    </div>
  );
}
