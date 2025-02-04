import propTypes from "prop-types";
import ImageWithLoading from "../../components/ImageWithLoading";

const Grcries = ({ className = "grcries", id = "grcries", refer }) => (
  <section className={className} id={id} ref={refer}>
    <h1 className={`${className}__title`}>grcries</h1>
    <h2 className={`${className}__desc`}>brief description & assignment</h2>
    <p className={`${className}__desct`}>
      This project was also made for the user experience course. The assignment
      was to design a simple mobile application for a phone or tablet. The
      process was divided into three parts: a first prototype which we got
      feedback on from peers, then a revised version of the prototype, and
      finally a usability testing plan. The requirements for the app were a very
      specific 16-point list.{" "}
    </p>
    <ImageWithLoading
      className={`${className}__screenimg`}
      src="/grcries_home.png"
      alt="grcries homepage"
    />
    <h2 className={`${className}__process`}>process & approach</h2>
    <p className={`${className}__processt`}>
      I first started to think about what kind of target audience I would want
      to reach and settled on young adults, more broadly the ages 18-30. That
      led me to go for a sleek and modern design that would work based on
      conventions while also answering to the product requirements in a somewhat
      unique way.{" "}
    </p>
    <h2 className={`${className}__design`}>solution & design</h2>
    <p className={`${className}__colour`}>colour scheme</p>
    <ImageWithLoading
      className={`${className}__paletteimg`}
      src="/grcries_palette.svg"
      alt=""
    />
    <p className={`${className}__typography`}>typography</p>
    <div className={`${className}__fonts`}>
      <ImageWithLoading
        className={`${className}__fonts__logoimg`}
        src="/grcries_logo.svg"
        alt=""
      />
      <ImageWithLoading
        className={`${className}__fonts__bodyimg`}
        src="/grcries_font.svg"
        alt=""
      />
    </div>
    <p className={`${className}__prototype`}>prototype</p>
    <ImageWithLoading
      className={`${className}__homeimg`}
      src="/grcries_home.png"
      alt="grcries homepage"
    />
    <ImageWithLoading
      className={`${className}__listimg`}
      src="/grcries_items.png"
      alt="grcries items page"
    />
    <ImageWithLoading
      className={`${className}__newimg`}
      src="/grcries_new.png"
      alt="grcries create new list page"
    />
    <ImageWithLoading
      className={`${className}__activeimg`}
      src="/grcries_active.png"
      alt="grcries active list page"
    />
    <h2 className={`${className}__tools`}>tools & techniques</h2>
    <p className={`${className}__toolst`}>
      Figma <br />
      Usability heuristics <br />
      App review <br />
      Usability testing
    </p>
    <h2 className={`${className}__reflection`}>reflection & learning</h2>
    <p className={`${className}__reflectiont`}>
      This project really helped to demonstrate the fact that others might not
      find things clear that you think are obvious. Having someone look at your
      design and give feedback on it is crucially important for success. I also
      learned to give feedback on my peers’ designs from a more usability
      focused viewpoint. This also offered the chance for me to create my first
      usability testing plan and I even performed it with a friend. I noticed
      some clear points how to even better improve the app to cater to the not
      so tech-savvy.{" "}
    </p>
  </section>
);

export default Grcries;

Grcries.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  refer: propTypes.any,
};
