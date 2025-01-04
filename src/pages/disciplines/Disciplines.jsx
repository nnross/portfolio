import propTypes from 'prop-types';
import Menu from '../../components/Menu';

const Disciplines = ({ className = 'disciplines', id = 'disciplines' }) => (
  <div className={className} id={id}>
    <Menu type='disciplines' />
  </div>
);

export default Disciplines;

Disciplines.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};