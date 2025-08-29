import capabilitiesImg from "@/images/capabilitiesImg1.jpg";

const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "AI Product Engineering",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "From idea to enterprise AI application development in weeks.",
    environment: "Preview",
  },
  {
    id: 2,
    href: "#",
    projectName: "mobile-api",
    teamName: "Machine Learning & Model Training",
    status: "online",
    statusText: "Deployed 3m ago",
    description:
      "Custom ML models, transformer model development, and embeddings.",
    environment: "Production",
  },
  {
    id: 3,
    href: "#",
    projectName: "tailwindcss.com",
    teamName: "Intelligent UX & Conversational Interfaces",
    status: "offline",
    statusText: "Deployed 3h ago",
    description: "AI-powered UX design and adaptive multimodal experiences.",
    environment: "Preview",
  },
  {
    id: 4,
    href: "#",
    projectName: "api.protocol.chat",
    teamName: "Advanced Data Pipeline Design",
    status: "error",
    statusText: "Failed to deploy 6d ago",
    description: "AI-ready data pipelines with RAG implementation.",
    environment: "Preview",
  },
  {
    id: 5,
    href: "#",
    projectName: "protocol-web-app",
    teamName: "Retrieval-Augmented Generation (RAG)",
    status: "online",
    statusText: "Deployed 1d ago",
    description: "Domain-specific, context-aware AI retrieval.",
    environment: "Production",
  },
  {
    id: 6,
    href: "#",
    projectName: "agentic-automation-service",
    teamName: "Agentic Workflow Automation",
    status: "online",
    statusText: "Deployed 2h ago",
    description: "Multi-step, self-directed AI processes.",
    environment: "Production",
  },
  {
    id: 7,
    href: "#",
    projectName: "ai-quality-assurance",
    teamName: "AI Quality Assurance & Safety Audits",
    status: "offline",
    statusText: "Initiated 5m ago",
    description: "Ethical AI development and hallucination prevention.",
    environment: "Preview",
  },
  {
    id: 8,
    href: "#",
    projectName: "cloud-mlops-service",
    teamName: "Cloud Infrastructure & MLOps",
    status: "online",
    statusText: "Deployed 1h ago",
    description: "AI GPU orchestration and zero-downtime AI cloud deployment.",
    environment: "Production",
  },
];

export function Capability() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-0 sm:py-8">
      <div className="mx-auto max-w-3xl px-6 lg:text-center">
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          Engineer AI Systems That Work in the Real World
        </p>
        <p className="mt-6 text-lg/8 text-gray-700">
          Humancloud combines <b>Generative AI innovation</b> with robust
          engineering — delivering solutions that integrate seamlessly into your
          business. From <b>AI-ready data pipelines</b> to{" "}
          <b>agentic workflow automation</b> and{" "}
          <b>emotion-aware conversational AI,</b> our capabilities ensure your
          AI is not only advanced, but ready for real-world impact.
        </p>
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="max-w-lg text-base/7 text-gray-600 lg:col-span-7">
            <svg
              aria-hidden="true"
              className="absolute -top-160 left-1 -z-10 h-256 w-702 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)] stroke-gray-900/10"
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
            <figure className="border-l border-indigo-600 pl-8">
              <p className="mt-2 mb-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Capabilities
              </p>
              <blockquote className="text-xl/8 tracking-tight text-gray-900">
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

            {/* Image container */}
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
          <div className="relative lg:order-last lg:col-span-5">
            <ul role="list" className="divide-y divide-gray-100">
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
                      <h2 className="min-w-0 text-sm/6 font-semibold text-gray-900">
                        {/* <a href={deployment.href} className="flex gap-x-2"> */}
                        <span className="truncate">{deployment.teamName}</span>
                        {/* </a> */}
                      </h2>
                    </div>
                    <div
                      className="mt-1
                     flex items-center gap-x-2.5 text-xs/5 text-gray-500"
                    >
                      <p className="truncate">{deployment.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
