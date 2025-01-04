import propTypes from 'prop-types';

const Recipe = ({ className = 'recipe', id = 'recipe' }) => (
    <section className={className} id={id}>
          <h1>recipebuddy</h1>
      </section>
);

export default Recipe;

Recipe.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};