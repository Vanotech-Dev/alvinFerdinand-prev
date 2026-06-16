import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Monitor,
  Play,
  Tv,
  PenTool,
  Box,
  Palette,
  Smartphone,
  Globe,
  Component,
  Clapperboard,
  Camera,
  Wand2,
  LayoutGrid,
  Megaphone,
  Zap,
} from "lucide-react";

const categories = ["All", "SaaS Explainers", "Looping Animation", "Branding"];

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Box className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Project 2",
    category: "Looping Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effect"],
    image: null,
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Project 3",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Tv className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Project 4",
    category: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Clapperboard className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Project 5",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <LayoutGrid className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Project 6",
    category: "Looping Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 7,
    title: "Project 7",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 8,
    title: "Project 8",
    category: "Looping Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    id: 9,
    title: "Project 9",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    id: 10,
    title: "Project 10",
    category: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 11,
    title: "Project 11",
    category: "Looping Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Play className="w-8 h-8" />,
  },
  {
    id: 12,
    title: "Project 12",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 13,
    title: "Project 13",
    category: "Branding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Megaphone className="w-8 h-8" />,
  },
  {
    id: 14,
    title: "Project 14",
    category: "Looping Animation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Component className="w-8 h-8" />,
  },
  {
    id: 15,
    title: "Project 15",
    category: "SaaS Explainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    tools: ["After Effects"],
    image: null,
    icon: <Wand2 className="w-8 h-8" />,
  },
];

gsap.registerPlugin(ScrollTrigger);

function Project() {
  const [activeFilter, setActiveFilter] = useState("All");
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
      <section className="pt-28 pb-16 px-10" ref={headerRef}>
        <small className="text-primary tracking-widest text-sm mb-4 block proj-header">
          Portfolio — {projectsData.length} Projects
        </small>
        <h1 className="title text-secondary text-6xl md:text-8xl tracking-tighter proj-header">
          Selected Work
        </h1>
      </section>

      {/* Filter */}
      <section className="px-10 pb-10 border-b border-secondary/10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm tracking-wider transition-colors duration-200 cursor-pointer
                ${
                  activeFilter === cat
                    ? "text-secondary font-semibold border-b-2 border-secondary"
                    : "text-secondary/40 hover:text-secondary/70"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project List */}
      <section className="px-10 py-10" ref={listRef}>
        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border-b border-secondary/10 py-8 flex flex-col md:flex-row gap-6 md:gap-10 cursor-pointer hover:bg-secondary/2 transition-colors duration-200 md:px-2 proj-item"
            >
              {/* Thumbnail */}
              <div className="w-full md:w-64 h-44 shrink-0 overflow-hidden bg-secondary/3">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-secondary/15">
                    {project.icon}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs tracking-widest text-secondary/30 block mb-2">
                        {String(project.id).padStart(2, "0")}
                      </span>
                      <h3 className="title text-2xl text-secondary mb-2">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-secondary/20 group-hover:text-secondary transition-colors duration-200 mt-1" />
                  </div>
                  <p className="text-primary/70 text-sm leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-widest text-secondary/30">
                    {project.category}
                  </span>
                  <span className="text-secondary/10">·</span>
                  <div className="flex gap-2">
                    {project.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs text-secondary/40">
                        {tool}
                        {idx < project.tools.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary px-10 py-14 flex flex-col md:flex-row justify-between items-start md:items-end text-tertiary/85 gap-8">
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
