const testimonials = [
  {
    name: "Sarah Williams",
    job: "Brand Founder",
    rating: 4,
    image: "https://framerusercontent.com/images/5Ym5otFwTnEz8s94qOCgGcQGZc.jpeg",
    text: "Hreka understood the feeling we wanted immediately. The images gave our brand a much clearer and more confident presence.",
  },
  {
    name: "James Wilson",
    job: "Creative Director",
    rating: 5,
    image: "https://framerusercontent.com/images/14rtiESLR0xfbkwOjILh4g7zsc.jpeg",
    text: "The shoot felt calm, focused, and incredibly well directed. We came away with a library of images that still feels fresh months later.",
  },
  {
    name: "Emily Johnson",
    job: "Independent Artist",
    rating: 4,
    image: "https://framerusercontent.com/images/KbGh6muZKEqDCaiIUlm4nulF0c.jpeg",
    text: "The portraits feel like me, not a version of me performing for the camera. That honesty is exactly what I was looking for.",
  },
];

function Stars({ rating }) {
  return (
    <div role="img" aria-label={`Rated ${rating} out of 5`} className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`size-5 fill-current ${star <= rating ? "text-[#ff4d00]" : "text-zinc-200"}`}
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-zinc-100 px-5 py-20 sm:py-28 md:px-10" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-aos="fade-up">
          <h2 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-5xl">
            What clients say about the work
          </h2>

          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            A few words from the people and teams who trusted Hreka with their visual story.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="group flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-zinc-900/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/5"
              data-aos="fade-up"
            >
              <Stars rating={testimonial.rating} />

              <blockquote className="mb-8 mt-6 text-pretty text-base leading-7 text-zinc-800 sm:text-lg sm:leading-8">
                “{testimonial.text}”
              </blockquote>

              <footer className="mt-auto flex items-center gap-3 border-t border-zinc-100 pt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="size-11 rounded-full object-cover ring-2 ring-white grayscale transition duration-300 group-hover:grayscale-0"
                />

                <div>
                  <p className="text-sm font-semibold text-zinc-950">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500">{testimonial.job}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
