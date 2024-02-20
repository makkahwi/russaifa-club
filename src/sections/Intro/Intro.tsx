import PageSection from "@/components/PageSection";
import { Col, Row } from "react-bootstrap";
import NumberCounters from "./Numbers";

const AboutIntroSection = () => {
  return (
    <PageSection id="about">
      {/* <Col lg={6} className="my-auto">
        <div
          style={{
            height: "50vh",
            backgroundImage: `url("/images/gallery/IMG-20231128-WA0017.jpg")`,
            backgroundPositionX: "center",
            backgroundPositionY: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-100 p-0 m-0 rounded-5 soft-edges"
        />
      </Col> */}

      <Col lg={12} className="my-auto">
        <h4 className="text-block text-dark">
          Where Style Meets Substance. Embrace the Power of Confidence and
          Influence. Elevate Your Presence, Own the Room.
        </h4>

        <Row className="justify-content-between py-auto px-5">
          <NumberCounters />
        </Row>
      </Col>
    </PageSection>
  );
};

export default AboutIntroSection;
