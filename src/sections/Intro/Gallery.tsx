import Slider from "@/components/Slider";
import { Fragment } from "react";
import { Col, Row } from "reactstrap";
import { SwiperSlide } from "swiper/react";

const GallerySection = () => {
  const images = [
    {
      src: "a.jpg",
      width: 9,
    },
    {
      src: "b.jpg",
      width: 3,
    },
    {
      src: "d.jpg",
      width: 6,
    },
    {
      src: "f.jpg",
      width: 6,
    },
    {
      src: "e.jpg",
      width: 6,
    },
    {
      src: "g.jpg",
      width: 6,
    },
    {
      src: "h.jpg",
      width: 6,
    },
  ];

  return (
    <Slider
      autoPlayTime={3000}
      slides={
        <Fragment>
          {images.map(({ src, width }, i) => (
            <SwiperSlide className="mySwiper-slider p-0 w-100" key={i}>
              <div
                style={{
                  height: "75vh",
                  backgroundImage: `url('/images/gallery/${src}')`,
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
                className="w-100 p-0 m-0"
              />
            </SwiperSlide>
          ))}
        </Fragment>
      }
    />
  );
};

export default GallerySection;
