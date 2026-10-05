import { Link } from "react-router-dom";

const values = [
  {
    label: "Photograph with intent",
    text: "Every frame has a purpose, from the light and composition to the feeling it leaves behind.",
  },
  {
    label: "Make images useful",
    text: "Beautiful photography should do more than look good. It should clarify a story and move people closer to a brand.",
  },
  {
    label: "Keep the process clear",
    text: "A focused process, thoughtful direction, and open communication make room for better images.",
  },
];

const stats = [
  { value: "120+", label: "Shoots completed" },
  { value: "40+", label: "Clients photographed" },
  { value: "6", label: "Years behind the camera" },
];

const modern = {
  "data-aos": "fade-up",
  "data-aos-duration": "900",
  "data-aos-easing": "ease-out-cubic",
  "data-aos-offset": "60",
};

export default function About() {
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
            Photography that makes people pause
          </h1>
          <p {...modern} className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-400">
            Hreka is a photography practice built around honest observation, strong composition, and images that give every subject a clear
            point of view.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div {...modern} className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="https://framerusercontent.com/images/ObEFqtxxeCEXbYIqoHXoq1ez8TM.webp"
              alt="Photographer working on a shoot"
              loading="lazy"
              className="h-96 w-full object-cover"
            />
          </div>

          <div {...modern} className="flex flex-col justify-center space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white">The story behind the work</h2>
            <p className="text-pretty text-base leading-7 text-zinc-400">
              The work began with a love of observing the details people usually miss: a gesture, a texture, a quiet change in light. That
              attention became a way of helping brands and people show up with more clarity.
            </p>
            <p className="text-pretty text-base leading-7 text-zinc-400">
              Every shoot starts with a simple question: what should someone feel when they see this image? From there, we shape the light,
              location, direction, and edit around that answer.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 {...modern} className="max-w-md text-3xl font-semibold tracking-tight text-white">
            What guides every frame
          </h2>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {values.map((v, i) => (
              <div key={v.label} {...modern} className="grid gap-2 py-7 sm:grid-cols-[240px_1fr] sm:gap-8">
                <h3 className="text-lg font-medium text-white">{v.label}</h3>
                <p className="text-pretty text-base leading-7 text-zinc-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div key={s.label} {...modern}>
              <div className="text-4xl font-semibold text-white sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-zinc-500">{s.label}</div>
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
