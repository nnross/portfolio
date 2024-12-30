import propTypes from 'prop-types';

const Contact = ({ className = 'contact', id = 'contact' }) => {
    return (
      <div className={`${className}`} id={`${id}`}>
        <div className={`${className}__image`} id={`${id}__image`}>
          <img className={`${className}__image__1`} id={`${id}__image__1`} src="../src/assets/portrait.png" alt="" />
        </div>
        <div className={`${className}__personal`} id={`${id}__personal`}>
          <div className={`${className}__personal__location`} id={`${id}__personal__location`}>
            <p className={`${className}__personal__location__1`} id={`${id}__personal__location__1`}>location</p>
            <p className={`${className}__personal__location__2`} id={`${id}__personal__location__2`}>Turku, Finland</p>
          </div>
          <div className={`${className}__personal__age`} id={`${id}__personal__age`}>
            <p className={`${className}__personal__age__1`} id={`${id}__personal__age__1`}>age</p>
            <p className={`${className}__personal__age__2`} id={`${id}__personal__age__2`}>24</p>
          </div>
        </div>
        <div className={`${className}__links`} id={`${id}__links`}>
          <div className={`${className}__links__mail`} id={`${id}__links__mail`}>
            <img className={`${className}__links__mail__icon`} id={`${id}__links__mail__icon`} src="../src/assets/mail.svg" alt="envelope icon"/>
            <p className={`${className}__links__mail__address`} id={`${id}__links__mail__address`}>nellinatalie.rossi@gmail.com</p>
          </div>
          <div className={`${className}__links__github`} id={`${id}__links__github`}>
            <img className={`${className}__links__github__icon`} id={`${id}__links__github__icon`} src="../src/assets/github_1.svg" alt="github icon"/>
            <a className={`${className}__links__github__address`} id={`${id}__links__github__address`} href="https://github.com/nnross" target="_blank">github</a>
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