import Image from "next/image";
import { Fragment } from "react";
import { Col, Row } from "reactstrap";

import Navbar from "./Navbar";

const HeaderSection = () => {
  return (
    <Fragment>
      <Row
        style={{
          minHeight: "90vh",
          background: "black url('/images/BG.jpg') no-repeat fixed center",
          backgroundSize: "cover",
        }}
        className="justify-content-center"
      >
        <Col lg={5} md={6} className="my-auto px-5 text-white">
          <h3 className="text-light">Lead with Impact</h3>
          <h1 className="mt-4 display-1 fw-bold">NOOR KAYYALI</h1>
        </Col>

        <Col lg={4} md={6} className="position-relative">
          <Image
            src="/images/noor-1.png"
            className="position-absolute end-0 bottom-0 me-5"
            alt="Noor Photo"
            width={635 * 0.6}
            height={940 * 0.6}
            priority
          />
        </Col>
      </Row>

      <Navbar />
    </Fragment>
  );
};

export default HeaderSection;
