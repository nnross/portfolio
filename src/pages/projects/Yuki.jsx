import propTypes from "prop-types";

const Yuki = ({ className = "yuki", id = "yuki", refe }) => (
  <section className={className} id={id} ref={refe}>
    <h1 className={`${className}__title`}>cafe yuki</h1>
    <h2 className={`${className}__desc`}>brief description & assignment</h2>
    <p className={`${className}__desct`}>
      This project was made for a user experience course. The assignment was to
      make a responsive web page for mobile screens with the intention of making
      the responsive layout manually. More specifically the task was to design a
      web home page of an imaginary cafe and it had to contain a title,
      subtitle, menu, intro text, opening hours, address, images as a link,
      customer reviews, and optional illustrative images.{" "}
    </p>
    <img className={`${className}__screenimg`} src="/yuki_screen.png" alt="" />
    <h2 className={`${className}__process`}>process & approach</h2>
    <p className={`${className}__processt`}>
      First I started with a name and feel for the cafe that would then be
      reflected in the design. I wanted the cafe to be peaceful and
      minimalistic, like a coat of freshly fallen snow. From there came Cafe
      Yuki, ‘yuki’ being the Japanese word for snow. This project I started
      prototyping straight to Figma, since I had a pretty clear idea for the
      design.{" "}
    </p>
    <h2 className={`${className}__design`}>solution & design</h2>
    <p className={`${className}__colour`}>colour scheme</p>
    <img
      className={`${className}__paletteimg`}
      src="/yuki_palette.svg"
      alt=""
    />
    <p className={`${className}__typography`}>typography</p>
    <img className={`${className}__fontimg`} src="/yuki_font.svg" alt="" />
    <p className={`${className}__prototype`}>prototype</p>
    <img className={`${className}__mobileimg`} src="/yuki_mobile.png" alt="" />
    <img className={`${className}__menuimg`} src="/yuki_menu.png" alt="" />
    <img className={`${className}__tabletimg`} src="/yuki_tablet.png" alt="" />
    <h2 className={`${className}__tools`}>tools & techniques</h2>
    <p className={`${className}__toolst`}>
      Figma <br />
      Responsive design <br />
      Usability heuristics
    </p>
    <h2 className={`${className}__reflection`}>reflection & learning</h2>
    <p className={`${className}__reflectiont`}>
      The feedback I got for this assignment was positive, saying that it
      adjusts logically to different screens and all in all looks good. By doing
      this project I got to learn more about responsive design and also
      researched some design conventions as well as keeping usability heuristics
      in mind while designing. Personally I’m very fond of this project, as the
      aesthetic is really my style.
    </p>
  </section>
);

export default Yuki;

Yuki.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  refe: propTypes.any,
};
