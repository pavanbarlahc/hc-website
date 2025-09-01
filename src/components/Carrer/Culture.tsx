import cultureImg from "@/images/culture.jpg";
import { List, ListItem } from "../List";

export function Culture() {
  return (
    <div className="bg-white pt-24 sm:pt-16 relative isolate">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Culture & Values
          </p>
          <p className="mt-6  text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
            We believe the best AI is built by <b>diverse, driven teams</b> who
            share a passion for solving complex problems.
          </p>
        </div>

        <div className="py-24 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {/* Text content */}
              <div className="text-base/7 text-gray-700 lg:max-w-lg my-none">
                <List className="mt-0 lg:mt-0 lg:w-1/2 lg:min-w-120 lg:pl-4">
                  <ListItem title="Innovation">
                    We explore, experiment, and engineer solutions ahead of the
                    curve.
                  </ListItem>
                  <ListItem title="Excellence">
                    Quality isn’t an option — it’s built into our DNA.
                  </ListItem>
                  <ListItem title="Ownership">
                    Every team member is trusted to deliver with accountability.
                  </ListItem>
                  <ListItem title="Collaboration">
                    We win as a team, always.
                  </ListItem>
                </List>
              </div>

              {/* Image container */}
              <div className="lg:pr-4">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    alt="AI Illustration"
                    src={cultureImg.src}
                    className="w-full h-auto object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
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
  );
}
