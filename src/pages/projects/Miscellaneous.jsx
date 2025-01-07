import propTypes from 'prop-types';

const Miscellaneous = ({ className = 'miscellaneous', id = 'miscellaneous' }) => (
    <section className={className} id={id}>
          <h1>miscellaneous</h1>
      </section>
);

export default Miscellaneous;

Miscellaneous.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};