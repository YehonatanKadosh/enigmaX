import { Figure, ProgressBar, Tab } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import { useSelector } from "react-redux";
import { get_quote } from "../../store/quotes";
import "./quote.scss";

const Quote = () => {
  const { quote, loading } = useSelector(get_quote);

  return loading ? (
    <ProgressBar animated variant="success" now={100} />
  ) : (
    (quote && (
      <Tab.Content>
        <Tab.Pane eventKey={`#${quote.category}`}>
          <Figure>
            {quote.quote.split(".").map((sentence) => (
              <h3 key={sentence}>{sentence}</h3>
            ))}
            <FigureCaption>
              <h6>by {quote.author}</h6>
            </FigureCaption>
            <Figure.Image src={quote.background} alt="quote of the day" />
            <FigureCaption>
              <h6>{Object.values(quote.tags).join(", ")}</h6>
            </FigureCaption>
          </Figure>
        </Tab.Pane>
      </Tab.Content>
    )) ||
      null
  );
};
export default Quote;
