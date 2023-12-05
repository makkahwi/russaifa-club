import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const CoachingHeaderSection = () => {
  return (
    <PageSection title="Welcome to Coaching!" color="secondary" id="coaching">
      <Col md={6}>
        <img
          src="/images/gallery/IMG-20231128-WA0029.jpg"
          width="100%"
          className="rounded-5 soft-edges"
        />
      </Col>

      <Col md={6}>
        <h4 className="text-block text-white">
          {
            "At Coaching, my passion lies in touching hearts before touching minds and inspiring transformative change. I create a safe and supportive environment where individuals can thrive. In our one-on-one sessions, you'll discover a unique blend of professionalism and enjoyable engagement, ensuring that your time is both productive and genuinely enjoyable. With me, you won't just avoid boredom; you'll find each session adding significant value to your personal and professional growth journey. My approach includes solution-focused coaching, which enhances positive thinking, motivation, and performance. "
          }
        </h4>
      </Col>
    </PageSection>
  );
};

export default CoachingHeaderSection;
