import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Failed to load blog posts:", error));
  }, []);

  return (
    <section
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl sm:mb-16" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          <h1 className="text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-4xl font-semibold leading-[1.1] tracking-tight text-transparent sm:text-5xl">
            Photography notes
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Ideas, references, and practical notes on making stronger images.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className={`group flex flex-col rounded-2xl ${focusRing}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-offset="30"
            >
              <div className="aspect-5/4 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-[#ff4d00]">
                {post.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{post.excerpt}</p>

              <time dateTime={post.isoDate} className="mt-auto pt-5 text-sm text-zinc-500">
                {post.date}
              </time>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
