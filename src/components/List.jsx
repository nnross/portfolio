import propTypes from "prop-types";

const List = ({ className = "list", id = "list", title, items, ongoing }) => {
  const itemList = [];

  items.map((item) =>
    itemList.push(
      <li key={`${id}__${item}`} className={`${className}__list__item`}>
        {item}
      </li>
    )
  );
  return (
    <div className={`${className}`} id={`${id}`}>
      <h2 className={`${className}__title`} id={`${id}__title`}>
        {title}
      </h2>
      <hr className={`${className}__divider`} />
      <ul className={`${className}__list`} id={`${id}__list`}>
        {itemList}
        <li className={`${className}__list__ongoing`}>{ongoing}</li>
      </ul>
    </div>
  );
};

export default List;

List.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  title: propTypes.string,
  items: propTypes.arrayOf(propTypes.string),
  ongoing: propTypes.string,
};
