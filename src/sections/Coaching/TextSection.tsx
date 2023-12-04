import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const TextSection = () => {
  return (
    <PageSection>
      <Col md={6} className="my-auto">
        <h4 className="text-block">
          {
            "My coaching expertise spans a wide range of areas, including organizational leadership, performance development, communication, high-impact presentations, team building, pitching, entrepreneurship, strategic leadership, and more. In 2020, I was honored to be recognized by the European Union as one of the most influential women."
          }
        </h4>
      </Col>

      <Col md={6} className="my-auto">
        <img src="/images/gallery/4.jpg" width="100%" />
      </Col>
    </PageSection>
  );
};

export default TextSection;
