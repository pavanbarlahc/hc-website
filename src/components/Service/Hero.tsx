import Link from "next/link";
import capabilitiesImg from "@/images/capabilitiesImg1.jpg";

export function Hero() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div
              className="text-center md:text-left md:min-w-[30rem]"
              data-aos="fade-right"
            >
              <h1
                className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-6xl mb-5 lg:mt-5 opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              >
                AI-First Services for the Enterprise
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                From <b>data foundations</b> to{" "}
                <b>intelligent user experiences,</b>
                Humancloud delivers the complete AI lifecycle. We design,
                deploy, and scale <b>production-ready AI systems</b> that
                enterprises can trust.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group py-2 px-2 rounded-lg"
                    href="/request-demo"
                  >
                    Request Demo{" "}
                  </Link>
                </div>
                {/* <div>
                  <Link
                    className="btn text-white bg-slate-700 hover:bg-slate-800 w-full"
                    href="#0"
                  >
                    Explore Product
                  </Link>
                </div> */}
              </div>
            </div>

            {/* Hero image */}
            {/* <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />             */}

            <div className="lg:pr-4 py-8">
              <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-[#224fa2]">
                <img
                  alt="AI Illustration"
                  src={capabilitiesImg.src}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
