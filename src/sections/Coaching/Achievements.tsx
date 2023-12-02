import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const AchievementsSection = () => {
  const photos = [
    { width: 3, photo: "2.jpg" },
    { width: 5, photo: "3.jpg" },
    { width: 4, photo: "4.jpg" },
  ];

  const achievements = [
    {
      title: "A",
      content: "a",
    },
    {
      title: "B",
      content: "b",
    },
    {
      title: "C",
      content: "c",
    },
  ];

  return (
    <PageSection title="Achievements" color="light">
      {photos.map(({ width, photo }, i) => (
        <Col md={width} key={i}>
          <div
            style={{
              height: "20vh",
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

      <Col xs={12}>
        <Row className="justify-content-between">
          {achievements.map(({ title, content }, i) => (
            <Col
              md={3}
              className="border border-dark border-5 rounded-4 p-5"
              key={i}
            >
              <h4 className="text-center">{title}</h4>

              <h5 className="text-justify">{content}</h5>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default AchievementsSection;
