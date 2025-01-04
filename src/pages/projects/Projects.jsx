import propTypes from 'prop-types';
import Menu from '../../components/Menu';
import Athena from './Athena';
import Yuki from './Yuki';
import Grcries from './Grcries';
import Recipe from './Recipe';
import Illustration from './Illustration';

const Projects = ({ className = 'projects', id = 'projects' }) => (
  <div className={className} id={id}>
    <div className={`${className}__menu`} id={`${className}__menu`}>
      <Menu type='projects'/>
    </div>
    <div className={`${className}__list`} id={`${className}__list`}>
      <Athena />
      <Yuki />
      <Grcries />
      <Recipe />
      <Illustration />
    </div>
  </div>
);

export default Projects;

Projects.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};