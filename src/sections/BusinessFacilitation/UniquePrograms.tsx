import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const UniqueProgramsSection = () => {
  const programGroups = [
    [
      "Leadership and Executive Development",

      "Emotional Intelligence for Leaders",

      "Leadership Communication Skills",

      "Building high performance teams",
    ],
    [
      "Strategic Thinking for Leaders",

      "Leading change",

      "Problem solving and Decision making",
    ],
    [
      "Personal branding for Leaders",

      "Master Speaker and Storyteller",

      "Productivity and Time Management",
    ],
    [
      "Negotiation skills",

      "Selling and Negotiating Techniques",

      "Customer service",
    ],
    ["Train the Trainer", "Coaching skills for Leaders"],
    [
      "Innovation and Creative Leadership",

      "Facilitation using Lego Serious Play methodology",
    ],
    ["Employability skills "],
  ];

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Row className="justify-content-center">
          {programGroups.map((programs, i) => (
            <Col
              md={3}
              className="border border-primary border-5 rounded-4 p-5 my-3 mx-2"
              key={i}
            >
              {programs.map((program, y) => (
                <h4 className="text-center" key={y}>
                  {program}
                  <br />
                  <br />
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
