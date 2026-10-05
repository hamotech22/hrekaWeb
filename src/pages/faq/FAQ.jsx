const faqs = [
  {
    question: "What kind of photography do you offer?",
    answer: "Brand, product, portrait, editorial, campaign, and lifestyle photography tailored to the story you want to tell.",
  },
  {
    question: "How long does a shoot take?",
    answer:
      "It depends on the brief, location, number of setups, and final image count. We will agree on a clear timeline before the shoot.",
  },
  {
    question: "Can you help with the visual direction?",
    answer: "Yes. We can shape the mood, references, locations, styling, shot list, and overall visual direction together.",
  },
  {
    question: "What do you need from me to get started?",
    answer: "A short brief, your goals, references you like, the intended use of the images, and any important dates are a great start.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-zinc-100 px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:gap-14">
          {/* FAQ */}
          <div>
            <h2 className="max-w-3xl text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">If you have any other questions, please email us.</p>

            <div className="mt-10 space-y-3 sm:mt-12">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white ring-1 ring-zinc-900/5 transition duration-300 open:shadow-lg open:shadow-zinc-900/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-2xl px-5 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff4d00] sm:px-6 [&::-webkit-details-marker]:hidden">
                    <span className="text-base font-medium text-zinc-950 sm:text-lg">{faq.question}</span>

                    {/* Plus turns into minus when open */}
                    <span
                      aria-hidden="true"
                      className="relative grid size-9 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-600 transition duration-300 group-open:bg-[#ff4d00] group-open:text-white"
                    >
                      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                      <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition duration-300 group-open:rotate-90 group-open:opacity-0" />
                    </span>
                  </summary>

                  <div className="max-w-2xl px-5 pb-6 text-base leading-7 text-zinc-600 sm:px-6">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>

          {/* Orange CTA card (stays in view on desktop) */}
          <div
            className="relative isolate flex min-h-120 flex-col overflow-hidden rounded-3xl bg-[#ff4d00] p-8 shadow-2xl shadow-[#ff4d00]/20 ring-1 ring-inset ring-white/15 md:p-10 lg:sticky lg:top-28"
            data-aos="fade-up"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-20 -right-20 -z-10 size-72 rounded-full bg-[#ff7a3d] opacity-60 blur-[80px]" />

            <img
              src="https://framerusercontent.com/images/zDh1xqaj7U8pkQhnvX2mpMNDBo.webp"
              alt=""
              className="size-24 rounded-full object-cover ring-4 ring-white/30 grayscale"
            />

            <div className="mt-6">
              <h3 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-4xl">
                Plan a 15 min consultation
              </h3>

              <p className="mt-4 max-w-md text-pretty text-base leading-7 text-white/90">
                Have questions about the brief, process, or shoot? Let’s talk through the project before we begin.
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-10">
              <a
                href="./contact"
                className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Plan a consultation
                <svg
                  viewBox="0 0 256 256"
                  aria-hidden="true"
                  className="size-4 fill-current transition duration-200 group-hover:translate-x-1"
                >
                  <path d="M221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
                </svg>
              </a>

              <a
                href="./contact"
                className="flex h-14 items-center justify-center gap-3 rounded-full bg-zinc-950 text-sm font-semibold text-white transition hover:bg-zinc-800 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send an email
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-[18px]">
                  <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
