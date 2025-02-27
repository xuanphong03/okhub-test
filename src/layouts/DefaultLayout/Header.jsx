import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showHeader, setShowHeader] = useState(() => window.scrollY <= 0);
  const [onScrollYTop, setOnScrollYTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
        setOnScrollYTop(false);
      } else {
        setShowHeader(true);
        if (currentScrollY <= 0) {
          setOnScrollYTop(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`font-quicksand fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${!onScrollYTop && showHeader ? "bg-white" : ""} ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-start justify-between px-5 py-3">
        <Link
          to="/"
          className={`shrink-0 origin-top-left transition-all duration-500 ${showHeader ? "scale-100" : "scale-0"}`}
        >
          <img
            alt="logo"
            src="https://amigroup.com.vn/wp-content/uploads/2024/07/logo-blue.svg"
            className={`max-w-full object-center ${onScrollYTop ? "h-8 sm:h-14 md:h-16 2xl:h-32" : "h-8 sm:h-14 md:h-16 2xl:h-20"}`}
          />
        </Link>
        <div className="flex items-center gap-2">
          <button className="flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-[var(--bg-toggle-btn)] p-1 text-[10px] font-bold text-white sm:gap-1 sm:text-sm">
            <div className="flex size-7 items-center justify-center rounded-full bg-[var(--primary-color)] leading-tight sm:size-10">
              VIE
            </div>
            <div className="flex size-7 items-center justify-center rounded-full bg-transparent leading-tight sm:size-10">
              ENG
            </div>
          </button>
          <button className="hidden cursor-pointer flex-col items-start justify-start gap-2.5 overflow-hidden rounded-full border border-white/30 bg-[var(--bg-toggle-btn)] px-6 py-3.5 sm:h-12 lg:inline-flex">
            <div className="inline-flex items-center justify-start gap-2">
              <div className="leading-snug font-bold text-white">MENU</div>
              <div className="inline-flex flex-col items-start justify-start gap-1">
                <div className="h-[0px] w-3.5 border border-white"></div>
                <div className="h-[0px] w-3.5 border border-white"></div>
                <div className="h-[0px] w-3.5 border border-white"></div>
              </div>
            </div>
          </button>
          <button className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-white sm:size-12 lg:hidden">
            <div className="inline-flex flex-col items-start justify-start gap-1">
              <div className="h-[0px] w-4 border border-[var(--primary-color)]"></div>
              <div className="h-[0px] w-4 border border-[var(--primary-color)]"></div>
              <div className="h-[0px] w-4 border border-[var(--primary-color)]"></div>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
