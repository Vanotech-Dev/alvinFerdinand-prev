import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Type, Video, X } from "lucide-react";

const categories = ["Video Explainer", "Looping", "Branding"];

const projectsData = [
  {
    id: 1,
    title: "Ledgr",
    category: "Video Explainer",
    description:
      "Ledgr is a simple and powerful transaction tracker that helps you monitor your finances and grow your money with clarity and control.",
    tools: ["After Effects"],
    type: "video",
    media: "/video/Explainer/Alvin-Explainer-1.mp4",
    thumbnail: "image/Thumbnail1.png",
  },
  {
    id: 2,
    title: "Building",
    category: "Looping",
    description:
      "A looping building animation created from a photograph I captured myself. The original image was carefully redrawn and transformed into a stylized illustration before being brought to life through seamless motion. This project highlights my process of combining photography, illustration, and motion design to create a unique animated scene.",
    tools: ["After Effects"],
    type: "gif",
    media: "/video/loop/Alvin-Looping-2.gif",
  },
  {
    id: 3,
    title: "Burger",
    category: "Looping",
    description:
      "A playful burger looping animation designed to showcase motion principles, timing, and visual rhythm. The project emphasizes smooth looping techniques.",
    tools: ["After Effects"],
    type: "gif",
    media: "/video/loop/Alvin-Looping-1.gif",
  },
  {
    id: 4,
    title: "Drive Thru Turbo Lite",
    category: "Looping",
    description:
      "Turbo Bite is a stylized drive-thru animation centered around a unique vehicle character navigating a lively fast-food scene. Through carefully crafted motion and seamless transitions, this project explores character-driven animation and environment design while maintaining a fun and energetic atmosphere.",
    tools: ["After Effects"],
    type: "gif",
    media: "/video/loop/Alvin-Looping-3.gif",
  },
  {
    id: 5,
    title: "Project 5",
    category: "Looping",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41855-large.mp4",
  },
  {
    id: 6,
    title: "Project 6",
    category: "Branding",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-liquid-iridescent-fluid-background-loop-51475-large.mp4",
  },
  {
    id: 7,
    title: "Project 7",
    category: "Video Explainer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-3d-render-of-abstract-geometric-shapes-48358-large.mp4",
  },
  {
    id: 8,
    title: "Project 8",
    category: "Looping",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-grid-background-41617-large.mp4",
  },
  {
    id: 9,
    title: "Project 9",
    category: "Branding",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41855-large.mp4",
  },
  {
    id: 10,
    title: "Project 10",
    category: "Looping",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur placeat rem, quasi maxime hic impedit vitae nam officia in reprehenderit, nobis fugiat ducimus ipsam neque ipsum totam eligendi id delectus!",
    tools: ["After Effects"],
    type: "video",
    media:
      "https://assets.mixkit.co/videos/preview/mixkit-liquid-iridescent-fluid-background-loop-51475-large.mp4",
  },
];

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // Header animation on mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-header", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Project items animation on filter change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-item", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
      });
    }, listRef);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <>
      {/* Header */}
      <section className="pt-24 md:pt-28 pb-8 px-5 md:px-10" ref={headerRef}>
        <small className="text-primary tracking-widest text-sm mb-4 block proj-header">
          Portfolio — {projectsData.length} Projects
        </small>
        <h1 className="title text-secondary text-5xl md:text-8xl tracking-tighter proj-header">
          Selected Work
        </h1>
      </section>

      {/* Main Content Area */}
      <section className="px-5 md:px-10 pb-20" ref={listRef}>
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* Sidebar (Desktop only) */}
          <aside className="hidden md:block w-52 shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              <div>
                <h2 className="title text-secondary/40 text-xs tracking-widest uppercase mb-4 font-semibold">
                  Categories
                </h2>
                <ul className="flex flex-col gap-4 font-title text-xl text-secondary">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveFilter(cat)}
                        className={`cursor-pointer text-left transition-all duration-250 relative py-0.5
                            ${
                              activeFilter === cat
                                ? "text-secondary font-bold"
                                : "text-secondary/50 hover:text-secondary/80"
                            }`}
                      >
                        {cat}
                        {activeFilter === cat && (
                          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-secondary" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reset Filter Button */}
              {activeFilter !== "All" && (
                <button
                  onClick={() => setActiveFilter("All")}
                  className="self-start text-xs uppercase tracking-widest text-secondary hover:text-secondary/75 font-semibold underline underline-offset-4 cursor-pointer transition-all duration-200"
                >
                  Reset Filter
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Bar */}
          <div className="md:hidden w-full flex flex-wrap items-center gap-3 pb-6 border-b border-secondary/10 mb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all duration-200 shrink-0 cursor-pointer
                    ${
                      activeFilter === cat
                        ? "bg-secondary text-white font-semibold shadow-sm"
                        : "bg-secondary/5 text-secondary/60 hover:bg-secondary/10"
                    }`}
              >
                {cat}
              </button>
            ))}
            {activeFilter !== "All" && (
              <button
                onClick={() => setActiveFilter("All")}
                className="px-3 py-2 text-xs uppercase tracking-wider text-secondary underline underline-offset-4 cursor-pointer font-bold transition-colors"
              >
                Reset
              </button>
            )}
          </div>

          {/* Project Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  className="group flex flex-col cursor-pointer proj-item"
                >
                  {/* Thumbnail / Video Container */}
                  <div className="w-full aspect-square overflow-hidden bg-secondary/5 relative rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.015)] flex flex-col items-center justify-center border border-secondary/5">
                    {hoveredProjectId === project.id ? (
                      project.type === "gif" ? (
                        <img
                          src={project.media}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={project.media}
                          className="w-full h-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      )
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-3 transition-all duration-500 group-hover:scale-105">
                        <Video className="w-8 h-8 text-secondary/35 group-hover:text-secondary/60 transition-colors duration-300" />
                        <span className="text-[9px] tracking-widest uppercase text-secondary/25 group-hover:text-secondary/45 transition-colors duration-300 font-semibold">
                          Hover to Preview
                        </span>
                      </div>
                    )}
                    {/* Dark subtle overlay on hover */}
                    <div className="absolute inset-0 bg-secondary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
                  </div>

                  {/* Typography */}
                  <div className="text-center mt-5">
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-secondary font-text group-hover:text-secondary/75 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-primary/75 mt-1.5 font-title italic">
                      {project.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 text-secondary/40 font-title text-xl">
                No projects found.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal Detail Proyek */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-secondary/60 backdrop-blur-xs p-4 cursor-default animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-tertiary w-full max-w-3xl rounded-lg overflow-hidden shadow-2xl relative border border-secondary/15 flex flex-col md:flex-row max-h-[90vh] md:max-h-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all cursor-pointer z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Preview on Left/Top */}
            <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-black flex items-center justify-center shrink-0">
              {selectedProject.type === "gif" ? (
                <img
                  src={selectedProject.media}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  src={selectedProject.media}
                  className="w-full h-full object-contain"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              )}
            </div>

            {/* Info on Right/Bottom */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 overflow-y-auto">
              <div>
                <small className="text-xs uppercase tracking-widest text-primary/60 font-semibold block mb-1">
                  {selectedProject.category}
                </small>
                <h2 className="title text-3xl text-secondary font-bold mb-4">
                  {selectedProject.title}
                </h2>

                <div className="mb-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold mb-2">
                    Description
                  </h4>
                  <p className="text-sm text-secondary/80 leading-relaxed font-text">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div>
                <div className="border-t border-secondary/10 pt-4 flex justify-between items-center text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-secondary/40 font-bold block mb-0.5">
                      Tools Used
                    </span>
                    <span className="text-secondary/70 font-semibold">
                      {selectedProject.tools.join(", ")}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90 transition-colors cursor-pointer text-xs uppercase tracking-wider font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-secondary px-5 md:px-10 py-14 flex flex-col md:flex-row justify-between items-start md:items-end text-tertiary/85 gap-8">
        <div>
          <small className="tracking-widest text-tertiary/40 text-xs uppercase block mb-3">
            Get In Touch
          </small>
          <a
            href="mailto:alvinferdinand723@gmail.com"
            className="text-xl md:text-2xl text-white hover:text-tertiary/60 transition-colors duration-200"
          >
            alvinferdinand723@gmail.com
          </a>
        </div>
        <p className="text-xs text-tertiary/30 tracking-wider">
          © {new Date().getFullYear()} alvinferdinand
        </p>
      </footer>
    </>
  );
}

export default Project;
