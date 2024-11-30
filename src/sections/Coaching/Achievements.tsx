import { getAchievements } from "@/api";
import PageSection from "@/components/PageSection";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";

interface AchievementsProps {
  content: string;
  fullWidth?: boolean;
}

const AchievementsSection = async () => {
  const photos = [
    { width: 3, photo: "c.jpg" },
    { width: 5, photo: "IMG_7004.jpg" },
    { width: 4, photo: "48bfc81d-a0e9-4626-ad98-8b1a5ff09efd.jpg" },
  ];

  const achievements: AchievementsProps[] = await getAchievements();

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
        <ListGroup className="rounded-5 border-dark">
          {achievements.map(({ content, fullWidth }, i) => (
            <ListGroupItem className="bg-transparent border-dark p-4" key={i}>
              <h5 className="text-dark text-block">{content}</h5>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </PageSection>
  );
};

export default AchievementsSection;
