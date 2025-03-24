"use client";

import CountUp from "react-countup";

const NumberCounters = () => {
  const stats = [
    { title: "عدد الأعضاء", count: 4200 },
    { title: "عدد الإنجازات", count: 500 },
    { title: "عمر النادي", count: 36 },
  ];

  return (
    <div className="row justify-content-center mb-5">
      {stats.map(({ title, count }, i) => {
        return (
          <div className="col-6 col-md-4 my-auto text-center my-5" key={i}>
            <h1 className="text-primary">
              <CountUp start={0} end={count} duration={3} enableScrollSpy />
            </h1>
            <h5 className="mt-2 text-primary">{title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default NumberCounters;
