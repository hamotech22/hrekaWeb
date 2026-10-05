import useLanguage from "../../context/useLanguage";

const stats = [
  { value: "120+" },
  { value: "40+" },
  { value: "6" },
];

const modern = {
  "data-aos": "fade-up",
  "data-aos-duration": "900",
  "data-aos-easing": "ease-out-cubic",
  "data-aos-offset": "60",
};

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="bg-[#111111]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-24 sm:px-6 sm:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-112 rounded-full bg-[#ff4d00]/10 blur-3xl"
        />
        <div className="mx-auto max-w-4xl text-center">
          <h1
            {...modern}
            className="text-balance bg-linear-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold leading-[1.05] tracking-tight text-transparent sm:text-6xl"
          >
            {t.about.title}
          </h1>
          <p {...modern} className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-400">
            {t.about.intro}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div {...modern} className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="https://framerusercontent.com/images/ObEFqtxxeCEXbYIqoHXoq1ez8TM.webp"
              alt={t.about.imageAlt}
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>

          <div {...modern} className="flex flex-col justify-center space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white">{t.about.storyTitle}</h2>
            <p className="text-pretty text-base leading-7 text-zinc-400">{t.about.story1}</p>
            <p className="text-pretty text-base leading-7 text-zinc-400">{t.about.story2}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 {...modern} className="max-w-md text-3xl font-semibold tracking-tight text-white">
            {t.about.valuesTitle}
          </h2>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {t.about.values.map(([label, text]) => (
              <div key={label} {...modern} className="grid gap-2 py-7 sm:grid-cols-[240px_1fr] sm:gap-8">
                <h3 className="text-lg font-medium text-white">{label}</h3>
                <p className="text-pretty text-base leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={t.about.stats[i]} {...modern}>
              <div className="text-4xl font-semibold text-white sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-zinc-500">{t.about.stats[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="px-5 py-20 sm:px-6 sm:py-28">
        <div {...modern} className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-pretty text-base leading-7 text-zinc-400">
            Tell us what you're building — we'll tell you honestly if we're
            the right fit.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#ff4d00]/40 px-6 py-3 text-sm font-medium text-[#ff4d00] transition hover:border-[#ff4d00] hover:bg-[#ff4d00] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00]"
          >
            Get in touch
          </Link>
        </div>
      </section> */}
    </div>
  );
}
