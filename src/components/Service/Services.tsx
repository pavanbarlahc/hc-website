import Link from "next/link";
import capabilitiesImg from "@/images/capabilitiesImg1.jpg";

export function Services() {
  return (
    <div className=" py-24 sm:py-32 relative">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          Core Services
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-3">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(0.5rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-lg" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(0.5rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-lg" />
          </div>

          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-lg" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-lg lg:rounded-br-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-lg lg:rounded-br-lg" />
          </div>

          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-bl-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-bl-[calc(0.5rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-bl-lg" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-br-lg" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-br-[calc(0.5rem+1px)]">
              <img
                alt=""
                src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  AI Product Engineering
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  From concept to production-ready AI solutions. We design and
                  build <b>enterprise-grade AI products</b> — copilots,
                  assistants, and domain-specific applications — that integrate
                  seamlessly with your business.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-br-lg" />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
              className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#042258] opacity-50"
            />
          </div>
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
}
