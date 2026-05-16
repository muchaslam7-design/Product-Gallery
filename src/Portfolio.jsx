import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Solemate",
      category: "E-Commerce Platform",
      desc: "A premium shoe retail application featuring custom grid-based product inventory management, integrated React Hook Form, responsive modals, dynamic search with interactive map logistics, custom cursors, and an engaging video background landing page.",
      tech: ["React.js", "Tailwind CSS", "React Hook Form", "Framer Motion"],
      github: "https://github.com/muchaslam7-design",
      live: "https://muchaslam-solemate.vercel.app/",
    },
    {
      title: "The Plaza",
      category: "Dynamic Inventory Display",
      desc: "Built a customized inventory web application utilizing a product API to display structured item logs, featuring responsive dark-themed product grids and optimized state management for dynamic data parsing.",
      tech: ["React.js", "Tailwind CSS", "Custom API", "JavaScript"],
      github: "https://github.com/muchaslam7-design",
      live: "https://the-plaza-gah8.vercel.app/",
    },
    {
      title: "Movie Explorer",
      category: "Cinematic Discovery App",
      desc: "A high-performance movie discovery engine integrated directly with the TMDB API to fetch and display real-time cinematic content. Implemented deep fluid search functionality, dynamic layout routing, and responsive design structure.",
      tech: ["React.js", "Tailwind CSS", "TMDB API", "React Router Dom"],
      github: "https://github.com/muchaslam7-design",
      live: "https://movie-explorer-blue-beta.vercel.app/",
    },
    {
      title: "Product Gallery",
      category: "E-Commerce Showcase",
      desc: "An elegant, lightweight retail storefront that dynamically connects with the FakeStore API to list, filter, and render consumer products inside a fully responsive interface built with modern UI standards.",
      tech: ["React.js", "Tailwind CSS", "FakeStore API", "JSON"],
      github: "https://github.com/muchaslam7-design",
      live: "https://product-gallery-iota.vercel.app/",
    },
    {
      title: "Premium Landing Page",
      category: "Web Architecture & UI",
      desc: "Designed and developed a high-fidelity, fully responsive landing page interface. Focused on clean semantic layout structures, seamless typography, modern grid alignments, and optimized asset loading for performance metrics.",
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/muchaslam7-design/premium-landing-page",
      live: "https://premium-landing-page-iekj.vercel.app/",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen font-sans selection:bg-[#deff9a] selection:text-black">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 border-b border-neutral-900">
        <span className="text-[#deff9a] uppercase tracking-widest text-sm font-semibold">
          Available for Paid Remote Internships
        </span>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mt-4 mb-6">
          MUNEEBA <br />
          ASLAM<span className="text-[#deff9a]">.</span>
        </h1>
        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
          Software Engineering student & Frontend Developer specializing in
          building high-fidelity, scalable web applications using{" "}
          <span className="text-white font-medium">React.js</span> and{" "}
          <span className="text-white font-medium">Tailwind CSS</span>.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:muchaslam7@gmail.com"
            className="bg-[#deff9a] text-black px-6 py-3 rounded-lg font-bold hover:bg-white transition-all text-sm"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com/in/muneeba-aslam"
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-900 transition-all text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/muchaslam7-design"
            target="_blank"
            rel="noreferrer"
            className="border border-neutral-800 px-6 py-3 rounded-lg hover:bg-neutral-900 transition-all text-sm"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#deff9a]"></span> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#111] p-8 rounded-2xl border border-neutral-900 hover:border-neutral-800 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-[#deff9a] bg-[#deff9a]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-950 px-2 py-1 rounded border border-neutral-900 text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#deff9a] hover:underline"
                  >
                    Code ↗
                  </a>
                  <a
                    href={project.live}
                    className="text-neutral-500 hover:text-white transition-all"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-neutral-900 text-center text-xs text-neutral-600">
        <p>
          © 2026 Muneeba Aslam. Built with React & Tailwind CSS. Sadiqabad,
          Pakistan.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
