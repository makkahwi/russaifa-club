import { getAchievements } from "@/api";
import PageSection from "@/components/PageSection";

interface AchievementsProps {
  content: string;
  fullWidth?: boolean;
}

const AchievementsSection = async () => {
  const photos = [
    { width: 3, photo: "2.jpeg.jpg" },
    { width: 5, photo: "2.jpeg.jpg" },
    { width: 4, photo: "2.jpeg.jpg" },
  ];

  const achievements: AchievementsProps[] = [];

  return (
    <PageSection title="Achievements" color="light">
      {photos.map(({ width, photo }, i) => (
        <div className={`col-md-${width}`} key={i}>
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
        </div>
      ))}

      <div className="col-12 mt-5">
        <div className="list-group rounded-5 border-primary">
          {achievements.map(({ content, fullWidth }, i) => (
            <div
              className="list-group-item bg-transparent border-primary p-4"
              key={i}
            >
              <h5 className="text-primary text-block">{content}</h5>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default AchievementsSection;
