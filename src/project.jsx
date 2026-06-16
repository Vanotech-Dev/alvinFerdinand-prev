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
    title: "FinFlow Dashboard",
    category: "SaaS Explainers",
    description:
      "Explainer video for a fintech SaaS dashboard, visualizing complex analytics into clear and engaging motion sequences.",
    tools: ["After Effects", "Lottie"],
    image: null,
    icon: <Box className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "Pulse Mobile App",
    category: "Looping Animation",
    description:
      "Micro-interaction showcase for a health tracking app, featuring fluid page transitions and haptic-driven animations.",
    tools: ["Principle", "Lottie"],
    image: null,
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "CloudSync Onboarding",
    category: "SaaS Explainers",
    description:
      "Animated onboarding flow for a cloud storage platform, simplifying technical concepts with clean motion graphics.",
    tools: ["After Effects", "Illustrator"],
    image: null,
    icon: <Tv className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Zenith Brand Film",
    category: "Branding",
    description:
      "Brand identity film for Zenith Studio, blending kinetic typography with premium color grading and sound design.",
    tools: ["Premiere Pro", "After Effects", "Audition"],
    image: null,
    icon: <Clapperboard className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "TaskHive Walkthrough",
    category: "SaaS Explainers",
    description:
      "Product walkthrough video for a project management SaaS tool, demonstrating key features through fluid UI animations.",
    tools: ["After Effects"],
    image: null,
    icon: <LayoutGrid className="w-8 h-8" />,
  },
  {
    id: 8,
    title: "Velo App Transitions",
    category: "Looping Animation",
    description:
      "Page transition system for a ride-sharing app, creating seamless flow between map view, ride details, and payment.",
    tools: ["After Effects"],
    image: null,
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    id: 9,
    title: "NovaPay Explainer",
    category: "SaaS Explainers",
    description:
      "60-second explainer for a digital payment platform, combining icon animation and data-driven motion storytelling.",
    tools: ["After Effects", "Illustrator", "Lottie"],
    image: null,
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 10,
    title: "Aura Design System",
    category: "Looping Animation",
    description:
      "Motion specification for a large-scale design system, defining easing curves, timing, and component animation standards.",
    tools: ["After Effects"],
    image: null,
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    id: 12,
    title: "Metric Pro Promo",
    category: "SaaS Explainers",
    description:
      "Promotional video for an analytics SaaS tool, using chart animations and data storytelling to demonstrate ROI value.",
    tools: ["After Effects"],
    image: null,
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    id: 13,
    title: "Bloom Brand Identity",
    category: "Branding",
    description:
      "Full brand motion identity package for a wellness startup, including logo reveal, color palette motion, and type system.",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    image: null,
    icon: <Palette className="w-8 h-8" />,
  },
  {
    id: 14,
    title: "FlowState Navigation",
    category: "Looping Animation",
    description:
      "Tab bar and navigation motion system for a meditation app, using spring physics and natural easing for calm UX feel.",
    tools: ["After Effects"],
    image: null,
    icon: <Play className="w-8 h-8" />,
  },
  {
    id: 15,
    title: "DataVault Security Film",
    category: "SaaS Explainers",
    description:
      "Cybersecurity SaaS explainer video illustrating encryption flows, data pipelines, and threat detection with sleek motion.",
    tools: ["After Effects", "Cinema 4D"],
    image: null,
    icon: <Globe className="w-8 h-8" />,
  },
  {
    id: 17,
    title: "Kopi Nusantara Ad",
    category: "Branding",
    description:
      "Social media advertisement for an Indonesian coffee brand, blending cultural motifs with modern kinetic typography.",
    tools: ["After Effects", "Premiere Pro", "Illustrator"],
    image: null,
    icon: <Megaphone className="w-8 h-8" />,
  },
  {
    id: 18,
    title: "PixelForge UI Kit",
    category: "Looping Animation",
    description:
      "Animated UI component library showcase, demonstrating button states, modal reveals, and loading skeleton transitions.",
    tools: ["After Effects"],
    image: null,
    icon: <Component className="w-8 h-8" />,
  },
  {
    id: 20,
    title: "SaaSGrid Launch Film",
    category: "SaaS Explainers",
    description:
      "Product launch film for a B2B SaaS platform, combining live UI recording with animated callouts and transitions.",
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
      <section className="pt-24 md:pt-28 pb-10 md:pb-16 px-5 md:px-10" ref={headerRef}>
        <small className="text-primary tracking-widest text-sm mb-4 block proj-header">
          Portfolio — {projectsData.length} Projects
        </small>
        <h1 className="title text-secondary text-4xl md:text-8xl tracking-tighter proj-header">
          Selected Work
        </h1>
      </section>

      {/* Filter */}
      <section className="px-5 md:px-10 pb-8 md:pb-10 border-b border-secondary/10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm tracking-wider transition-colors duration-200 cursor-pointer
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
      <section className="px-5 md:px-10 py-6 md:py-10" ref={listRef}>
        <div className="flex flex-col">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border-b border-secondary/10 py-6 md:py-8 flex flex-col md:flex-row gap-4 md:gap-10 cursor-pointer hover:bg-secondary/2 transition-colors duration-200 md:px-2 proj-item"
            >
              {/* Thumbnail */}
              <div className="w-full md:w-64 h-36 md:h-44 shrink-0 overflow-hidden bg-secondary/3">
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
      <footer className="bg-secondary px-5 md:px-10 py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-end text-tertiary/85 gap-6 md:gap-8">
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
