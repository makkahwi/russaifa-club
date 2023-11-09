import { Row } from "reactstrap";

interface props {
  children: React.ReactNode;
  color?: string;
  title?: string;
}

const PageSection = ({ children = <></>, color = "white", title }: props) => {
  return (
    <Row
      style={{
        minHeight: "90vh",
      }}
      className={`bg-${color} px-5 py-3`}
    >
      {title && <h1 className="my-5 pt-5 text-center">{title}</h1>}

      {children}
    </Row>
  );
};

export default PageSection;
