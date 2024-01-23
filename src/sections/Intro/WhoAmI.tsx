import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const WhoAmISection = () => {
  const certs = [
    {
      title: "Certified MBTI practitioner",
      date: 2022,
      source: "A",
    },
    {
      title: "Certified Facilitator in LEGO® SERIOUS PLAY® (LSP) Methodology",
      date: 2023,
      source: "INTHRFACE, DENMARK",
    },
    {
      title: "Certified Professional in Design Thinking (CPDT)",
      date: 2023,
      source: "SkillFront",
    },
    {
      title: "Solution Focused Coach",
      date: 2022,
      source: "B",
    },
    {
      title: "DANIEL GOLEMAN EMOTIONAL INTELLIGENCE",
      date: 2022,
      source: "C",
    },
    {
      title: "CERTIFIED LEVEL 2 CONVERSATIONAL",
      date: 2022,
      source: "WEINSTITUTE",
    },
    {
      title: "INTELLIGENCE COACH",
      date: 2022,
      source: "D",
    },
    {
      title:
        "CERTIFIED LEADERSHIP, GOVERNANCE AND STRATEGIC THINKING FACILITATOR ",
      date: 2021,
      source: "WHO",
    },
    {
      title: "CERTIFIED level 2 AQAI ASSESSMENT COACH AND PRACTITIONER",
      date: 2012,
      source: "UK",
    },
    {
      title: "CERTIFIED TRAINER",
      date: 2012,
      source: "E",
    },
  ];

  return (
    <PageSection title="In-Depth Look" color="light">
      <Col md={12}>
        <h5 className="text-block text-dark">
          {
            "I am a vibrant, high-energy Leadership Facilitator and Executive Coach passionately harnessing the transformative potential of Solution-Focused Methodology. As the driving force behind the Noor Kayyali Training Institute, I am on a mission to inspire and empower individuals and teams."
          }
        </h5>
      </Col>

      <Col md={12}>
        <h5 className="text-block text-dark">
          {
            "I proudly hold many certifications & recognition. Those are not just qualifications; they are tools I wield with unwavering zeal to ignite growth, innovation, and meaningful change. Let's embark on this incredible journey together!"
          }
        </h5>
      </Col>

      <Col md={12} className="border border-primary border-5 rounded-4 mt-5">
        <Row>
          <Col md={12} className="my-4">
            <h3 className="text-center text-primary">Certifications</h3>
          </Col>

          {certs.map(({ title, date, source }, i) => (
            <Col md={6} lg={4} className="text-center my-4 text-dark" key={i}>
              <h6>
                {/* {date} @  */}
                {source}
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
