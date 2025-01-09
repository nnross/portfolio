import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = ({ className = "header", id = "header" }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={className} id={id}>
      <img
        className={`${className}__background`}
        id={`${id}__background`}
        src="/header.svg"
        alt=""
      />
      <div className={`${className}__menu`} id={`${id}__menu`}>
        <Link
          className={`${className}__menu__about`}
          id={`${id}__menu__about`}
          to="/about"
        >
          <button
            className={`${className}__menu__button ${
              isActive("/about") ? "active" : ""
            }`}
            id={`${id}__menu__button`}
            type="button"
          >
            about me
          </button>
        </Link>
        <Link
          className={`${className}__menu__projects`}
          id={`${id}__menu__projects`}
          to="/projects#athena"
        >
          <button
            className={`${className}__menu__button ${
              isActive("/projects") ? "active" : ""
            }`}
            id={`${id}__menu__button`}
            type="button"
          >
            projects
          </button>
        </Link>
        <Link
          className={`${className}__menu__disciplines`}
          id={`${id}__menu__disciplines`}
          to="/disciplines"
        >
          <button
            className={`${className}__menu__button ${
              isActive("/disciplines") ? "active" : ""
            }`}
            id={`${id}__menu__button`}
            type="button"
          >
            disciplines
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
