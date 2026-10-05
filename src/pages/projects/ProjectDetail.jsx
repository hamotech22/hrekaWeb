import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, Navigate } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff4d00]";

export default function ProjectDetail() {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/projects")
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.error("Failed to load projects:", error);
        setProjects([]);
      });
  }, []);

  if (projects === null) {
    return <p className="px-5 py-20 text-center text-zinc-600">Loading project...</p>;
  }

  const project = projects.find((p) => String(p.id) === String(id) || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article
      className="w-full bg-white px-5 py-20 sm:py-28 md:px-10 lg:px-16"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-offset="30"
    >
      <div className="mx-auto max-w-4xl">
        {/* Back to all projects */}
        <Link
          to="/projects"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
          className={`inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-[#ff4d00] ${focusRing} rounded-md`}
        >
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        {/* Header */}
        <span
          className="mt-8 inline-flex rounded-full bg-[#ff4d00]/10 px-3 py-1.5 text-xs font-medium text-[#ff4d00]"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {project.category}
        </span>

        <h1
          className="mt-4 text-balance bg-linear-to-b from-zinc-950 to-zinc-600 bg-clip-text text-3xl font-semibold leading-[1.15] tracking-tight text-transparent sm:text-5xl"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {project.title}
        </h1>

        <p className="mt-2 text-sm text-zinc-500" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
          {project.client} · {project.year}
        </p>

        {/* Main image */}
        <div
          className="mt-10 aspect-3/2 overflow-hidden rounded-3xl bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          <img src={project.image} alt={project.title} className="size-full object-cover" />
        </div>

        <p
          className="mt-8 max-w-2xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-offset="30"
        >
          {project.description}
        </p>

        {/* More projects */}
        {related.length > 0 && (
          <div className="mt-20 border-t border-zinc-100 pt-12" data-aos="fade-up" data-aos-duration="700" data-aos-offset="30">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950">More projects</h2>

            <div className="mt-6 grid gap-x-6 gap-y-14 sm:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
