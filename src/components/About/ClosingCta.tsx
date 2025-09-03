import Link from "next/link";
import { FadeIn } from "../FadeIn";

export function ClosingCta() {
  return (
    // <section className="bg-slate-900">
    //   <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
    //     <div className="py-12 md:py-20">
    //       <div className="relative max-w-3xl mx-auto text-center">
    //         <div
    //           className="absolute right-0 -mt-4 -mr-3 fill-slate-300 hidden lg:block"
    //           aria-hidden="true"
    //         >
    //           <svg className="fill-slate-300" width="56" height="43">
    //             <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688" />
    //           </svg>
    //         </div>

    //         <div className="relative">
    //           <h2 className="h2 text-5xl text-slate-100 mb-4">
    //             Let’s Build Something
    //             <span className="text-emerald-500"> Intelligent</span>.
    //           </h2>
    //           <p className="text-xl text-slate-400 mb-8">
    //             Partner with Humancloud to engineer AI systems that deliver
    //             measurable business impact.
    //           </p>
    //           <div>
    //             <Link
    //               className="btn text-white bg-[#224fa2]  group px-3 py-2 rounded-lg"
    //               href="/request-demo"
    //             >
    //               Talk to Our Team

    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <div className="bg-gray-100">
    //   <div className="mx-auto max-w-8xl py-24 sm:px-6 sm:py-16 lg:px-8">
    //     <div className="relative isolate overflow-hidden bg-gray-800 px-6 py-24 text-center after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl">
    //       <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
    //         Let’s Build Something
    //       </h2>
    //       <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
    // Partner with Humancloud to engineer AI systems that deliver
    // measurable business impact.
    //       </p>
    //       <div className="mt-10 flex items-center justify-center gap-x-6">
    //         <a
    //           href="#"
    //           className="rounded-md bg-[#224fa2] px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-[#3a67ba] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    //         >
    //           Talk to Our Team
    //         </a>
    //       </div>
    //       <svg
    //         viewBox="0 0 1024 1024"
    //         aria-hidden="true"
    //         className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
    //       >
    //         <circle
    //           r={512}
    //           cx={512}
    //           cy={512}
    //           fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
    //           fillOpacity="0.7"
    //         />
    //         <defs>
    //           <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
    //             <stop stopColor="#7775D6" />
    //             <stop offset={1} stopColor="#E935C1" />
    //           </radialGradient>
    //         </defs>
    //       </svg>
    //     </div>
    //   </div>
    // </div>
    <div className="pt-0 sm:pt-0">
      <div className="relative isolate overflow-hidden  px-6 py-24 sm:px-24 xl:py-16 bg-[#224fa2]">
        <FadeIn>
          <h2 className="mx-auto max-w-4xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s Build Something
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-center text-lg text-white">
            Partner with Humancloud to engineer AI systems that deliver
            measurable business impact.
          </p>
        </FadeIn>
        <a
          href="#"
          className=" block mx-auto text-center mt-6 max-w-36 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black focus-visible:outline-2 hover:bg-white/80 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Talk to Our Team
        </a>
      </div>
    </div>
  );
}
