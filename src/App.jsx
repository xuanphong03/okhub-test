import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import HomePage from "./pages/Home/HomePage";
import { createContext, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export default function App() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isPositionTop, setIsPositionTop] = useState(false);
  const lastPositionY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPositionY = window.scrollY;
      if (currentPositionY > lastPositionY.current) {
        setScrollingDown(false);
        setIsPositionTop(false);
      } else {
        setScrollingDown(true);
        if (currentPositionY <= 0) {
          setIsPositionTop(true);
        }
      }

      lastPositionY.current = currentPositionY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppContext.Provider value={{ scrollingDown, isPositionTop }}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
