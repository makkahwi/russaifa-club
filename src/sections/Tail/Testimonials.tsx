import PageSection from "@/components/PageSection";
import Slider from "@/components/Slider";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import { Col } from "reactstrap";
import { SwiperSlide } from "swiper/react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content:
        "This is my first experience with a life coach was quite significant. I genuinely felt how important it is to engage with someone who seeks to understand you and assist in your self-discovery. I had always sought solutions from the external world or other people, often neglecting to focus on myself. Although the number of sessions was limited, they played a significant role in helping me understand who I am and the goals I intend to achieve.",
    },
    {
      author: "Business Leader - KSA",
      content:
        "This is the reality, and truth be told, it might be something ordinary. There were only a few sessions, and they came to an end. However, for me, they occurred at a time when I was feeling lost and depressed, in need of a genuine push. Thanks to God and, indeed, thanks to you, I persisted with them, and I became someone who explores their inner self.",
    },
    {
      author: "IT Manager - UAE",
      content:
        "I highly recommend Mrs. Noor as a life coach for anyone seeking personal and professional growth. I have had the pleasure of working with Mrs. Noor for 4 Sessions, and her guidance and expertise have been invaluable in helping me achieve my goals and improve my overall well-being.",
    },
    {
      author: "",
      content:
        "First and foremost, Mrs. Noor is a great listener. She takes the time to understand your unique situation, challenges, and aspirations, without judgment. Mrs. Noor has an exceptional ability to ask thought-provoking questions, allowing you to dig deep and gain clarity on what truly matters to you. This process of self-reflection has been instrumental in helping me uncover my strengths, values, and passions.",
    },
    {
      author: "",
      content:
        "One of the aspects I appreciate most about working with Mrs. Noor is their holistic approach to coaching. She understands that personal and professional lives are intertwined, and achieving success and happiness in one area can positively impact the other. Mrs. Noor has helped me establish a healthy work-life balance by identifying and addressing areas of stress, enhancing my resilience, and fostering positive habits that have had a profound impact on my overall well-being.",
    },
    {
      author: "",
      content:
        "Moreover, Mrs. Noor pushes me outside of my comfort zone in a supportive and empowering way. She encourages growth and challenge limiting beliefs, helping me overcome self-imposed barriers and break through obstacles that were holding me back. Their wealth of knowledge and experience, combined with their intuitive understanding of my needs, have provided me with valuable insights and strategies for personal growth and success.",
    },
    {
      author: "HR Manager - KSA",
      content:
        "In addition to their exceptional coaching skills, Mrs. Noor is also a tremendous source of motivation and encouragement. She genuinely believes in their clients' potential and provide unwavering support throughout the coaching journey. Their enthusiasm is contagious, and their positive energy has inspired me to stay committed and motivated on my path towards self-improvement.",
    },
    {
      author: "",
      content:
        "Overall, my experience with Mrs. Noor has been nothing short of transformative. She possesses the qualities, skills, and experience to guide and empower individuals to reach their full potential. If you are seeking a life coach who will listen attentively, challenge you to grow, and provide unwavering support, Mrs. Noor is an exceptional choice. Their coaching has had a profound impact on my life, and I am confident she will do the same for you.",
    },
    {
      author: "Business Leader",
      content:
        "Words can’t describe the level of caring and dedication I found in the experience of having Mrs. Noor as a life coach. I found here to be kind, informative, eager to help me and full of energy. Her positive attitude is contagious. Wish you all the best Mrs. Noor I truly am greatly grateful for your efforts, you are a wonderful soul.",
    },
    {
      author: "Business Leader - Jordan",
      content:
        "I am deeply grateful for the invaluable guidance and unwavering support you have provided during our sessions. Your help has made a profound impact on my life.",
    },
  ];

  return (
    <PageSection title="Testimonials" id="testimonials">
      <Col md={12} className="text-justify my-4">
        <Slider
          slides={
            <Fragment>
              {testimonials?.map(({ content, author }, i) => (
                <SwiperSlide
                  className="mySwiper-slider rounded-4 p-5 bg-white border border-3 border-primary"
                  key={i}
                >
                  <div className="px-4">
                    <h5 className="text-justify text-dark">{content}</h5>

                    <h5 className="text-justify text-primary mt-4">{author}</h5>
                    {Array.from(Array(5).keys()).map((y) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-primary h5"
                        key={y}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Fragment>
          }
          coverflow
        />
      </Col>
    </PageSection>
  );
};

export default TestimonialsSection;
