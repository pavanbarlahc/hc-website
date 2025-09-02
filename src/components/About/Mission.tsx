import { FadeIn } from "../FadeIn";

export function Mission() {
  return (
    // <div className="bg-white">
    //   <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //     <h1 className="text-6xl tracking-tight text-black">Vision & Mission</h1>
    //   </div>

    //   <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="pb-12 md:pb-20">
    //       <div className="max-w-xl mx-auto md:max-w-none space-y-20">
    //         <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
    //           <div className="md:min-w-[30rem]" data-aos="fade-left">
    //             <h2 className="h3 md:text-4xl font-playfair-display mb-4">
    //               Vision
    //             </h2>

    //             <div className="space-y-3">
    //               <svg
    //                 className="fill-blue-600"
    //                 width="20"
    //                 height="16"
    //                 viewBox="0 0 20 16"
    //               >
    //                 <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
    //               </svg>
    //               <blockquote className=" text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
    //                 To pioneer an AI-first future where intelligent systems
    //                 deliver value with human alignment, domain understanding,
    //                 and business reliability.
    //               </blockquote>
    //             </div>
    //           </div>

    //           <div
    //             className="flex justify-center items-center"
    //             data-aos="fade-right"
    //           >
    //             <div className="relative">
    //               <div
    //                 className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
    //                 aria-hidden="true"
    //               ></div>
    //               <img
    //                 className="mx-auto md:max-w-none rounded-2xl transition-transform duration-500 hover:scale-110"
    //                 src="https://careernursing.org/uploads/vision.jpg"
    //                 width={540}
    //                 height={405}
    //                 alt="Customer 01"
    //               />
    //             </div>
    //           </div>
    //         </div>

    //         <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
    //           <div className="md:min-w-[30rem]" data-aos="fade-left">
    //             <h2 className="h3 md:text-4xl font-playfair-display mb-4">
    //               Mission
    //             </h2>
    //             <div className="space-y-3">
    //               <svg
    //                 className="fill-blue-600"
    //                 width="20"
    //                 height="16"
    //                 viewBox="0 0 20 16"
    //               >
    //                 <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
    //               </svg>
    //               <blockquote className=" text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
    //                 To engineer AI-native platforms and tools that combine
    //                 infrastructure, clean data, and contextual intelligence —
    //                 helping organizations automate, innovate, and scale
    //                 responsibly.
    //               </blockquote>
    //             </div>
    //           </div>

    //           <div
    //             className="flex justify-center items-center"
    //             data-aos="fade-right"
    //           >
    //             <div className="relative">
    //               <div
    //                 className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 -translate-y-4 -z-10"
    //                 aria-hidden="true"
    //               ></div>
    //               <img
    //                 className="mx-auto md:max-w-none rounded-2xl  transition-transform duration-500 hover:scale-110"
    //                 src="https://img.freepik.com/free-photo/business-strategy-success-target-goals_1421-33.jpg"
    //                 width={540}
    //                 height={405}
    //                 alt="Customer 02"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="overflow-hidden bg-black">
      <div className="relative isolate">
        <FadeIn>
          <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:pt-20 xl:gap-x-20 xl:px-20">
              <img
                alt=""
                src="https://media.istockphoto.com/id/2012746941/photo/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.jpg?s=1024x1024&w=is&k=20&c=zKpXm-yrWdpZ9M7m4KmFwh34pn1qzNWPLjYJcMUlRxk="
                className="h-80 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-80 lg:max-w-md shadow-[#224fa2] hover:shadow-2xl hover:shadow-[#224fa2]/80 transition-shadow duration-300"
              />
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Vision
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-white">
                  To pioneer an AI-first future where intelligent systems
                  deliver value with human alignment, domain understanding, and
                  business reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-18 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:pb-20 xl:gap-x-20 xl:px-20">
              <div className="w-full flex-auto">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Mission
                </h2>
                <p className="mt-6 text-lg/8 text-pretty text-white">
                  To engineer AI-native platforms and tools that combine
                  infrastructure, clean data, and contextual intelligence —
                  helping organizations automate, innovate, and scale
                  responsibly.
                </p>
              </div>
              <img
                alt=""
                src="https://images.pexels.com/photos/33714908/pexels-photo-33714908.jpeg"
                className="h-80 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-80 lg:max-w-md shadow-[#224fa2] hover:shadow-2xl hover:shadow-[#224fa2]/80 transition-shadow duration-300"
              />
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
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-[#8680fd] opacity-50"
          />
        </div> */}
      </div>
    </div>
  );
}
