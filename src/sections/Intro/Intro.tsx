import PageSection from "@/components/PageSection";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const AboutIntroSection = () => {
  const stats = [
    { title: "Organizations Served", count: 100 },
    { title: "Workshops Held", count: 1000 },
    { title: "Persons Mentored", count: 10000 },
  ];

  return (
    <PageSection id="about">
      <Col lg={6} className="my-auto">
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
      </Col>

      <Col lg={6} className="my-auto">
        <h4 className="text-block text-dark">
          Where Style Meets Substance. Embrace the Power of Confidence and
          Influence. Elevate Your Presence, Own the Room.
        </h4>

        <Row className="justify-content-between py-auto px-5">
          {stats.map(({ title, count }, i) => (
            <Col md={12} lg={3} className="my-auto text-center my-5" key={i}>
              <h1 className="mt-4 text-primary">{count}</h1>
              <h5 className="mt-2 text-dark">{title}</h5>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default AboutIntroSection;
