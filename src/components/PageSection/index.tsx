import { Col, Row } from "reactstrap";

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
          ? {
              padding: "10vh 10vw",
            }
          : {
              padding: "10vh 10vw",
              minHeight: "90vh",
            }
      }
      className={`bg-${color}`}
    >
      {title && (
        <Col xs={12}>
          <h1 className="mb-5 pb-5 text-center text-primary">{title}</h1>
        </Col>
      )}

      {children}
    </Row>
  );
};

export default PageSection;
