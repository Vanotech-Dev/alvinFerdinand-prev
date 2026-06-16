import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "Behance", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function Contact() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
      });
      gsap.from(".contact-col", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <section className="min-h-screen flex flex-col justify-between px-5 md:px-10 pt-24 md:pt-28 pb-10">
        <div>
          <small className="text-primary tracking-widest text-sm mb-4 block contact-header">
            Contact
          </small>
          <h1 className="title text-secondary text-4xl md:text-8xl tracking-tighter leading-tight max-w-3xl contact-header">
            Let&rsquo;s work together
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 mt-14 md:mt-20">
          {/* Email */}
          <div className="contact-col">
            <span className="text-xs tracking-widest text-secondary/30 uppercase block mb-3">
              Email
            </span>
            <a
              href="mailto:alvinferdinand723@gmail.com"
              className="group flex items-center gap-2 text-secondary text-base md:text-xl hover:text-primary transition-colors duration-200"
            >
              alvinferdinand723@gmail.com
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Socials */}
          <div className="contact-col">
            <span className="text-xs tracking-widest text-secondary/30 uppercase block mb-3">
              Social
            </span>
            <div className="flex flex-col gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-2 text-secondary text-lg hover:text-primary transition-colors duration-200"
                >
                  {s.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="contact-col">
            <span className="text-xs tracking-widest text-secondary/30 uppercase block mb-3">
              Based in
            </span>
            <p className="text-secondary text-lg">Jakarta, Indonesia</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary px-5 md:px-10 py-10 md:py-14 flex justify-between items-end text-tertiary/85">
        <span className="text-xs text-tertiary/30 tracking-wider">
          © {new Date().getFullYear()} alvinferdinand
        </span>
        <a
          href="/"
          className="text-xs text-tertiary/30 tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          Back to Home
        </a>
      </footer>
    </div>
  );
}

export default Contact;
