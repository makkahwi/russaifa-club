import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

const CoachingHeaderSection = () => {
  return (
    <PageSection title="Welcome to Coaching!" color="secondary" id="coaching">
      <Col xl={6}>
        <img
          src="/images/00001.jpg"
          width="100%"
          className="rounded-5 soft-edges"
        />
      </Col>

      <Col xl={6} className="ps-5">
        <h5 className="text-block text-dark mt-3">
          {
            "At Coaching, my passion lies in touching hearts before touching minds and inspiring transformative change. I create a safe and supportive environment where individuals can thrive. In our one-on-one sessions, you'll discover a unique blend of professionalism and enjoyable engagement, ensuring that your time is both productive and genuinely enjoyable."
            // " With me, you won't just avoid boredom; you'll find each session adding significant value to your personal and professional growth journey. My approach includes solution-focused coaching, which enhances positive thinking, motivation, and performance. "
          }
        </h5>

        <br />

        <h5 className="text-block text-dark mt-3">
          {
            "My coaching expertise spans a wide range of areas, including organizational leadership, performance development, communication, high-impact presentations, team building, pitching, entrepreneurship, strategic leadership, and more."
          }
        </h5>
      </Col>

      {/* <Col lg={12} className="my-auto"></Col> */}
    </PageSection>
  );
};

export default CoachingHeaderSection;
