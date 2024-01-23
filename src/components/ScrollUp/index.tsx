import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll } from "react-scroll";
import { Button } from "reactstrap";

const ScrollUpButton = () => {
  return (
    <Button
      color="primary"
      className="position-fixed end-0 bottom-0 m-3 rounded-circle"
      onClick={() =>
        animateScroll.scrollToTop({ delay: 0, smooth: "easeInOutQuint" })
      }
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default ScrollUpButton;
