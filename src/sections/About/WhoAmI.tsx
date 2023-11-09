import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const WhoAmISection = () => {
  const certs = [
    { title: "Organization Served", date: 2022, source: "Dubai" },
    { title: "Organization Served", date: 2022, source: "Dubai" },
    { title: "Organization Served", date: 2022, source: "Dubai" },
    { title: "Organization Served", date: 2022, source: "Dubai" },
    { title: "Organization Served", date: 2022, source: "Dubai" },
    { title: "Organization Served", date: 2022, source: "Dubai" },
  ];

  return (
    <PageSection title="Who Am I?" color="light">
      <Col md={12}>
        <h4 className="text-justify">
          I am a vibrant, high-energy Leadership Facilitator and Executive Coach
          passionately harnessing the transformative potential of
          Solution-Focused Methodology. As the driving force behind the Noor
          Kayyali Training Institute, I am on a mission to inspire and empower
          individuals and teams.
        </h4>
      </Col>

      <Col md={12}>
        <h4 className="text-justify">
          I proudly hold many certifications & recognition. Those are not just
          qualifications; they are tools I wield with unwavering zeal to ignite
          growth, innovation, and meaningful change. Let's embark on this
          incredible journey together!
        </h4>
      </Col>

      <Col md={12} className="border border-dark border-5 rounded-4 mt-5">
        <Row>
          <Col md={12} className="my-4">
            <h3 className="text-center">Certifications</h3>
          </Col>

          {certs.map(({ title, date, source }, i) => (
            <Col md={4} className="text-center my-4" key={i}>
              <h6>
                {date} @ {source}
              </h6>

              <h5>{title}</h5>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default WhoAmISection;
