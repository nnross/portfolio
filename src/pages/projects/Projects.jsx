import propTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import Menu from "../../components/Menu";
import Athena from "./Athena";
import Yuki from "./Yuki";
import Grcries from "./Grcries";
import Recipe from "./Recipe";

const Projects = ({ className = "projects", id = "projects" }) => {
  const navigate = useNavigate();
  const yukiRef = useRef();
  const grcriesRef = useRef();
  const recipeRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const yukiY = yukiRef.current.offsetTop - window.innerHeight / 2;
    const grcriesY = grcriesRef.current.offsetTop - window.innerHeight / 2;
    const recipeY = recipeRef.current.offsetTop - window.innerHeight / 2;
    const hash = window.location.hash;

    if (scrollY < yukiY && hash !== "#athena") {
      navigate("#athena");
    } else if (scrollY < grcriesY && scrollY > yukiY && hash !== "#yuki") {
      navigate("#yuki");
    } else if (scrollY < recipeY && scrollY > grcriesY && hash !== "#grcries") {
      navigate("#grcries");
    } else if (scrollY > recipeY && hash !== "#recipe") {
      navigate("#recipe");
    }
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  return (
    <div className={className} id={id}>
      <div className={`${className}__menu`} id={`${className}__menu`}>
        <Menu />
      </div>
      <div className={`${className}__list`} id={`${className}__list`}>
        <Athena />
        <Yuki refe={yukiRef} />
        <Grcries refer={grcriesRef} />
        <Recipe refer={recipeRef} />
      </div>
    </div>
  );
};

export default Projects;

Projects.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
