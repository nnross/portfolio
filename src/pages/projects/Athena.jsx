import propTypes from "prop-types";

const Athena = ({ className = "athena", id = "athena" }) => (
  <section className={className} id={id}>
    <h1 className={`${className}__title`}>athena</h1>
    <h2 className={`${className}__desc`}>brief description & problem</h2>
    <p className={`${className}__desct`}>
      Athena is a personal project that I’m working on to solve the problem of
      boring and unappealing tasks filling everyone’s lives. As a solution I
      came up with a gamified task manager that would heavily rely on two things
      me and many of my friends like: gacha and cute characters. Combine that
      with some social media aspects and you also have accountability. The main
      target audience of Athena is students who enjoy gacha games and cute
      characters.
    </p>
    <img
      className={`${className}__frontimg`}
      src="../src/assets/athena_front.png"
      alt=""
    />
    <h2 className={`${className}__research`}>research & insights</h2>
    <p className={`${className}__researcht`}>
      The research for this project comes from my studies, where I learned how
      to effective gamification can be. Also from personal and friends’ use of
      existing productivity boosting apps. I noticed that they lack something to
      make the use consistent enough.
    </p>
    <h2 className={`${className}__process`}>process & approach</h2>
    <p className={`${className}__processt`}>
      I started with low-fidelity sketches for the design and from there moved
      to Figma. I gathered some feedback from friends for the design and made
      changes based on those.
    </p>
    <h2 className={`${className}__design`}>solution & design</h2>
    <p className={`${className}__colour`}>colour scheme</p>
    <img
      className={`${className}__paletteimg`}
      src="../src/assets/athena_palette.svg"
      alt=""
    />
    <p className={`${className}__typography`}>typography</p>
    <div className={`${className}__fonts`}>
      <img
        className={`${className}__fonts__titleimg`}
        src="../src/assets/athena_title.svg"
        alt=""
      />
      <img
        className={`${className}__fonts__bodyimg`}
        src="../src/assets/athena_body.svg"
        alt=""
      />
    </div>
    <p className={`${className}__sketch`}>wireframes</p>
    <div className={`${className}__sketches1`}>
      <img
        className={`${className}__sketches1__sketch1`}
        src="../src/assets/sketch_home.png"
        alt=""
      />
      <img
        className={`${className}__sketches1__sketch2`}
        src="../src/assets/sketch_feed.png"
        alt=""
      />
    </div>
    <div className={`${className}__sketches2`}>
      <img
        className={`${className}__sketches2__sketch3`}
        src="../src/assets/sketch_task.png"
        alt=""
      />
      <img
        className={`${className}__sketches2__sketch4`}
        src="../src/assets/sketch_gacha.png"
        alt=""
      />
    </div>
    <p className={`${className}__illustration`}>illustrations</p>
    <img
      className={`${className}__background`}
      src="../src/assets/athena_background.png"
      alt=""
    />
    <div className={`${className}__characters`}>
      <img
        className={`${className}__characters__1`}
        src="../src/assets/character_1.png"
        alt=""
      />
      <img
        className={`${className}__characters__2`}
        src="../src/assets/character_2.png"
        alt=""
      />
      <img
        className={`${className}__characters__3`}
        src="../src/assets/character_3.png"
        alt=""
      />
    </div>
    <p className={`${className}__prototype`}>prototype</p>
    <img
      className={`${className}__homeimg`}
      src="../src/assets/athena_home.png"
      alt=""
    />
    <img
      className={`${className}__taskimg`}
      src="../src/assets/athena_task.png"
      alt=""
    />
    <img
      className={`${className}__feedimg`}
      src="../src/assets/athena_feed.png"
      alt=""
    />
    <img
      className={`${className}__gachaimg`}
      src="../src/assets/athena_gacha.png"
      alt=""
    />
    <img
      className={`${className}__settingsimg`}
      src="../src/assets/athena_settings.png"
      alt=""
    />
    <h2 className={`${className}__tools`}>tools & techniques</h2>
    <p className={`${className}__toolst`}>
      Figma
      <br />
      javaScript
      <br />
      HTML & CSS
      <br />
      React
      <br />
      MongoDB
      <br />
      Procreate - illustration
    </p>
    <h2 className={`${className}__challenges`}>challenges</h2>
    <p className={`${className}__challengest`}>
      First I wanted to include a battle mechanism to the project, but that
      turned out to be a bit too difficult for my skill level at the moment. I
      decided to rely on power comparisons and automated posts instead, leaving
      the battle to be possibly implemented later.
    </p>
    <h2 className={`${className}__improve`}>in progress</h2>
    <p className={`${className}__improvet`}>
      As the project is still unfinished, it has some areas that need more or
      less work. The tablet and mobile views are till only on a wireframe level
      and lack actual prototypes. When the project is finished I also hope to do
      some usability testing.
    </p>
    <h2 className={`${className}__reflection`}>reflection & learning</h2>
    <p className={`${className}__reflectiont`}>
      I learned to use Figma more and explored low-fidelity to high-fidelity
      prototyping. I got to try a different style on the design than I’d
      typically gravitate towards, going out of my comfort zone. I also learned
      to approach a project with the mindset of solving an existing problem.
    </p>
  </section>
);

export default Athena;

Athena.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
