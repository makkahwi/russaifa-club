import { getTestimonials } from "@/api";
import PageSection from "@/components/PageSection";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TestimonialProps {
  author: string;
  content: string;
}

const TestimonialsSection = async () => {
  const testimonials: TestimonialProps[] = [];

  const TestimonialComp = ({ content = "", author = "" }) => (
    <div className="p-4 border border-success rounded-5 mx-1 mb-4">
      <p className="text-justify text-success">{content}</p>

      <h6 className="text-success mt-4">{author}</h6>
      {Array.from(Array(5).keys()).map((y) => (
        <FontAwesomeIcon icon={faStar} className="text-success h6" key={y} />
      ))}
    </div>
  );

  return (
    <PageSection title="شهادات العملاء" id="testimonials">
      <div className="col-md-12 mb-5 scrollable-testimonials">
        <div className="row">
          <div className="col-lg-4">
            {testimonials
              .slice(0, testimonials.length / 3)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </div>

          <div className="col-lg-4">
            {testimonials
              .slice(testimonials.length / 3, (testimonials.length / 3) * 2)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </div>

          <div className="col-lg-4">
            {testimonials
              .slice((testimonials.length / 3) * 2, testimonials.length)
              ?.map(({ content, author }, i) => (
                <TestimonialComp content={content} author={author} key={i} />
              ))}
          </div>
        </div>
      </div>

      {/* <Slider
          navigation
          indicators
          slides={testimonials?.map(({ content, author }, i) => (
            <div
              className="p-4 border border-success rounded-5 mx-3 h-100"
              key={i}
            >
              <h5 className="text-block text-success">{content}</h5>

              <h5 className="text-justify text-success mt-4">{author}</h5>
              {Array.from(Array(5).keys()).map((y) => (
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-success h5"
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
