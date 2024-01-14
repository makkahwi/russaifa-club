import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const WhoAmISection = () => {
  const certs = [
    {
      title: "Level 2 Certified AQ Coach",
      date: 2022,
      source: "LEGO® SERIOUS PLAY®",
    },
    {
      title: "CERTIFIED LEVEL 2 CONVERSATIONAL INTELLIGENCE COACH",
      date: 2023,
      source: "WEINSTITUTE",
    },
    {
      title: "SOLUTION FOCUSED COACH LEVEL 2 (ONGOING)",
      date: 2023,
      source: "طلوزة",
    },
    {
      title:
        "CERTIFIED LEADERSHIP, GOVERNANCE AND STRATEGIC THINKING FACILITATOR",
      date: 2022,
      source: "WHO",
    },
    {
      title: "CERTIFIED PROFESSIONAL IN DESIGN THINKING (CPDT)",
      date: 2022,
      source: "SkillFront",
    },
    {
      title: "CERTIFIED FACILITATOR IN LEGO® SERIOUS PLAY® (LSP) METHODOLOGY",
      date: 2022,
      source: "INTHRFACE, DENMARK",
    },
    {
      title: "CERTIFIED MBTI PRACTIONER FROM HEART TO HEART CONSULTANCY",
      date: 2022,
      source: "طلوزة",
    },
    {
      title: "CERTIFIED AQAI ASSESSMENT COACH AND PRACTITIONER",
      date: 2021,
      source: "UK",
    },
    {
      title: "CERTIFIED TRAINER – SPEARHEAD TRAINING INSTITUTENSULTANCY",
      date: 2012,
      source: "طلوزة",
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
