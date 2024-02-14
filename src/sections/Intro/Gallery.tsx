import PageSection from "@/components/PageSection";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const GallerySection = () => {
  const images = [
    {
      src: "IMG_8701.jpg",
      width: 9,
    },
    {
      src: "z.jpg",
      width: 3,
    },
    {
      src: "IMG_6843.jpg",
      width: 6,
    },
    {
      src: "IMG_3683.jpg",
      width: 6,
    },
  ];

  return (
    <Row className="p-0 m-0">
      {images.map(({ src, width }, i) => (
        <Col xs={width} className="p-0 m-0" key={i}>
          <div
            style={{
              height: "40vh",
              backgroundImage: `url('/images/gallery/${src}')`,
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-100 p-0 m-0"
          />
        </Col>
      ))}
    </Row>
  );
};

export default GallerySection;
