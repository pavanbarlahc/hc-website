import capabilitiesImg from "@/images/capabilitiesImg1.jpg";
import { FadeIn } from "../FadeIn";
import { ZoomOnHoverImage } from "../ZoomOnHoverImg";

const deployments = [
  {
    id: 4,
    teamName: "Advanced Data Pipeline Design",
    description: "AI-ready data pipelines with RAG implementation.",
    imageUrl:
      "https://images.pexels.com/photos/7174650/pexels-photo-7174650.jpeg",
  },
  {
    id: 5,
    teamName: "Retrieval-Augmented Generation (RAG)",
    description: "Domain-specific, context-aware AI retrieval.",
    imageUrl:
      "https://images.pexels.com/photos/7055905/pexels-photo-7055905.jpeg",
  },
  {
    id: 2,
    teamName: "Machine Learning & Model Training",
    statusText: "Deployed 3m ago",
    description:
      "Custom ML models, transformer model development, and embeddings.",
    imageUrl:
      "https://media.istockphoto.com/id/1310293181/photo/deep-learning-artificial-intelligence-background.jpg?s=1024x1024&w=is&k=20&c=JDZcgcJGPRhBttuZiQY-13PhX0bL2djnVC-WgEWg8XI=",
  },
  {
    id: 3,
    teamName: "Intelligent UX & Conversational Interfaces",
    description: "AI-powered UX design and adaptive multimodal experiences.",
    imageUrl:
      "https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg",
  },
  {
    id: 7,
    teamName: "AI Quality Assurance & Safety Audits",
    description: "Ethical AI development and hallucination prevention.",
    imageUrl:
      "https://images.pexels.com/photos/33656465/pexels-photo-33656465.jpeg",
  },

  {
    id: 6,
    teamName: "Agentic Workflow Automation",
    description: "Multi-step, self-directed AI processes.",
    imageUrl:
      "https://images.pexels.com/photos/5816299/pexels-photo-5816299.jpeg",
  },
  {
    id: 1,
    teamName: "Cloud Infrastructure & MLOps",
    description: "AI GPU orchestration and zero-downtime AI cloud deployment.",
    imageUrl:
      "https://images.pexels.com/photos/4692171/pexels-photo-4692171.jpeg",
  },
  {
    id: 8,
    teamName: "AI Product Engineering",
    statusText: "Initiated 1m 32s ago",
    description: "From idea to enterprise AI application development in weeks.",
    imageUrl:
      "https://images.pexels.com/photos/8982692/pexels-photo-8982692.jpeg",
  },
];

export function Capability() {
  return (
    <div className="relative isolate overflow-hidden bg-black py-8 sm:py-12">
      <FadeIn>
        <div className="mx-auto max-w-3xl px-6 lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-4xl lg:text-balance">
            Engineer AI Systems That Work in the Real World
          </p>
          <p className="mt-6 text-base text-white">
            Humancloud combines <b>Generative AI innovation</b> with robust
            engineering — delivering solutions that integrate seamlessly into
            your business. From <b>AI-ready data pipelines</b> to{" "}
            <b>agentic workflow automation</b> and{" "}
            <b>emotion-aware conversational AI,</b> our capabilities ensure your
            AI is not only advanced, but ready for real-world impact.
          </p>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="max-w-lg text-base/7 text-white lg:col-span-4 my-28">
            <svg
              aria-hidden="true"
              className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-white/10"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <FadeIn>
              <figure className="border-l border-indigo-600 pl-8">
                <p className="mt-2 mb-4 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-3xl lg:text-balance">
                  Capabilities
                </p>

                <blockquote className="text-base tracking-tight text-white">
                  <p>
                    Our team includes <b>LLM architects, data engineers,</b> and{" "}
                    <b>prompt engineers</b> — specialists{" "}
                    <b>
                      in model training, data RAG, fine-tuning, RAG pipeline
                      design,
                    </b>{" "}
                    and end-to end <b>AI product engineering.</b>
                  </p>
                </blockquote>
              </figure>
            </FadeIn>

            {/* Image container */}
            {/* <div className="lg:pr-4 py-8">
              <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-[#224fa2]">
                <img
                  alt="AI Illustration"
                  src={capabilitiesImg.src}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div> */}
          </div>
          <div className="relative lg:order-last lg:col-span-8">
            {/* <ul role="list" className="divide-y divide-gray-100">
              {deployments.map((deployment) => (
                <li
                  key={deployment.id}
                  className="relative flex items-center space-x-4 py-4"
                >
                  <div className="min-w-0 flex-auto">
                    <div className="flex items-center gap-x-3">
                      <div className="flex-none rounded-full bg-gray-100/10 p-1 text-[#224fa2]">
                        <div className="size-2 rounded-full bg-current" />
                      </div>
                      <h2 className="min-w-0 text-sm/6 font-semibold text-white">
                        <span className="truncate">{deployment.teamName}</span>
                      </h2>
                    </div>
                    <div
                      className="mt-1
                      flex items-center gap-x-2.5 text-xs/5 text-white"
                    >
                      <p className="truncate">{deployment.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul> */}
            <FadeIn>
              <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
              >
                {deployments.map((deployment) => (
                  <li
                    key={deployment.id}
                    className="bg-gray-800 p-2 rounded-lg h-52 lg:h-40"
                  >
                    <div className="lg:pr-4 group">
                      <div className="relative overflow-hidden rounded-3xl">
                        <img
                          src="https://turing.cdn.prismic.io/turing/ZgamSct2UUcvBRdX_data-analytics-blue.svg?fit=max&w=96"
                          alt="AI Illustration"
                          className="aspect-14/13 rounded-2xl object-cover h-6 w-auto"
                        />
                      </div>
                    </div>
                    <h3 className="mt-2 text-base font-semibold tracking-tight text-white">
                      {deployment.teamName}
                    </h3>
                    <p className="text-sm text-white">
                      {deployment.description}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
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
    </div>
  );
}
