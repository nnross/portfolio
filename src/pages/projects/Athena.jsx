import propTypes from 'prop-types';

const Athena = ({ className = 'athena', id = 'athena' }) => (
    <section className={className} id={id}>
      <h1 className={`${className}__title`}>athena</h1>
      <h2 className={`${className}__desc`}>brief description & problem</h2>
      <p className={`${className}__desct`}>Athena is a personal project that I started to work on the problem of boring and unappealing tasks filling everyone’s lives. Aa a solution I came up with a gamified task manager that would heavily rely on two things me and many of my friends like: gacha and cute characters. Combine that with some social media aspects and you also have accountability. The main target audience of Athena is students who enjoy gacha games and cute characters.</p>
      <h2 className={`${className}__research`}>research & insights</h2>
      <p className={`${className}__researcht`}>The research for this project comes from my studies, where I learned how to effective gamification can be. Also from personal and friends’ use of existing productivity boosting apps. I noticed that they lack something to make the use consistent enough.</p>
      <h2 className={`${className}__process`}>process & approach</h2>
      <p className={`${className}__processt`}>I started with low-fidelity sketches for the design and from there moved to Figma. I gathered some feedback from friends for the design and made changes based on those.</p>
      <h2 className={`${className}__design`}>solution & design</h2>
      <h2 className={`${className}__colour`}>colour scheme</h2>
      <h2 className={`${className}__typography`}>typography</h2>
      <h2 className={`${className}__sketch`}>sketches</h2>
      <h2 className={`${className}__illustration`}>illustrations</h2>
      <h2 className={`${className}__tools`}>tools & techniques</h2>
      <p className={`${className}__toolst`}>
        Figma<br />
        javaScript<br />
        HTML & CSS<br />
        React<br />
        MongoDB<br />
        Procreate - illustration
      </p>
      <h2 className={`${className}__challenges`}>challenges</h2>
      <p className={`${className}__challengest`}>First I wanted to include a battle mechanism to the project, but that turned out to be a bit too difficult for my skill level at the moment. I decided to rely on power comparisons and automated posts instead, leaving the battle to be possibly implemented later.</p>
      <h2 className={`${className}__improve`}>areas for improvement</h2>
      <p className={`${className}__improvet`}>
        The possibility to change the time from the first estimate after completing the task - to be implemented.<br />
      Having items for the characters that would make them stronger - also from the gacha.<br />
      Having a battle mode to challenge your friend´s characters.<br />
      Making it possible to challenge the times your friends have taken on tasks, with enough challenges they would have to reasses the time.
      </p>
      <h2 className={`${className}__reflection`}>reflection & learning</h2>
      <p className={`${className}__reflectiont`}>I learned to use Figma more and explored low-fidelity to high-fidelity prototyping. I got to try a different style on the design than I’d typically gravitate towards, going out of my comfort zone. I also learned to approach a project with the mindset of solving an existing problem.</p>
      </section>
);

export default Athena;

Athena.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};