import propTypes from 'prop-types';

const Menu = ({ className = 'menu', id = 'menu' }) => {
    return (
      <div className={`${className}`} id={`${id}`}>
        <nav>
            <ul className={`${className}__list`} id={`${id}__list`}>
            <li><a className={`${className}__list__item`} href="#athena">athena</a></li>
            <li><a className={`${className}__list__item`} href="#yuki">cafe yuki</a></li>
            <li><a className={`${className}__list__item`} href="#grcries">grcries</a></li>
            <li><a className={`${className}__list__item`} href="#recipe">recipebuddies</a></li>
            <li><a className={`${className}__list__item`} href="#illustration">illustrations</a></li>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Menu;

  Menu.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};