import Image from "next/image";
import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

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
        className="justify-content-center bg-danger"
      >
        <Col lg={5} md={6} className="my-auto px-5 text-white">
          <Row>
            <Col md={12} xs={12} className="text-center d-none d-md-block">
              <img
                src="/images/logo/logo-white-no-text.png"
                width="40%"
                className="my-2"
              />
            </Col>

            <Col md={12} xs={12}>
              <h2 className="mt-4 display-3 fw-bold">NOOR KAYYALI</h2>
              <h4 className="text-light fst-italic">Lead with Impact</h4>
            </Col>
          </Row>
        </Col>

        <Col lg={4} md={6} className="position-relative mt-5">
          <Image
            src="/images/05.png"
            className="position-absolute bottom-0 mx-5 mt-5 d-block d-md-none"
            alt="Noor Photo"
            style={{
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
            width={646 * 0.45}
            height={934 * 0.45}
            priority
          />

          <Image
            src="/images/05.png"
            className="position-absolute bottom-0 mt-5 d-none d-md-block"
            alt="Noor Photo"
            style={{
              left: "50%",
              transform: "translate(-50%, 0%)",
            }}
            width={646 * 0.65}
            height={934 * 0.65}
            priority
          />
        </Col>
      </Row>

      <Navbar />
    </Fragment>
  );
};

export default HeaderSection;
