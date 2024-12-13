"use client";

import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "سنوات خبرة", count: 5 },
    { title: "مراجع", count: 2000 },
  ];

  return (
    <div className="row justify-content-center mb-5">
      {stats.map(({ title, count }, i) => {
        return (
          <div className="col-xs-12 col-md-3 my-auto text-center my-5" key={i}>
            <h1 className="text-dark">
              <CountUp start={0} end={count} duration={3} enableScrollSpy />
            </h1>
            <h5 className="mt-2 text-dark">{title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default NumberCounters;
