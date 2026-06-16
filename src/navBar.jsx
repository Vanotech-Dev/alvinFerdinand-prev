import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { House, X, Lightbulb, FilePenLine, User } from "lucide-react";

function Navbar() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 525);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleSkillsClick = () => {
    const skills = document.getElementById("skills");

    if (skills) {
      skills.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navItem = [
    { to: "/", label: "Home", icons: <House size={15} /> },
    { to: "/#skills", label: "skill", icons: <Lightbulb /> },
    { to: "/project", label: "project", icons: <FilePenLine /> },
    { to: "/contact", label: "contact", icons: <User /> },
  ];

  const currentNav = navItem.find((item) => item.to === location.pathname);
  const pageSelected = currentNav?.label || "Home";
  const iconSelected = currentNav?.icons || null;

  const [waktuSekarang, setWaktuSekarang] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setWaktuSekarang(new Date());
    }, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="container mx-auto px-20">
          <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all flex justify-end ease-in-out duration-300 text-secondary w-[85vw] ${showNavBar ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}`}
          >
            <div className="flex justify-between w-[90vw]">
              <div className="title text-xl border-bold border-b-3 pb-1">
                Jakarta -{" "}
                {waktuSekarang.toLocaleTimeString("id-ID", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="flex justify-between items-center w-85 text-secondary">
                {navItem.map((item) => {
                  return (
                    <Link
                      to={item.to}
                      key={item.to}
                      onClick={() => {
                        if (item.to === "/#skills") {
                          handleSkillsClick();
                        } else {
                          navigate(item.to);
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="absolute transition-all ease-in-out h-screen w-screen">
          <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all ease-in-out duration-300">
            <nav
              className="flex justify-between items-center w-[85vw]  px-5 py-2.5  rounded-full border border-white/25 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`transition-all ease-in-out duration-300 ${isOpen ? "flex gap-1.5 items-center text-tertiary/90 " : "flex gap-1.5 items-center "}`}
              >
                <span
                  className={`rounded-4xl bg-primary/10 p-2 transition-all ease-in-out ${isOpen ? "text-tertiary/90" : " "}`}
                >
                  {iconSelected}
                </span>
                {pageSelected}
              </div>
              <span
                className={`transition-all ease-in-out duration-300  ${
                  isOpen ? "rotate-180 text-tertiary/90" : ""
                }`}
              >
                {isOpen ? (
                  <X />
                ) : (
                  <GiHamburgerMenu className="w-5 h-5 text-secondary" />
                )}
              </span>
            </nav>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-10 bg-white/20 backdrop-blur-sm transition-all ease-in-out duration-300">
              <div className="mx-auto w-screen min-h-full bg-secondary/70 p-4">
                <ul className="mt-20 flex flex-col items-start gap-4 pl-5 text-tertiary/80  title text-[22px]">
                  <li>
                    <Link to="/" onClick={() => setIsOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" onClick={() => setIsOpen(false)}>
                      Project
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;
