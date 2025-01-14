import propTypes from "prop-types";

const Intro = ({ className = "intro", id = "intro" }) => {
  return (
    <div className={`${className}`} id={`${id}`}>
      <h1 className={`${className}__title`} id={`${id}__title`}>
        nelli rossi
      </h1>
      <p className={`${className}__1`} id={`${id}__1`}>
        I’m a{" "}
        <span className={`${className}__highlight`}>master&apos;s student</span>{" "}
        at the University of Turku and I’m majoring in computer science,
        specifically in{" "}
        <span className={`${className}__highlight`}>interaction design</span>.
      </p>
      <p className={`${className}__2`} id={`${id}__2`}>
        For a long time I was unsure what I’d want to do in the future. I’ve
        always been creative and creating, I even attended an art program in
        high school. But on the other hand I really liked math and problem
        solving. I was also really interested in psychology, not to mention that
        I’m also a very empathetic person.
      </p>
      <img
        className={`${className}__arrow1`}
        id={`${id}__arrow1`}
        src="/small_arrow_1.svg"
        alt=""
      />
      <p className={`${className}__3`} id={`${id}__3`}>
        I thought about architecture, biomedicine, economics, and a lot more.
        Nothing still felt right and I started to feel desperate. Is there
        anything that would fit all my strengths?
      </p>
      <img
        className={`${className}__arrow2`}
        id={`${id}__arrow2`}
        src="/small_arrow_2.svg"
        alt=""
      />
      <p className={`${className}__4`} id={`${id}__4`}>
        Then I found interaction design. It connected all my interests and
        strengths and I immediately knew that that’s what I want to study. From
        that point on my dream has been{" "}
        <span className={`${className}__highlight`}>
          to become a great UI/UX designer
        </span>
        .{" "}
      </p>
    </div>
  );
};

export default Intro;

Intro.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
