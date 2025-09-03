import { FadeIn } from "../FadeIn";
import { ZoomOnHoverImage } from "../ZoomOnHoverImg";

export function Vision() {
  return (
    <div className="bg-gray-50 pb-12 relative isolate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl lg:text-center">
            <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-balance">
              AI-First Product Engineering Partner
            </p>
            <p className="mt-6 text-gray-700 text-base">
              Humancloud transforms breakthrough AI concepts into secure,
              <b> production-ready AI applications</b> — combining robust{" "}
              <b>data engineering,</b>
              With scalable <b>cloud infrastructure,</b> and <b></b> With
              expertise in <b>full-stack AI product development,</b>{" "}
              <b>human-in-the-loop workflows,</b> and <b>LLM fine-tuning,</b> we
              empower enterprises to lead in an
              <b> AI-first world</b>
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="py-12 sm:py-12 rounded-3xl">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-0 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {/* Image container */}
                <div className="">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src="https://images.pexels.com/photos/8294678/pexels-photo-8294678.jpeg"
                      alt="AI Illustration"
                      className="w-full h-140 rounded-xl"
                    />
                  </div>
                </div>

                {/* Text content */}
                <div className="text-base/7 text-gray-700 lg:max-w-lg my-auto">
                  <div className="max-lg:mt-16 lg:col-span-1">
                    <dl className="mt-6 grid grid-rows-1 gap-x-8 gap-y-4 sm:grid-rows-2 text-center">
                      <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4 items-center">
                        <dt className="text-xl text-gray-600">
                          industries empowered
                        </dt>
                        <dd className="order-first text-8xl tracking-tight text-gray-900">
                          <span>6+</span>
                        </dd>
                      </div>
                      <div className="flex flex-col gap-y-2 items-center">
                        <dt className="text-xl text-gray-600">
                          faster AI deployment
                        </dt>
                        <dd className="order-first text-8xl tracking-tight text-gray-900">
                          <span>2x</span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#224fa2] opacity-50"
          />
        </div> */}
      </div>
    </div>
  );
}
