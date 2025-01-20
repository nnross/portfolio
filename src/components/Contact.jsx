import propTypes from "prop-types";
import ImagewithLoading from "./ImageWithLoading";

const Contact = ({ className = "contact", id = "contact" }) => {
  return (
    <div className={`${className}`} id={`${id}`}>
      <div className={`${className}__image`} id={`${id}__image`}>
        <ImagewithLoading
          className={`${className}__image__1`}
          id={`${id}__image__1`}
          src="/portrait.png"
          height="280px"
          width="231px"
          alt="portrait of portfolio owner"
        />
      </div>
      <div className={`${className}__personal`} id={`${id}__personal`}>
        <div
          className={`${className}__personal__location`}
          id={`${id}__personal__location`}
        >
          <p
            className={`${className}__personal__location__1`}
            id={`${id}__personal__location__1`}
          >
            location
          </p>
          <p
            className={`${className}__personal__location__2`}
            id={`${id}__personal__location__2`}
          >
            Turku, Finland
          </p>
        </div>
        <div
          className={`${className}__personal__age`}
          id={`${id}__personal__age`}
        >
          <p
            className={`${className}__personal__age__1`}
            id={`${id}__personal__age__1`}
          >
            age
          </p>
          <p
            className={`${className}__personal__age__2`}
            id={`${id}__personal__age__2`}
          >
            24
          </p>
        </div>
      </div>
      <div className={`${className}__links`} id={`${id}__links`}>
        <div className={`${className}__links__mail`} id={`${id}__links__mail`}>
          <img
            className={`${className}__links__mail__icon`}
            id={`${id}__links__mail__icon`}
            src="/mail.svg"
            alt="envelope icon"
          />
          <a
            className={`${className}__links__mail__address`}
            id={`${id}__links__mail__address`}
            href="mailto:nellinatalie.rossi@gmail.com"
          >
            nellinatalie.rossi@gmail.com
          </a>
        </div>
        <div
          className={`${className}__links__figma`}
          id={`${id}__links__figma`}
        >
          <img
            className={`${className}__links__figma__icon`}
            id={`${id}__links__figma__icon`}
            src="/figma.svg"
            alt="figma icon"
          />
          <a
            className={`${className}__links__figma__address`}
            id={`${id}__links__figma__address`}
            href="https://www.figma.com/@nnross"
            target="_blank"
          >
            figma
          </a>
        </div>
        <div
          className={`${className}__links__github`}
          id={`${id}__links__figma`}
        >
          <img
            className={`${className}__links__github__icon`}
            id={`${id}__links__github__icon`}
            src="/github_1.svg"
            alt="github icon"
          />
          <a
            className={`${className}__links__github__address`}
            id={`${id}__links__github__address`}
            href="https://github.com/nnross"
            target="_blank"
          >
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

Contact.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
