import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll } from "react-scroll";

const ScrollUpButton = () => {
  return (
    <div
      className="btn btn-dark position-fixed end-0 bottom-0 m-3 rounded-circle"
      onClick={() =>
        animateScroll.scrollToTop({ delay: 0, smooth: "easeInOutQuint" })
      }
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
};

export default ScrollUpButton;
