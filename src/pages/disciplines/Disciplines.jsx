import propTypes from 'prop-types';

const Disciplines = ({ className = 'disciplines', id = 'disciplines' }) => (
  <div className={className} id={id}>

  </div>
);

export default Disciplines;

Disciplines.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};