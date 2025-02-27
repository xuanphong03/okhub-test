import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

export default function Header() {
  const [showHeader, setShowHeader] = useState(() => window.scrollY <= 0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        console.log("kéo xuống");
        setShowHeader(false);
      } else {
        console.log("kéo lên");
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`font-quicksand fixed top-0 right-0 left-0 z-50 bg-white transition-transform duration-500 ${showHeader ? "translate-y-0 border-b border-solid border-gray-300" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-start justify-between py-3 pr-8 pl-24">
        <Link to="/" className="shrink-0">
          <img alt="logo" src={Logo} className="max-w-full object-center" />
        </Link>
        <div className="flex items-center gap-2">
          <button className="flex h-[50px] shrink-0 cursor-pointer items-center justify-center gap-1 rounded-full border border-white/30 bg-[var(--bg-toggle-btn)] px-1.5 py-1 text-sm font-bold text-white">
            <div className="flex size-10 items-center justify-center rounded-full bg-[var(--primary-color)] leading-tight">
              VIE
            </div>
            <div className="flex size-10 items-center justify-center rounded-full bg-transparent leading-tight">
              ENG
            </div>
          </button>
          <button className="inline-flex h-[50px] cursor-pointer flex-col items-start justify-start gap-2.5 overflow-hidden rounded-full border border-white/30 bg-[var(--bg-toggle-btn)] px-6 py-3.5">
            <div className="inline-flex items-center justify-start gap-2">
              <div className="leading-snug font-bold text-white">MENU</div>
              <div className="inline-flex flex-col items-start justify-start gap-1">
                <div className="h-[0px] w-3.5 border border-white"></div>
                <div className="h-[0px] w-3.5 border border-white"></div>
                <div className="h-[0px] w-3.5 border border-white"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
