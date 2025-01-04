import propTypes from 'prop-types';

const Athena = ({ className = 'athena', id = 'athena' }) => (
    <section className={className} id={id}>
      <h1>athena</h1>
      </section>
);

export default Athena;

Athena.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};