import propTypes from 'prop-types';

const Grcries = ({ className = 'grcries', id = 'grcries' }) => (
    <section className={className} id={id}>
          <h1>grcries</h1>
      </section>
);

export default Grcries;

Grcries.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};