import Link from "next/link";
import capabilitiesImg from "@/images/capabilitiesImg1.jpg";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative isolate overflow-hidden pt-32 pb-2 sm:pb-2 lg:pt-48">
        {/* Dark background */}
        <div
          className="absolute inset-0 bg-slate-900 pointer-events-none -z-10"
          aria-hidden="true"
        ></div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-24">
            <div className="text-center">
              <h1
                className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              >
                <span className="bg-gradient-to-r from-[#224fa2] to-[#1cefff] bg-clip-text text-transparent">
                  AI-First
                </span>{" "}
                Services for the Enterprise
              </h1>
              <p
                className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8 opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                  animationDelay: "0.4s",
                }}
              >
                From <b>data foundations</b> to{" "}
                <b>
                  intelligent user experiences, <br />
                </b>
                Humancloud delivers the complete AI lifecycle. We design,
                deploy, and scale <b>production-ready AI systems</b> that
                enterprises can trust.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 opacity-0 animate-fade-down">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}
      </div>

      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
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
              </div>
            </div>

            

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
      </div> */}
    </section>
  );
}
