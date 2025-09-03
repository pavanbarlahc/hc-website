import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Assuming you use react-icons
import logoMirage from "@/images/logos/footerLogo.png";
import Image from "next/image";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Submit ticket", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Terms of service", href: "#" },
    { name: "Privacy policy", href: "#" },
    { name: "License", href: "#" },
  ],
  // social: [
  //   {
  //     name: 'Facebook',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'Instagram',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'X',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'GitHub',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: 'YouTube',
  //     href: '#',
  //     icon: (props) => (
  //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //         <path
  //           fillRule="evenodd"
  //           d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
  //           clipRule="evenodd"
  //         />
  //       </svg>
  //     ),
  //   },
  // ],
};

export function Footer() {
  return (
    <>
      <footer>
        <FadeIn>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            {/* Top area: Blocks */}
            <div
              className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
                true
                  ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
                  : ""
              }`}
            >
              {/* 1st block */}
              <div className=" sm:col-span-12 lg:col-span-3">
                <div>{/* <Logo /> */}</div>
                <div className="text-sm text-gray-600">
                  &copy; Cruip.com - All rights reserved.
                </div>
              </div>

              {/* 2nd block */}
              <div className="space-y-2 sm:col-span-6 md:col-span-4 lg:col-span-3">
                <h3 className="text-xl text-gray-900 font-semibold">
                  Headquarters
                </h3>
                <p className="mt-4 font-semibold text-gray-900">California</p>
                <p className="mt-2 text-sm text-gray-700">
                  800 West El Camino Real, Suite 180, <br />
                  Mountain View, CA – 94040
                </p>

                <h3 className="text-xl text-gray-900 font-semibold">
                  Development Centers
                </h3>
                <p className="mt-4 font-semibold text-gray-900">Pune</p>
                <p className="mt-2 text-sm text-gray-700">
                  A-1102, MontClaire, Baner-Pashan <br />
                  Link Road, Pashan, Pune 411021.
                </p>
                <p className="mt-4 font-semibold text-gray-900">Hyderabad</p>
                <p className="mt-2 text-sm text-gray-700">
                  Plot No.50, 1st Floor, Behind Raheja <br />
                  Mindspace, Gafoor Nagar Village, <br />
                  Madhapur, Hyderabad–500081
                </p>
              </div>

              {/* 3rd block */}
              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xl text-gray-900 font-semibold">
                  Contact Us
                </h3>
                <p className="mt-4 text-gray-900 font-semibold">Sales:</p>
                <p className="mt-2 text-sm text-gray-700">
                  sales@humancloud.ltd
                  <br />
                  India: +91 85301 16304
                  <br />
                  US: +1 650 887 7006
                </p>
                <h3 className="text-xl text-gray-900 font-semibold">
                  Customer Care:
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  info@humancloud.ltd
                </p>
                <h3 className="text-xl text-gray-900 font-semibold">
                  Careers:
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  India: +91 84829 37528
                  <br />
                  talent@humancloud.ltd
                </p>
              </div>

              {/* 4th block */}
              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xl text-gray-900 font-semibold">
                  Quick Links
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-700 hover:text-white"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* 5th block */}
              <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
                <h3 className="text-xl text-gray-900 font-semibold">
                  Follow Us
                </h3>

                <ul className="flex gap-1">
                  <li>
                    <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="#0"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="#0"
                      aria-label="Medium"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                      href="#0"
                      aria-label="Github"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          {/* Big text */}
          <div
            className="relative h-18 md:h-48 lg:h-64 w-full -z-10 overflow-hidden px-4 sm:px-8"
            aria-hidden="true"
          >
            {/* Scrolling Wrapper */}
            <div className="flex animate-scrollText whitespace-nowrap gap-x-24">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="text-[64px] sm:text-[120px] md:text-[180px] lg:text-[248px] 
                   font-bold leading-none bg-gradient-to-b from-gray-200 to-gray-200/30 
                   bg-clip-text text-transparent"
                >
                  humancloud
                </span>
              ))}
            </div>

            {/* Glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/2"
              aria-hidden="true"
            >
              <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 rounded-full border-[20px] border-blue-700 blur-[80px] will-change-[filter]"></div>
            </div>
          </div>
        </FadeIn>
      </footer>

      {/* <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-16">
          <FadeIn>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-y-8">
                <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={logoMirage}
                  alt="Company Logo"
                  className="h-8 w-auto"
                  unoptimized
                />
              </a>
                <div>
                  <h3 className="text-xl font-semibold">Headquarters</h3>
                  <p className="mt-4 font-normal">California</p>
                  <p className="mt-2 text-sm text-gray-200">
                    800 West El Camino Real, Suite 180, <br />
                    Mountain View, CA – 94040
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Development Centers</h3>
                  <p className="mt-4 font-normal">Pune</p>
                  <p className="mt-2 text-sm text-gray-200">
                    A-1102, MontClaire, Baner-Pashan <br />
                    Link Road, Pashan, Pune 411021.
                  </p>
                  <p className="mt-4 font-normal">Hyderabad</p>
                  <p className="mt-2 text-sm text-gray-200">
                    Plot No.50, 1st Floor, Behind Raheja <br />
                    Mindspace, Gafoor Nagar Village, <br />
                    Madhapur, Hyderabad–500081
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-8 md:gap-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Contact Us</h3>
                  <p className="mt-4 font-normal">Sales:</p>
                  <p className="mt-2 text-sm text-gray-200">
                    sales@humancloud.ltd
                    <br />
                    India: +91 85301 16304
                    <br />
                    US: +1 650 887 7006
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Customer Care:</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    info@humancloud.ltd
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Careers:</h3>
                  <p className="mt-2 text-sm text-gray-200">
                    India: +91 84829 37528
                    <br />
                    talent@humancloud.ltd
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Quick Links</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-normal text-gray-200 hover:text-white"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaFacebookF className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-white hover:text-gray-200">
                    <FaLinkedinIn className="h-6 w-6" />
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-200">
                  <p>&copy; Copyright 2025 – All Rights</p>
                  <p>Reserved by Humancloud, Inc.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </footer> */}
    </>
  );
}
