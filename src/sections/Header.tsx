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
          backgroundImage: `url('/images/Pattern.png')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="justify-content-center bg-primary-dark"
      >
        <Col lg={5} md={6} className="my-auto px-5 text-white">
          <h2 className="mt-4 display-3 fw-bold">NOOR KAYYALI</h2>
          <h4 className="text-light fst-italic">Lead with Impact</h4>
        </Col>

        <Col lg={4} md={6} className="position-relative mt-5">
          <Image
            src="/images/0005.png"
            className="position-absolute end-0 bottom-0 me-5 mt-5 d-block d-md-none"
            alt="Noor Photo"
            width={2012 * 0.12}
            height={3332 * 0.12}
            priority
          />

          <Image
            src="/images/0005.png"
            className="position-absolute end-0 bottom-0 me-5 mt-5 d-none d-md-block"
            alt="Noor Photo"
            width={2012 * 0.17}
            height={3332 * 0.17}
            priority
          />
        </Col>
      </Row>

      <Navbar />
    </Fragment>
  );
};

export default HeaderSection;
