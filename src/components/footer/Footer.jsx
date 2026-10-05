import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/contact" },
  { label: "Terms & Conditions", href: "/contact" },
];

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]";
const API_URL = "http://localhost:3000/socials";

export default function Footer() {
  const [socials, setSocial]=useState([]);
  console.log(socials.data);


useEffect(()=>{
   axios.get(API_URL).then((res)=> setSocial(res.data))
      .catch((error) => console.error("Failed to load socials links:", error))
},[]);


  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#111111] px-5 pt-16 sm:px-6 sm:pt-20">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-[#ff4d00]/15 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 rounded-lg ${focusRing}`}>
            <span className="relative block size-9">
              <span className="absolute left-0 top-0 h-4 w-full rounded-b-full bg-white" />
              <span className="absolute bottom-0 left-0 h-4 w-full rounded-t-full bg-[#ff4d00]" />
            </span>
            <span className="text-2xl font-semibold tracking-tight text-white">Hreka Web</span>
          </Link>

          {/* Main menu */}
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-full px-4 py-2 text-base text-zinc-300 transition hover:bg-white/5 hover:text-white ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={`grid size-11 place-items-center rounded-full border border-white/10 text-zinc-400 transition duration-200 hover:-translate-y-0.5 hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white ${focusRing}`}
              >
                <svg viewBox="0 0 256 256" aria-hidden="true" className="size-5 fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col-reverse items-center gap-6 border-t border-white/10 py-8 text-sm text-zinc-400 sm:mt-16 md:flex-row md:justify-between">
          <div className="space-y-1 text-center md:text-left">
            <p>Copyright © 2026 Hreka Web. All rights reserved.</p>
            <p>
              Photography portfolio designed and built with{" "}
              <a href={`mailto:hamotech22@gmail.com`} target="_blank" rel="noopener noreferrer" className="text-[#ff4d00] transition hover:text-white">
                hamotech.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link key={link.label} to={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Oversized wordmark, cropped by the bottom edge */}
        {/* <p
          aria-hidden="true"
          className="-mb-[0.14em] select-none bg-linear-to-b from-white/12 to-transparent bg-clip-text text-center text-[14vw] font-semibold leading-none tracking-tighter text-transparent lg:text-[11rem]"
        >
          Osama Hreka
        </p> */}
      </div>
    </footer>
  );
}
