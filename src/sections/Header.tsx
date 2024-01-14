import Image from "next/image";
import { Fragment } from "react";
import { Col, Row } from "reactstrap";

import Navbar from "./Navbar";

const HeaderSection = () => {
  return (
    <Fragment>
      <Row
        style={{
          minHeight: "100vh",
          background: "black url('/images/BG.jpg') no-repeat fixed center",
          backgroundSize: "cover",
        }}
        className="justify-content-center"
      >
        <Col lg={5} md={6} className="my-auto px-5 text-white">
          <h2 className="mt-4 display-3 fw-bold">NOOR KAYYALI</h2>
          <h4 className="text-light fst-italic">Lead with Impact</h4>
        </Col>

        <Col lg={4} md={6} className="position-relative mt-5">
          <Image
            src="/images/gallery/IMG-20231128-WA0017.png"
            className="position-absolute end-0 bottom-0 me-5 mt-5"
            alt="Noor Photo"
            width={1200 * 0.36}
            height={1600 * 0.36}
            priority
          />
        </Col>
      </Row>

      <Navbar />
    </Fragment>
  );
};

export default HeaderSection;
