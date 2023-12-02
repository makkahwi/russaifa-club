import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const TestimonialsSection = () => {
  const testimonials = [
    "This is my first experience with a life coach was quite significant. I genuinely felt how important it is to engage with someone who seeks to understand you and assist in your self-discovery.",
    "This is my first experience with a life coach was quite significant. I genuinely felt how important it is to engage with someone who seeks to understand you and assist in your self-discovery.",
  ];

  return (
    <PageSection title="Testimonials" color="light" id="testimonials">
      <Col md={12}></Col>
    </PageSection>
  );
};

export default TestimonialsSection;
