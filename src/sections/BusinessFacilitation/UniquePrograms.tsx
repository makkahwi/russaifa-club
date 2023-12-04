import PageSection from "@/components/PageSection";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "reactstrap";

const UniqueProgramsSection = () => {
  const programGroups = [
    {
      icon: faChartBar,
      programs: [
        "Leadership and Executive Development",

        "Emotional Intelligence for Leaders",

        "Leadership Communication Skills",

        "Building high performance teams",
      ],
    },
    {
      icon: faChartBar,
      programs: [
        "Strategic Thinking for Leaders",

        "Leading change",

        "Problem solving and Decision making",
      ],
    },
    {
      icon: faChartBar,
      programs: [
        "Personal branding for Leaders",

        "Master Speaker and Storyteller",

        "Productivity and Time Management",
      ],
    },
    {
      icon: faChartBar,
      programs: [
        "Negotiation skills",

        "Selling and Negotiating Techniques",

        "Customer service",
      ],
    },
    {
      icon: faChartBar,
      programs: ["Train the Trainer", "Coaching skills for Leaders"],
    },
    {
      icon: faChartBar,
      programs: [
        "Innovation and Creative Leadership",

        "Facilitation using Lego Serious Play methodology",
      ],
    },
    {
      icon: faChartBar,
      programs: ["Employability skills "],
    },
  ];

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Row className="justify-content-center">
          {programGroups.map(({ icon, programs }, i) => (
            <Col
              md={3}
              className="border border-primary border-5 rounded-4 p-5 my-3 mx-2"
              key={i}
            >
              <h1 className="text-center mb-4 text-primary">
                <FontAwesomeIcon icon={icon} />
              </h1>

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
