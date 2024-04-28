import { useAccordionButton } from "react-bootstrap/AccordionButton";

const CustomToggle = ({ children = <></>, eventKey = "0", ...rest }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <div
      role="button"
      onClick={decoratedOnClick}
      className="h-100 px-3"
      style={{ display: "table" }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default CustomToggle;
