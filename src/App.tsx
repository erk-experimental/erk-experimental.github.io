import { Route, Routes, useLocation } from "react-router-dom";
import SpeedDialNavbar from "./nav/SpeedDialNavbar";
import HomePage from "./pages/home/HomePage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();

  // Ensure we start at the top of the page when navigating pages.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Browser also preserves scroll position when refreshing, which messes up
  // the animations. Disable it here.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="w-full h-full">
      <SpeedDialNavbar />
      <p className="fixed bottom-4 right-4 z-10 lg:text-2xl">
        rafael.m.avalos@icloud.com
      </p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
