import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { get_categories, get_quote_of_the_day } from "../store/quotes";

const Categories = () => {
  const dispach = useDispatch();
  const categories = useSelector(get_categories);

  useEffect(() => {
    if (categories) dispach(get_quote_of_the_day(Object.keys(categories)[0]));
  });

  return (
    <>
      <h6>Quote Categories</h6>
      <ListGroup variant="flush">
        {Object.keys(categories).map((categoryName) => (
          <ListGroup.Item
            action
            variant="success"
            key={categoryName}
            href={`#${categoryName}`}
            onClick={() => dispach(get_quote_of_the_day(categoryName))}
          >
            {categoryName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Categories;
