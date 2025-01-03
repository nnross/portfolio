import propTypes from 'prop-types';
import Menu from '../../components/Menu';

const Projects = ({ className = 'projects', id = 'projects' }) => (
  <div className={className} id={id}>
    <div className={`${className}__menu`} id={`${className}__menu`}>
      <Menu />
    </div>
    <div className={`${className}__list`} id={`${className}__list`}>
      <section id="athena">
      <h1>athena</h1>
      </section>
      <section id="yuki">
          <h1>cafe yuki</h1>
      </section>
      <section id="grcries">
          <h1>grcries</h1>
      </section>
      <section id="recipe">
          <h1>recipebuddy</h1>
      </section>
      <section id="illustration">
          <h1>illustrations</h1>
      </section>
    </div>
  </div>
);

export default Projects;

Projects.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};