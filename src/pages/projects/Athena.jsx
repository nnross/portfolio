import propTypes from "prop-types";
import ImageWithLoading from "../../components/ImageWithLoading";

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
    <ImageWithLoading
      className={`${className}__frontimg`}
      src="/athena_front.png"
      alt="athena project frontpage"
    />
    <h2 className={`${className}__research`}>research & insights</h2>
    <p className={`${className}__researcht`}>
      The research for this project comes from my studies, where I learned how
      effective gamification can be. Also from personal and friends’ use of
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
    <ImageWithLoading
      className={`${className}__paletteimg`}
      src="/athena_palette.svg"
      alt=""
    />
    <p className={`${className}__typography`}>typography</p>
    <div className={`${className}__fonts`}>
      <ImageWithLoading
        className={`${className}__fonts__titleimg`}
        src="/athena_title.svg"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__fonts__bodyimg`}
        src="/athena_body.svg"
        alt=""
      />
    </div>
    <p className={`${className}__sketch`}>low-fidelity wireframes</p>
    <div className={`${className}__sketches1`}>
      <ImageWithLoading
        className={`${className}__sketches1__sketch1`}
        src="/sketch_home.png"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__sketches1__sketch2`}
        src="/sketch_feed.png"
        alt=""
      />
    </div>
    <div className={`${className}__sketches2`}>
      <ImageWithLoading
        className={`${className}__sketches2__sketch3`}
        src="/sketch_task.png"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__sketches2__sketch4`}
        src="/sketch_gacha.png"
        alt=""
      />
    </div>
    <p className={`${className}__illustration`}>illustrations</p>
    <ImageWithLoading
      className={`${className}__background`}
      src="/athena_background.PNG"
      alt=""
    />
    <div className={`${className}__characters`}>
      <ImageWithLoading
        className={`${className}__characters__1`}
        src="/character_1.PNG"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__characters__2`}
        src="/character_2.PNG"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__characters__3`}
        src="/character_3.PNG"
        alt=""
      />
    </div>
    <p className={`${className}__prototype`}>prototype</p>
    <ImageWithLoading
      className={`${className}__homeimg`}
      src="/athena_home.png"
      alt="athena homepage"
    />
    <ImageWithLoading
      className={`${className}__taskimg`}
      src="/athena_task.png"
      alt="athena taskpage"
    />
    <ImageWithLoading
      className={`${className}__feedimg`}
      src="/athena_feed.png"
      alt="athena feedpage"
    />
    <ImageWithLoading
      className={`${className}__gachaimg`}
      src="/athena_gacha.png"
      alt="athena gachapage"
    />
    <ImageWithLoading
      className={`${className}__settingsimg`}
      src="/athena_settings.png"
      alt="athena settingspage"
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
      less work. The tablet and mobile views are still only on a wireframe level
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
