import propTypes from "prop-types";
import { Link } from "react-router-dom";
import ImageWithLoading from "../../components/ImageWithLoading";

const Home = ({ className = "home", id = "home" }) => (
  <div className={className} id={id}>
    <Link className={`${className}__link`} id={`${id}__link`} to="/about">
      <ImageWithLoading
        className={`${className}__title`}
        id={`${id}__title`}
        src="/frontPage.svg"
        alt="UI/UX design and frontend development portfolio, Nelli Rossi, 2024-2025"
      />
    </Link>
    <Link className={`${className}__link`} id={`${id}__link`} to="/about">
      <p className={`${className}__text`}>click anywhere to continue</p>
    </Link>
  </div>
);

export default Home;

Home.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
