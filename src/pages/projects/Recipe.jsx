import propTypes from 'prop-types';

const Recipe = ({ className = 'recipe', id = 'recipe' }) => (
    <section className={className} id={id}>
      <h1 className={`${className}__title`}>recipebuddy</h1>
      <h2 className={`${className}__desc`}>brief description</h2>
      <p className={`${className}__desct`}>
      RecipeBuddy is a project I did with another student after studying full stack development. I focused on the frontend while my partner’s focus was more on the backend. These aligned naturally with our interests. The main idea was to create a recipe website where you could have an account, save recipes to lists and a calendar, and see statistics.        </p>
      <img className={`${className}__frontimg`} src="../src/assets/recipe_home.png" alt=""/>
      <h2 className={`${className}__process`}>process & approach</h2>
      <p className={`${className}__processt`}>
      We wanted to test scrum in practice while doing this project, so that’s how we organised everything. We also used TDD, which was a new approach for us. It was our very first time using Figma to design a website and we created the prototype there.
      </p>
      <h2 className={`${className}__design`}>solution & design</h2>
      <p className={`${className}__colour`}>colour scheme</p>
      <img className={`${className}__paletteimg`} src="../src/assets/recipe_palette.svg" alt=""/>
      <p className={`${className}__typography`}>typography</p>
      <div className={`${className}__fonts`}>
        <img className={`${className}__fonts__titleimg`} src="../src/assets/recipe_logo.svg" alt=""/>
        <img className={`${className}__fonts__homeimg`} src="../src/assets/recipe_homefont.svg" alt=""/>
        <img className={`${className}__fonts__bodyimg`} src="../src/assets/recipe_font.svg" alt=""/>
      </div>
      <p className={`${className}__prototype`}>prototype</p>
      <img className={`${className}__homeimg`} src="../src/assets/recipe_home.png" alt=""/>
      <img className={`${className}__searchimg`} src="../src/assets/recipe_search.png" alt=""/>
      <img className={`${className}__recipeimg`} src="../src/assets/recipe_open.png" alt=""/>
      <img className={`${className}__profileimg`} src="../src/assets/recipe_profile.png" alt=""/>
      <img className={`${className}__homeimgmob`} src="../src/assets/recipe_home_mobile.png" alt=""/>
      <img className={`${className}__searchimgmob`} src="../src/assets/recipe_search_mobile.png" alt=""/>
      <img className={`${className}__recipeimgmob`} src="../src/assets/recipe_open_mobile.png" alt=""/>
      <img className={`${className}__profileimgmob`} src="../src/assets/recipe_profile_mobile.png" alt=""/>
      <h2 className={`${className}__tools`}>tools & techniques</h2>
      <p className={`${className}__toolst`}>
        Figma<br />
        javaScript<br />
        HTML & CSS<br />
        Java<br />
        SpringBoot<br />
        MySQL<br />
        Scrum<br />
        TDD<br />
        Git<br />
        AWS<br />
      </p>
      <h2 className={`${className}__challenges`}>challenges</h2>
      <p className={`${className}__challengest`}>
      This project offered many challenges, as it was my first time using Java and SpringBoot for the backend as well as AWS. So the learning took a lot of time, but it was very rewarding to be learning while doing.        </p>
      <h2 className={`${className}__reflection`}>reflection & learning</h2>
      <p className={`${className}__reflectiont`}>
      As I’ve mentioned, this project was a big learning opportunity for me in many aspects. If I were to start over again, I would spend even more time designing. Some areas got very difficult to deal with when the design wasn’t as polished as it should’ve been, resulting in us having to redo some parts.        </p>
      </section>
);

export default Recipe;

Recipe.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};