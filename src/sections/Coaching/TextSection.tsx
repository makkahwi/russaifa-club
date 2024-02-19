import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const TextSection = () => {
  return (
    <PageSection>
      <Col lg={12} className="my-auto">
        <h5 className="text-block text-dark">
          {
            "My coaching expertise spans a wide range of areas, including organizational leadership, performance development, communication, high-impact presentations, team building, pitching, entrepreneurship, strategic leadership, and more."
          }
        </h5>
      </Col>

      {/* <Col lg={6} className="my-auto">
        <div
          style={{
            height: "55vh",
            backgroundImage: `url('/images/gallery/a.jpg')`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-100 p-0 m-0 rounded-5 soft-edges"
        />
      </Col> */}
    </PageSection>
  );
};

export default TextSection;
