import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "/src/components/Header";

export default function App() {
  const location = useLocation();
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname]);

    return children;
  };
  return (
    <div>
      <Wrapper>
        {location.pathname !== "/" && <Header />}
        <Outlet />
      </Wrapper>
    </div>
  );
}
