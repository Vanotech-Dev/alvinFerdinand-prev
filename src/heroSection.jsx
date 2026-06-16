import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Film,
  Layers,
  ArrowUpRight,
  Repeat,
  BriefcaseBusinessIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    num: "01 / MOTION",
    title: "2D Animation",
    description:
      "Crafting fluid SaaS explainers, dynamic micro-interactions, and high-fidelity product animations that communicate value clearly.",
    icon: <Film className="w-6 h-6" />,
    tags: ["Adobe After Effects"],
  },
  {
    num: "02 / BRAND",
    title: "Brand / Logo Animation",
    description:
      "Designing interface prototypes and interactive design systems with a motion-first perspective, ensuring delightful UX flow.",
    icon: <BriefcaseBusinessIcon className="w-6 h-6" />,
    tags: ["Adobe After Effect"],
  },
  {
    num: "03 / LOOP",
    title: "Looping Animation",
    description:
      "Creating seamless looping motion loops for social media, product showcases, and background visuals.",
    icon: <Repeat className="w-6 h-6" />,
    tags: ["Adobe After Effect"],
  },
  {
    num: "04 / UI & UX",
    title: "UI & UX Animation",
    description:
      "Enhancing user experiences with purposeful micro-interactions and high-end interface transitions.",
    icon: <Layers className="w-6 h-6" />,
    tags: ["Adobe After Effect"],
  },
];

function HeroSection() {
  const dataFooter = {
    name: "alvinferdinand",
    email: "alvinferdinand723@gmail.com",
  };

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: fade in on load
      gsap.fromTo(
        ".hero-anim",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", stagger: 0.15 },
      );

      // About: slide in on scroll
      gsap.fromTo(
        ".about-img",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );

      // Skills: stagger cards
      gsap.fromTo(
        ".skill-left",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );

      // Footer fade
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      <main
        className="min-h-screen flex flex-col justify-end items-start p-5 md:p-10"
        id="main"
      >
        <div className="flex gap-3 md:gap-5 justify-end items-end">
          <div className="bg-secondary w-2 md:w-3 h-20 md:h-45 hero-anim"></div>
          <div>
            <small className="text-primary tracking-widest text-sm md:text-lg mb-3 md:mb-5 pl-3 md:pl-5 hero-anim">
              Hi, I'm a <span className="font-bold">Motion Designer</span>
            </small>
            <h1 className="title text-secondary text-5xl md:text-9xl tracking-tighter hero-anim">
              Alvin Ferdinand
            </h1>
          </div>
        </div>
      </main>
      <section id="about" className="pt-10" ref={aboutRef}>
        {/* image + text */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[70vw] flex about-img">
            <img
              src="image/alvin2.jpeg"
              alt="alvin-02"
              className="h-80 md:h-180 w-full md:w-auto object-cover bg-top aspect-auto md:aspect-4/3"
            />
          </div>
          {/* text */}
          <div className="w-full md:w-[30vw] p-5 md:p-5 border border-secondary/20 flex flex-col justify-between items-start about-text">
            <h2 className="title text-3xl md:text-5xl text-secondary flex-2">
              About Me
            </h2>
            <p className="text-primary text-sm md:text-lg tracking-widest flex-1 mt-4 md:mt-0">
              Hello! I'm Alvin, i'm specializing in SaaS explainer videos and
              UI-driven motion design. I craft clean, modern visuals that
              simplify complex ideas through refined animation, minimal
              aesthetics, and purposeful storytelling—helping digital products
              communicate clearly, effectively, and with a premium feel. Focused
              on clarity, precision, and impact, I design motion that not only
              looks good, but works.
            </p>
            <div className="flex-2 justify-end items-end mt-6 md:mt-10 text-bold">
              <div className="h-full flex items-end">
                <span>Let's Work Together</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="py-20 border-t border-secondary/20 flex flex-col md:flex-row"
        ref={skillsRef}
      >
        {/* Left column */}
        <div className="w-full md:w-[30vw] p-5 md:p-10 border-b md:border-b-0 md:border-r border-secondary/20 flex flex-col justify-between items-start skill-left">
          <div>
            <h2 className="title text-3xl md:text-5xl text-secondary mb-4 md:mb-6">
              Skills & Expertise
            </h2>
            <p className="text-primary text-sm md:text-base leading-relaxed tracking-wider mb-6 md:mb-8">
              Turning complex digital products into captivating visual
              narratives. My expertise spans the entire motion design lifecycle,
              from strategic concepting to high-fidelity output.
            </p>
          </div>
          <a
            href="#footer"
            className="group flex items-center gap-2 text-bold font-semibold hover:text-primary transition-colors duration-300"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Right column */}
        <div className="w-full md:w-[70vw] grid grid-cols-1 md:grid-cols-2">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`p-5 md:p-10 border-b border-secondary/20 hover:bg-secondary/5 transition-all duration-300 flex flex-col justify-between group skill-card
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index >= 2 ? "md:border-b-0" : ""}
              `}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-sm font-semibold tracking-widest text-secondary/40">
                    {skill.num}
                  </span>
                  <span className="p-3 bg-secondary/5 rounded-xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {skill.icon}
                  </span>
                </div>
                <h3 className="title text-2xl text-secondary mb-4">
                  {skill.title}
                </h3>
                <p className="text-primary text-sm tracking-wider leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-secondary/5 rounded-full text-xs font-semibold text-secondary/80 border border-secondary/10 group-hover:border-secondary/20 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="footer" className="pt-20" ref={footerRef}>
        <div className="border-t border-bold/20 bg-secondary px-5 md:px-10 py-10 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center text-tertiary/85 gap-8 md:gap-10">
          <div className="flex flex-col gap-3 md:gap-4 max-w-xl">
            <small className="tracking-widest font-semibold text-tertiary/50 uppercase text-xs">
              Get In Touch
            </small>
            <h2 className="title text-2xl md:text-5xl text-white">
              Let's bring your digital product to life.
            </h2>
            <a
              href={`mailto:${dataFooter.email}`}
              className="text-lg md:text-4xl font-semibold text-white hover:text-tertiary/70 transition-colors duration-300 break-all border-b border-white/20 pb-2 w-fit mt-4"
            >
              {dataFooter.email}
            </a>
          </div>
          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-6 text-sm tracking-widest text-tertiary/60 uppercase">
              <a
                href="#main"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
            </div>
            <p className="text-xs text-tertiary/40 tracking-wider">
              © {new Date().getFullYear()} {dataFooter.name}. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HeroSection;
