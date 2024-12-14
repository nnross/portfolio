import propTypes from 'prop-types';

const Title = ({ className = 'title', id = 'title', arrow1, arrow2, question, title }) => {
    return (
      <div className={`${className}`} id={`${id}`}>
        <img className={`${className}__${arrow1}`} id={`${id}__${arrow1}`} src={`../src/assets/${arrow1}.svg`}  alt="" />
        <h2 className={`${className}__question`} id={`${id}__question`}>{question}</h2>
        <img className={`${className}__${arrow2}`} id={`${id}__${arrow2}`} src={`../src/assets/${arrow2}.svg`} alt="" />
        <h1 className={`${className}__title`} id={`${id}__title`}>{title}</h1>
      </div>
    );
  };
  
  export default Title;

  Title.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
    arrow1: propTypes.string,
    arrow2: propTypes.string,
    question: propTypes.string,
    title: propTypes.string,
  };