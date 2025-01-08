import propTypes from "prop-types";
import { useLocation } from "react-router-dom";

const Menu = ({ className = "menu", id = "menu" }) => {
  const location = useLocation();

  return (
    <div className={`${className}`} id={`${id}`}>
      <nav className={`${className}__list`} id={`${id}__list`}>
        <a
          className={`${className}__list__item ${
            location.hash === "#athena" ? "active" : ""
          }`}
          href="#athena"
        >
          athena
        </a>
        <a
          className={`${className}__list__item ${
            location.hash === "#yuki" ? "active" : ""
          }`}
          href="#yuki"
        >
          cafe yuki
        </a>
        <a
          className={`${className}__list__item ${
            location.hash === "#grcries" ? "active" : ""
          }`}
          href="#grcries"
        >
          grcries
        </a>
        <a
          className={`${className}__list__item ${
            location.hash === "#recipe" ? "active" : ""
          }`}
          href="#recipe"
        >
          recipebuddy
        </a>
        <a
          className={`${className}__list__item ${
            location.hash === "#miscellaneous" ? "active" : ""
          }`}
          href="#miscellaneous"
        >
          miscellaneous
        </a>
      </nav>
    </div>
  );
};

export default Menu;

Menu.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
