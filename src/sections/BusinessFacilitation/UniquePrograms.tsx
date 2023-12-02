import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const UniqueProgramsSection = () => {
  const programGroups = [
    ["A", "B", "C"],
    ["X", "Y", "Z"],
    ["1", "2", "3"],
  ];

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Row className="justify-content-between">
          {programGroups.map((programs, i) => (
            <Col
              md={3}
              className="border border-primary border-5 rounded-4 p-5"
              key={i}
            >
              {programs.map((program, y) => (
                <h4 className="text-center" key={y}>
                  {program}
                </h4>
              ))}
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default UniqueProgramsSection;
