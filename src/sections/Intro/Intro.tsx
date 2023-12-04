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
      <Col md={6} className="my-auto">
        <Image
          src="/images/VideoPlaceholder.jpg"
          alt="Noor Photo"
          width={855 * 0.75}
          height={482 * 0.75}
          priority
        />
      </Col>

      <Col md={6} className="my-auto">
        <h4 className="text-justify">
          Where Style Meets Substance. Embrace the Power of Confidence and
          Influence. Elevate Your Presence, Own the Room.
        </h4>

        <Row className="justify-content-center py-auto px-5">
          {stats.map(({ title, count }, i) => (
            <Col md={3} className="my-auto text-center my-5 mx-4" key={i}>
              <h1 className="mt-4 text-primary">{count}</h1>
              <h5 className="mt-2">{title}</h5>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default AboutIntroSection;
