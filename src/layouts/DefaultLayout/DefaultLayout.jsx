import { AppContext } from "@/App";
import { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function DefaultLayout() {
  const { scrollingDown } = useContext(AppContext);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="font-quicksand">
        <Outlet />
      </main>
      <button
        onClick={handleScrollToTop}
        className={`fixed right-5 bottom-5 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full border-2 border-solid border-red-500 text-4xl text-red-500 transition-all duration-300 hover:border-transparent hover:bg-red-500 hover:text-white ${!scrollingDown ? "invisible translate-y-full opacity-0" : "translate-y-none visible opacity-100"}`}
      >
        <IoIosArrowUp />
      </button>
    </>
  );
}
