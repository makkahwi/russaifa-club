import { Row } from "reactstrap";

interface props {
  children: React.ReactNode;
  color?: string;
}

const PageSection = ({ children = <></>, color = "light" }: props) => {
  return (
    <Row
      style={{
        minHeight: "90vh",
      }}
      className={`bg-${color} px-5`}
    >
      {children}
    </Row>
  );
};

export default PageSection;
