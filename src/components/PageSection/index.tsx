import { Row } from "reactstrap";

interface props {
  children: React.ReactNode;
  color?: string;
  title?: string;
  noMinHeight?: boolean;
}

const PageSection = ({
  children = <></>,
  color = "white",
  title,
  noMinHeight,
}: props) => {
  return (
    <Row
      style={
        noMinHeight
          ? {}
          : {
              minHeight: "90vh",
            }
      }
      className={`bg-${color} px-5 pt-3 pb-5`}
    >
      {title && <h1 className="my-5 pt-5 text-center">{title}</h1>}

      {children}
    </Row>
  );
};

export default PageSection;
