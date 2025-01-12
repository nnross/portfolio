import { useState } from "react";
import propTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

const Header = ({ className = "header", id = "header" }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={className} id={id}>
      <img
        className={`${className}__background`}
        id={`${id}__background`}
        src="/header.svg"
        alt=""
      />
      <button
        className={`${className}__hamburger ${menuOpen ? "open" : ""}`}
        id={`${id}__hamburger`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {menuOpen ? (
          <img
            className={`${className}__hamburger__close`}
            id={`${id}__hamburger__close`}
            src="/close.svg"
            alt=""
          />
        ) : (
          <img
            className={`${className}__hamburger__img`}
            id={`${id}__hamburger__img`}
            src="/hamburger.svg"
            alt=""
          />
        )}
      </button>
      <div
        className={`${className}__menu ${menuOpen ? "open" : ""}`}
        id={`${id}__menu`}
      >
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
          to="/projects"
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
