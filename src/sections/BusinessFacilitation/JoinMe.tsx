import PageSection from "@/components/PageSection";
import { Col, Row } from "reactstrap";

const JoinMeSection = () => {
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
    <PageSection
      title="Join Me on Your Journey to Leadership Excellence"
      color="light"
    >
      <Col md={12} className="border border-primary border-5 rounded-4 p-5">
        <h4 className="text-justify text-primary">
          {
            "Whether you're a seasoned executive or an emerging leader, I have a program that's perfect for you. If you're looking to elevate your leadership skills, drive organizational success, and unlock your full potential, my executive development programs are your gateway to excellence."
          }
        </h4>

        <h4 className="text-justify text-primary">
          {
            "Contact me today to learn more about my executive development programs and how we can collaborate to meet your specific leadership development needs. Your peoples’ journey to becoming an exceptional leader starts here."
          }
        </h4>
      </Col>
    </PageSection>
  );
};

export default JoinMeSection;
