import propTypes from 'prop-types';

const Illustration = ({ className = 'illustration', id = 'illustration' }) => (
    <section className={className} id={id}>
          <h1>illustrations</h1>
      </section>
);

export default Illustration;

Illustration.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};