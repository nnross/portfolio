import propTypes from "prop-types";
import ImageWithLoading from "../../components/ImageWithLoading";

const Disciplines = ({ className = "disciplines", id = "disciplines" }) => (
  <div className={className} id={id}>
    <h1 className={`${className}__user__title`}>user research</h1>
    <ImageWithLoading
      className={`${className}__user__img`}
      src="/user_research.svg"
      alt=""
    />
    <p className={`${className}__user__text`}>
      I have knowledge of how to understand the people who use a product through
      means like interviews, surveys, and usability testing. I can use my
      understanding to create meaningful, user-centred products.
    </p>
    <h1 className={`${className}__visual__title`}>visual design</h1>
    <ImageWithLoading
      className={`${className}__visual__img`}
      src="/visual_design.svg"
      alt=""
    />
    <p className={`${className}__visual__text`}>
      I have a keen eye for designing the visual qualities of a product in an
      aesthetically pleasing way. My passion for great visual design can be seen
      on my focus on typography, colour theory, and layout principles.
    </p>
    <h1 className={`${className}__info__title`}>information architecture</h1>
    <ImageWithLoading
      className={`${className}__info__img`}
      src="/information_a.svg"
      alt=""
    />
    <p className={`${className}__info__text`}>
      I’m able to identify and organise information within a product in a way
      that enables users to find information effortlessly. Specific techniques
      I’m familiar with include card sorting and tree testing.
    </p>
    <h1 className={`${className}__interaction__title`}>interaction design</h1>
    <ImageWithLoading
      className={`${className}__interaction__img`}
      src="/interaction_design.svg"
      alt=""
    />
    <p className={`${className}__interaction__text`}>
      I know how to design the interactive behaviours of a product so that they
      ensure that the user’s journey is logical, efficient, and enjoyable.
    </p>
    <h1 className={`${className}__usability__title`}>usability evaluation</h1>
    <ImageWithLoading
      className={`${className}__usability__img`}
      src="/usability_evaluation.svg"
      alt=""
    />
    <p className={`${className}__usability__text`}>
      I have experience on evaluating the usability of a product based on
      Nielsen’s heuristics. I can also make changes on designs base on insights
      to make sure the final product meets user needs efficiently.
    </p>
    <h1 className={`${className}__accessibility__title`}>
      accessibility evaluation
    </h1>
    <ImageWithLoading
      className={`${className}__accessibility__img`}
      src="/accessibility_evaluation.svg"
      alt=""
    />
    <p className={`${className}__accessibility__text`}>
      I have a firm understanding of accessibility standards, like the WCAG, and
      I’m able to measure the quality of a product to be accessed by everyone.
      For example checking for colour contrast, keyboard navigation, and screen
      reader compatibility.
    </p>
  </div>
);

export default Disciplines;

Disciplines.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
