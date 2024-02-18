import PageSection from "@/components/PageSection";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const AchievementsSection = () => {
  const photos = [
    { width: 3, photo: "IMG_5633.jpg" },
    { width: 5, photo: "IMG_7004.jpg" },
    { width: 4, photo: "48bfc81d-a0e9-4626-ad98-8b1a5ff09efd.jpg" },
  ];

  const achievements = [
    {
      content:
        "Empowered more than 100 business leaders to achieve remarkable growth by providing actionable insights and strategies during coaching sessions, resulting in the development of strong, high-performing teams.",
      fullWidth: true,
    },
    {
      content:
        "I was honored to be recognized by the European Union as one of the most influential women in Jordan in 2020.",
    },
    {
      content:
        "Coached entrepreneurs to navigate complex challenges within our dynamic world, ensuring their success.",
    },
    {
      content:
        "Elevated the confidence and communication skills of business professionals, resulting in more successful negotiations, partnerships, and career advancements.",
    },
  ];

  return (
    <PageSection title="Achievements" color="light">
      {photos.map(({ width, photo }, i) => (
        <Col md={width} key={i}>
          <div
            style={{
              height: "25vh",
              backgroundImage: `url('/images/gallery/${photo}')`,
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-100 p-0 m-0"
          />
        </Col>
      ))}

      <Col xs={12} className="mt-5">
        <Row className="justify-content-center">
          {achievements.map(({ content, fullWidth }, i) => (
            <Col lg={fullWidth ? 12 : 4} className="d-flex my-3" key={i}>
              <Card className="border border-primary bg-transparent border-5 rounded-5 p-2 w-100">
                <CardBody>
                  <h5 className="text-block text-dark">{content}</h5>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default AchievementsSection;
