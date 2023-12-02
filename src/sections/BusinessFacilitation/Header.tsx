import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const BusinessFacilitationHeaderSection = () => {
  return (
    <PageSection
      title="Why Choose My Executive Development Programs?"
      color="secondary"
    >
      <Col md={6}>
        <img src="/images/gallery/2.jpg" width="100%" />
      </Col>

      <Col md={6}>
        <h4 className="text-justify">
          {
            "At Coaching, my passion lies in touching hearts before touching minds and inspiring transformative change. I create a safe and supportive environment where individuals can thrive. In our one-on-one sessions, you'll discover a unique blend of professionalism and enjoyable engagement."
          }
        </h4>
      </Col>
    </PageSection>
  );
};

export default BusinessFacilitationHeaderSection;
