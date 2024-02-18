import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, useSwiper } from "swiper/react";

interface props {
  slides: React.ReactNode;
  coverflow?: boolean;
  navigation?: boolean;
  slidesCount?: number;
  autoPlayTime?: number;
}

const Slider = ({
  slides,
  navigation,
  coverflow,
  autoPlayTime = 5000,
  slidesCount = 2,
}: props) => {
  const swiper = useSwiper();

  const modules = [Pagination, Autoplay];

  if (navigation) {
    modules.push(Navigation);
  }

  if (coverflow) {
    modules.push(EffectCoverflow);
  }

  return (
    <Container fluid className="swiper-container col-md-12">
      <Swiper
        // observer
        // observeParents
        // watchOverflow={false}
        // watchSlidesProgress
        modules={modules}
        centeredSlides={coverflow ? true : false}
        className="mySwiper"
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // pagination={{ clickable: true }} // uncomment to add the bullets under
        spaceBetween={100}
        grabCursor
        effect={coverflow ? "coverflow" : undefined}
        coverflowEffect={
          coverflow
            ? {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 6, // controls the transition of the cards
                slideShadows: true,
              }
            : undefined
        }
        loop={true}
        autoplay={{
          delay: autoPlayTime,
          disableOnInteraction: true,
        }}
        updateOnWindowResize={true}
        // slidesPerView={slidesCount || 1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            updateOnWindowResize: true,
          },
          768: {
            slidesPerView: 1, // was 1
            updateOnWindowResize: true,
          },
          1024: {
            slidesPerView: slidesCount - 1,
            updateOnWindowResize: true,
          },
          1560: {
            slidesPerView: slidesCount,
            updateOnWindowResize: true,
          },
        }}
      >
        {navigation && (
          <FontAwesomeIcon
            className="swiper-button-prev bg-white p-2 px-3 rounded-circle text-primary"
            icon={faArrowLeft}
            onClick={() => swiper.slidePrev()}
          />
        )}

        {slides}

        {navigation && (
          <FontAwesomeIcon
            className="swiper-button-next bg-white p-2 px-3 rounded-circle text-primary"
            icon={faArrowRight}
            onClick={() => swiper.slideNext()}
          />
        )}
      </Swiper>
    </Container>
  );
};

export default Slider;
