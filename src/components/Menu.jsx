import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Menu = ({ className = 'menu', id = 'menu', type }) => {
    const location = useLocation();

    const isActive = (path) => location.hash === path;

    return (
      <div className={`${className}`} id={`${id}`}>
        {type === 'projects' ? 
        (<nav className={`${className}__list`} id={`${id}__list`}>
            <a className={`${className}__list__item ${isActive('#athena') ? 'active' : ''}`} href="#athena">athena</a>
            <a className={`${className}__list__item ${isActive('#yuki') ? 'active' : ''}`} href="#yuki">cafe yuki</a>
            <a className={`${className}__list__item ${isActive('#grcries') ? 'active' : ''}`} href="#grcries">grcries</a>
            <a className={`${className}__list__item ${isActive('#recipe') ? 'active' : ''}`} href="#recipe">recipebuddy</a>
            <a className={`${className}__list__item ${isActive('#miscellaneous') ? 'active' : ''}`} href="#miscellaneous">miscellaneous</a>
        </nav>)
        :
        (<nav className={`${className}__list`} id={`${id}__list`}>
            <a className={`${className}__list__item ${isActive('#athena') ? 'active' : ''}`} href="#athena">test</a>
            <a className={`${className}__list__item ${isActive('#yuki') ? 'active' : ''}`} href="#yuki">cafe yuki</a>
            <a className={`${className}__list__item ${isActive('#grcries') ? 'active' : ''}`} href="#grcries">grcries</a>
            <a className={`${className}__list__item ${isActive('#recipe') ? 'active' : ''}`} href="#recipe">recipebuddy</a>
            <a className={`${className}__list__item ${isActive('#illustration') ? 'active' : ''}`} href="#illustration">illustrations</a>
        </nav>)
        }
      </div>
    );
  };
  
  export default Menu;

  Menu.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
    type: propTypes.string,
};