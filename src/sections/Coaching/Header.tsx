import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const CoachingHeaderSection = () => {
  return (
    <PageSection title="Welcome to Coaching!" color="secondary" id="coaching">
      <Col xl={6}>
        <img
          src="/images/gallery/IMG-20231128-WA0029.jpg"
          width="100%"
          className="rounded-5 soft-edges"
        />
      </Col>

      <Col xl={6}>
        <h5 className="text-block text-dark">
          {
            "At Coaching, my passion lies in touching hearts before touching minds and inspiring transformative change. I create a safe and supportive environment where individuals can thrive. In our one-on-one sessions, you'll discover a unique blend of professionalism and enjoyable engagement, ensuring that your time is both productive and genuinely enjoyable. With me, you won't just avoid boredom; you'll find each session adding significant value to your personal and professional growth journey. My approach includes solution-focused coaching, which enhances positive thinking, motivation, and performance. "
          }
        </h5>
      </Col>
    </PageSection>
  );
};

export default CoachingHeaderSection;
