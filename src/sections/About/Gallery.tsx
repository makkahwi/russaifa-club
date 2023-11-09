import PageSection from "@/components/PageSection";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const GallerySection = () => {
  const images = [
    {
      src: "1.jpg",
      width: 3,
    },
    {
      src: "2.jpg",
      width: 9,
    },
    {
      src: "3.jpg",
      width: 5,
    },
    {
      src: "4.jpg",
      width: 7,
    },
  ];

  return (
    <Row className="p-0 m-0">
      {images.map(({ src, width }, i) => (
        <Col md={width} className="p-0 m-0" key={i}>
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
