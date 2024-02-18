import { Button } from "reactstrap";
import { animateScroll, Link } from "react-scroll";

const BookNowButton = () => {
  return (
    <Link
      to="contact"
      className="btn btn-primary position-fixed bottom-0 end-0 m-5 p-3 rounded-circle text-uppercase"
      role="button"
      style={{ zIndex: 1000 }}
    >
      Book
      <br />
      Now
    </Link>
  );
};

export default BookNowButton;
