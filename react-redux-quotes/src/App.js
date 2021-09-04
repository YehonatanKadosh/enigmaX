import "./App.css";
import React, { useEffect } from "react";
import { get_categories, init_categories } from "./store/quotes";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Row, Col, Container, ProgressBar } from "react-bootstrap";
import Categories from "./components/categories";
import Quote from "./components/quote/quote";

const App = () => {
  const dispach = useDispatch();
  const categories = useSelector(get_categories);

  useEffect(() => {
    dispach(init_categories());
  }, [dispach]);

  return (
    <Container fluid className="quotes-container">
      <Row className="h-100 align-items-center">
        {categories ? (
          <Tab.Container defaultActiveKey={`#${Object.keys(categories)[0]}`}>
            <Col sm={4}>
              <Categories />
            </Col>
            <Col sm={8} className="quote-container">
              <Quote />
            </Col>
          </Tab.Container>
        ) : (
          <ProgressBar animated variant="success" now={100} />
        )}
      </Row>
    </Container>
  );
};

export default App;
