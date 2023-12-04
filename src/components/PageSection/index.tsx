import { Col, Row } from "reactstrap";

interface props {
  children: React.ReactNode;
  color?: string;
  title?: string;
  noMinHeight?: boolean;
  id?: string;
}

const PageSection = ({
  children = <></>,
  color = "white",
  title,
  noMinHeight,
  id,
}: props) => {
  return (
    <Row
      style={
        noMinHeight
          ? {
              padding: "10vh 10vw",
            }
          : {
              padding: "10vh 10vw",
              minHeight: "90vh",
            }
      }
      className={`bg-${color}`}
      id={id}
    >
      {title && (
        <Col xs={12}>
          <h1
            className={`mb-5 pb-5 text-center text-${
              color === "secondary" ? "white" : "primary"
            }`}
          >
            {title}
          </h1>
        </Col>
      )}

      {children}
    </Row>
  );
};

export default PageSection;
