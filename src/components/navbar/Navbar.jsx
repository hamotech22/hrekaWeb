import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  // { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  // { label: "Testimonials", href: "/testimonials" },
];

const desktopLink =
  "rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/5 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D0A]";

const mobileLink = "block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950";

function ChevronDown({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className={`size-4 ${className}`}>
      <path d="m5 8 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-950">
      <span className="relative block h-4.75 w-4.25 before:absolute before:top-0 before:h-2 before:w-4.25 before:rounded-b-full before:bg-zinc-950 after:absolute after:bottom-0 after:h-2 after:w-4.25 after:rounded-t-full after:bg-[#FF4D0A]" />
      Hreka Web
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="relative mx-auto max-w-6xl">
        <nav
          aria-label="Main"
          className="flex h-14 items-center justify-between rounded-full border border-zinc-200/70 bg-white/75 pl-5 pr-2 shadow-lg shadow-zinc-900/5 backdrop-blur-xl"
        >
          <Logo />

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button type="button" className={`${desktopLink} inline-flex items-center gap-1`}>
                    {item.label}
                    <ChevronDown className="transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </button>

                  {/* pt-3 bridges the gap so the menu doesn't close while the mouse travels to it */}
                  <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-zinc-200/70 bg-white p-1.5 shadow-xl shadow-zinc-900/10">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} to={item.href} className={desktopLink}>
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              type="button"
              className="group/cta inline-flex items-center gap-1.5 rounded-full bg-[#FF4D0A] px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-orange-500/25 transition hover:bg-[#e64305] active:scale-[0.98]"
            >
              Plan a shoot
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
                className="size-4 transition duration-200 group-hover/cta:translate-x-0.5"
              >
                <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="grid size-10 place-items-center rounded-full text-zinc-700 transition hover:bg-zinc-900/5 md:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="size-5">
                {open ? (
                  <path d="m5 5 10 10M15 5 5 15" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 6h13M3.5 10h13M3.5 14h13" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-3xl border border-zinc-200/70 bg-white p-2 shadow-xl shadow-zinc-900/10 transition duration-200 md:hidden ${
            open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="py-1">
                <p className="px-4 pb-1 pt-2 text-sm font-medium text-zinc-400">{item.label}</p>
                {item.children.map((child) => (
                  <Link key={child.label} to={child.href} onClick={close} className={`${mobileLink} pl-7`}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.label} to={item.href} onClick={close} className={mobileLink}>
                {item.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
