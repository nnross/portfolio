import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "/src/components/Header";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === "")
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return (
    <div>
      <div className="background"></div>
      {location.pathname !== "/" && <Header />}
      <Outlet />
      <Analytics />
    </div>
  );
}
