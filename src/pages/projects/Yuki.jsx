import propTypes from 'prop-types';

const Yuki = ({ className = 'yuki', id = 'yuki' }) => (
    <section className={className} id={id}>
          <h1>cafe yuki</h1>
      </section>
);

export default Yuki;

Yuki.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
};