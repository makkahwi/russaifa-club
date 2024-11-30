"use client";

import { Col } from "react-bootstrap";
import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "سنوات خبرة", count: 8 },
    { title: "مراجع", count: 2000 },
  ];

  return (
    <div className="row justify-content-center mb-5">
      {stats.map(({ title, count }, i) => {
        return (
          <Col xs={12} md={3} className="my-auto text-center my-5" key={i}>
            <h1 className="text-dark">
              <CountUp start={0} end={count} duration={3} enableScrollSpy />
            </h1>
            <h5 className="mt-2 text-dark">{title}</h5>
          </Col>
        );
      })}
    </div>
  );
};

export default NumberCounters;
