import PageSection from "@/components/PageSection";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faBullseye,
  faChartBar,
  faFaceGrinStars,
  faGears,
  faHandHoldingDollar,
  faLightbulb,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row } from "reactstrap";

const UniqueProgramsSection = () => {
  const programGroups = [
    {
      icon: faUsers,
      programs: [
        "Leadership and Executive Development",

        "Emotional Intelligence for Leaders",

        "Leadership Communication Skills",

        "Building High Performance Teams",
      ],
    },
    {
      icon: faBullseye,
      programs: [
        "Strategic Thinking for Leaders",

        "Leading Change",

        "Problem Solving and Decision Making",
      ],
    },
    {
      icon: faFaceGrinStars,
      programs: [
        "Personal Branding for Leaders",

        "Master Speaker and Storyteller",

        "Productivity and Time Management",
      ],
    },
    {
      icon: faHandHoldingDollar,
      programs: [
        "Negotiation Skills",

        "Selling and Negotiating Techniques",

        "Customer Service",
      ],
    },
    {
      icon: faPersonChalkboard,
      programs: ["Train the Trainer", "Coaching Skills for Leaders"],
    },
    {
      icon: faLightbulb,
      programs: [
        "Innovation and Creative Leadership",

        "Facilitation Using Lego Serious Play Methodology",
      ],
    },
    {
      icon: faBriefcase,
      programs: ["Employability Skills "],
    },
  ];

  return (
    <PageSection title="Unique Programs">
      <Col xs={12}>
        <Row className="justify-content-center">
          {programGroups.map(({ icon, programs }, i) => (
            <Col md={i < 3 ? 4 : 3} className="d-flex" key={i}>
              <Card className="border border-primary border-5 rounded-4 py-4 my-3 w-100">
                <CardBody>
                  <h1 className="text-center mb-4 text-primary display-1">
                    <FontAwesomeIcon icon={icon} />
                  </h1>

                  <ListGroup flush>
                    {programs.map((program, y) => (
                      <ListGroupItem key={y}>
                        <h5 className="text-center my-1">{program}</h5>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default UniqueProgramsSection;
