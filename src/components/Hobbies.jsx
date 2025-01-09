import propTypes from "prop-types";

const Hobbies = ({ className = "hobbies", id = "hobbies" }) => {
  return (
    <div className={`${className}`} id={`${id}`}>
      <img
        className={`${className}__painting`}
        id={`${id}__painting`}
        src="/painting.png"
        alt="Painting of a cat."
      />
      <p
        className={`${className}__painting__text`}
        id={`${id}__painting__text`}
      >
        I have been drawing, painting and creating art for as long as I can
        remember
      </p>
      <img
        className={`${className}__running`}
        id={`${id}__running`}
        src="/running.png"
        alt="Apple watch and running shoes."
      />
      <p className={`${className}__running__text`} id={`${id}__running__text`}>
        This year I started running and ran my first half marathon
      </p>
      <img
        className={`${className}__reading`}
        id={`${id}__reading`}
        src="/reading.png"
        alt="Shelves of books."
      />
      <p className={`${className}__reading__text`} id={`${id}__reading__text`}>
        I love reading, I own nearly 200 books and I dream of one day writing my
        own
      </p>
      <img
        className={`${className}__knitting`}
        id={`${id}__knitting`}
        src="/knitting.png"
        alt="A stripy sweater."
      />
      <p
        className={`${className}__knitting__text`}
        id={`${id}__knitting__text`}
      >
        Last year I picked up crochet and this year I started knitting, my
        latest project was a sweater
      </p>
    </div>
  );
};

export default Hobbies;

Hobbies.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
