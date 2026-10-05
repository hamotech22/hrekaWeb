import useLanguage from "../../context/useLanguage";

export default function CTA() {
  const { t } = useLanguage();
  return (
    <section id="cta" className="w-full scroll-mt-24 bg-white px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div
          className="relative isolate overflow-hidden rounded-3xl bg-[#ff4d00] px-6 py-16 shadow-2xl shadow-[#ff4d00]/25 ring-1 ring-inset ring-white/15 sm:py-20 md:px-16 md:py-24"
          data-aos="fade-up"
        >
          {/* Background: faint grid, fading toward the edges */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1f_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          {/* Background: light glow on top, deeper orange in the corner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-96 -translate-x-1/2 rounded-full bg-[#ff7a3d] opacity-70 blur-[90px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -right-24 -z-10 size-80 rounded-full bg-[#e63e00] opacity-70 blur-[90px]"
          />

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2
              className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
              data-aos="fade-up"
            >
              {t.cta.title}
            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/90 sm:text-lg sm:leading-8" data-aos="fade-up">
              {t.cta.description}
            </p>

            <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row" data-aos="fade-up">
              <a
                href="./contact"
                className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/10 transition hover:bg-zinc-100 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {t.cta.action}
                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-4 fill-current transition duration-200 group-hover:translate-x-1"
                >
                  <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>

              {/* <a
                href="./pricing#plans"
                className="flex h-14 flex-1 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-zinc-800 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Choose your plan
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
