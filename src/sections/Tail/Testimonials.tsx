import { getTestimonials } from "@/api";
import PageSection from "@/components/PageSection";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TestimonialProps {
  author: string;
  content: string;
}

const TestimonialsSection = async () => {
  const testimonials: TestimonialProps[] = [
    {
      author: "فلان",
      content: "والله أرتب نادي فيكي يا رصيفة",
    },
    {
      author: "علان",
      content:
        "بصراحة البطولة اللي عملناها من شهرين مش بطالة, يا ريت تكرروها أكثر من مرة خلال السنة, وتعملوا مثلا بطولة للأطفال وبطولة للمراهقين وبطولة للجامعيين.",
    },
    {
      author: "علاك لبان",
      content:
        "انا رأيي تسكروا النادي لأنه كله طوش ومشاكل وفش فيه شغل ولا فيه مردود ولا فوائد",
    },
    {
      author: "علان",
      content:
        "بصراحة البطولة اللي عملناها من شهرين مش بطالة, يا ريت تكرروها أكثر من مرة خلال السنة, وتعملوا مثلا بطولة للأطفال وبطولة للمراهقين وبطولة للجامعيين.",
    },
    {
      author: "فلان",
      content: "والله أرتب نادي فيكي يا رصيفة",
    },
    {
      author: "علاك لبان",
      content:
        "انا رأيي تسكروا النادي لأنه كله طوش ومشاكل وفش فيه شغل ولا فيه مردود ولا فوائد",
    },
    {
      author: "علان",
      content:
        "بصراحة البطولة اللي عملناها من شهرين مش بطالة, يا ريت تكرروها أكثر من مرة خلال السنة, وتعملوا مثلا بطولة للأطفال وبطولة للمراهقين وبطولة للجامعيين.",
    },
    {
      author: "علان",
      content:
        "بصراحة البطولة اللي عملناها من شهرين مش بطالة, يا ريت تكرروها أكثر من مرة خلال السنة, وتعملوا مثلا بطولة للأطفال وبطولة للمراهقين وبطولة للجامعيين.",
    },
    {
      author: "علاك لبان",
      content:
        "انا رأيي تسكروا النادي لأنه كله طوش ومشاكل وفش فيه شغل ولا فيه مردود ولا فوائد",
    },
  ];

  const TestimonialComp = ({ content = "", author = "" }) => (
    <div className="p-4 border border-primary rounded-5 mx-1 mb-4">
      <p className="text-justify text-primary">{content}</p>

      <h6 className="text-primary mt-4">{author}</h6>
      {Array.from(Array(5).keys()).map((y) => (
        <FontAwesomeIcon icon={faStar} className="text-primary h6" key={y} />
      ))}
    </div>
  );

  return (
    <PageSection title="شهادات الاعضاء والمتعاملين" id="testimonials">
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
              className="p-4 border border-primary rounded-5 mx-3 h-100"
              key={i}
            >
              <h5 className="text-block text-primary">{content}</h5>

              <h5 className="text-justify text-primary mt-4">{author}</h5>
              {Array.from(Array(5).keys()).map((y) => (
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-primary h5"
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
