export function Leadership() {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)] h-96 md:h-auto md:mb-64"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-10">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h1 className="text-6xl tracking-tight text-white">Leadership</h1>
          </div>

          {/* Section content */}
          <div className="max-w-sm mx-auto md:max-w-4xl grid gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 items-start justify-between">
            {/* 1st article */}
            <article data-aos="fade-up">
              <a className="relative block group mt-8 mb-4" href="#0">
                <div
                  className="absolute rounded-3xl inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src="https://static.wixstatic.com/media/9bda5c_49e3335725c340c0999631b433a99aa9~mv2.png/v1/fill/w_207,h_294,al_c,lg_1,q_85,enc_avif,quality_auto/Frame%201000003146.png"
                    width={342}
                    height={342}
                    alt="News 01"
                  />
                </div>
              </a>
              <h3 className="h3 md:text-2xl font-playfair-display mb-4">
                <a
                  className="text-[#224fa2] font-semibold hover:underline hover:decoration-blue-100"
                  href="#0"
                >
                  Utkarsh Wagh – CEO
                </a>
              </h3>
              <p className="text-lg text-slate-500">
                Visionary product strategist and growth partner, driving
                Humancloud’s shift to AI-first innovation.
              </p>
            </article>

            {/* 2nd article */}
            <article data-aos="fade-up" data-aos-delay="100">
              <a className="relative block group mt-8 mb-4" href="#0">
                <div
                  className="absolute rounded-3xl inset-0 pointer-events-none border-2 border-slate-500 opacity-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-300 ease-out -z-10"
                  aria-hidden="true"
                ></div>
                <div className="overflow-hidden  rounded-2xl">
                  <img
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src="https://static.wixstatic.com/media/9bda5c_3041b8fa94c249cd8c2142000db4d168~mv2.png/v1/crop/x_9,y_0,w_192,h_210/fill/w_207,h_294,al_c,lg_1,q_85,enc_avif,quality_auto/Frame%201000003146%20(1).png"
                    width={342}
                    height={342}
                    alt="News 02"
                  />
                </div>
              </a>
              <h3 className="h3 md:text-2xl font-playfair-display mb-4">
                <a
                  className="text-[#224fa2] font-semibold hover:underline hover:decoration-blue-100"
                  href="#0"
                >
                  Vitesh Jaiswal – CTO
                </a>
              </h3>
              <p className="text-lg text-slate-500">
                Engineering systems architect and AI evangelist with deep
                expertise in building enterprise-grade AI solutions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
