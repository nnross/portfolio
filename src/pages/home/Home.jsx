import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = ({ className = 'home', id = 'home' }) => (
  <div className={className} id={id}>
    <Link className={`${className}__link`} id={`${id}__link`} to="/about">
      <img className={`${className}__title`} id={`${id}__title`} src="../src/assets/frontPage.svg" alt="UI/UX design and frontend development portfolio, Nelli Rossi, 2024-2025" />
    </Link>
  </div>
);

export default Home;

Home.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
