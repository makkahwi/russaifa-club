"use client";

import Image from "next/image";
import { Col } from "react-bootstrap";
import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "Organizations Served", count: 200 },
    { title: "Workshops Held", count: 2000 },
    { title: "Persons Mentored", count: 12000 },
  ];

  return stats.map(({ title, count }, i) => {
    const size = (0.35 * String(count).length) / 5;

    return (
      <Col xs={12} md={3} className="my-auto text-center my-5" key={i}>
        <Image
          src="/images/logo/sun.png"
          className="my-2"
          alt="Sun"
          width={409 * size}
          height={244 * size}
          priority
        />
        <h1 className="text-danger">
          <CountUp start={0} end={count} duration={3} enableScrollSpy />
        </h1>
        <h5 className="mt-2 text-dark">{title}</h5>
      </Col>
    );
  });
};

export default NumberCounters;
