import HeroBackgroud from "@/images/carrer-bg.jpg";

export function Hero() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-12 pb-2 sm:pb-2 lg:pt-32">
        <img
          alt=""
          src={HeroBackgroud.src}
          className="absolute inset-0 -z-10 size-full object-cover opacity-60"
        />
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
              <p
                className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                }}
              >
                Where AI Meets People
              </p>
              <h1
                className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              >
                Build the Future. Grow With Us.
              </h1>
              <p
                className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 opacity-0 animate-fade-down"
                style={{
                  animation: "fadeDown 0.8s ease-out forwards",
                  animationDelay: "0.4s",
                }}
              >
                At Humancloud, you’ll work on <b>real-world AI challenges</b>{" "}
                with a global team of engineers, designers, and innovators — all
                united by the mission to build systems that are reliable enough
                to run a business on.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 opacity-0 animate-fade-down">
                <a
                  href="#"
                  className="rounded-md bg-[#224fa2] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </div>
  );
}
