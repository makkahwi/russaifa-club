import { getTestimonials } from "@/api";
import PageSection from "@/components/PageSection";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

interface TestimonialProps {
  author: string;
  content: string;
}

const TestimonialsSection = async () => {
  const testimonials: TestimonialProps[] = await getTestimonials();

  const TestimonialComp = ({ content = "", author = "" }) => (
    <div className="p-4 border border-danger rounded-5 mx-1 mb-4">
      <p className="text-justify text-dark">{content}</p>

      <h6 className="text-danger mt-4">{author}</h6>
      {Array.from(Array(5).keys()).map((y) => (
        <FontAwesomeIcon icon={faStar} className="text-danger h6" key={y} />
      ))}
    </div>
  );

  return (
    <PageSection title="Testimonials" id="testimonials">
      <Col xs={12} className="mb-5 scrollable-testimonials">
        <Row>
          <Col lg={4}>
            {testimonials
              .slice(0, testimonials.length / 3)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </Col>

          <Col lg={4}>
            {testimonials
              .slice(testimonials.length / 3, (testimonials.length / 3) * 2)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </Col>

          <Col lg={4}>
            {testimonials
              .slice((testimonials.length / 3) * 2, testimonials.length)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </Col>
        </Row>
      </Col>

      {/* <Slider
          navigation
          indicators
          slides={testimonials?.map(({ content, author }, i) => (
            <div
              className="p-4 border border-danger rounded-5 mx-3 h-100"
              key={i}
            >
              <h5 className="text-block text-dark">{content}</h5>

              <h5 className="text-justify text-danger mt-4">{author}</h5>
              {Array.from(Array(5).keys()).map((y) => (
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-danger h5"
                  key={y}
                />
              ))}
            </div>
          ))}
        /> */}
    </PageSection>
  );
};

export default TestimonialsSection;
