import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const BusinessFacilitationHeaderSection = () => {
  return (
    <PageSection
      title="Why Choose My Executive Development Programs?"
      color="secondary"
      id="business"
    >
      <Col md={6}>
        <img
          src="/images/gallery/IMG-20231128-WA0021.jpg"
          width="100%"
          className="rounded-5 soft-edges"
        />
      </Col>

      <Col md={6}>
        <h5 className="text-block">
          {
            "My executive development programs are tailored for excellence, designed to meet the unique needs and objectives of your organization. I understand that one size does not fit all, and I work closely with you to create a program that aligns perfectly with your leadership development goals. "
          }
        </h5>
      </Col>
    </PageSection>
  );
};

export default BusinessFacilitationHeaderSection;
