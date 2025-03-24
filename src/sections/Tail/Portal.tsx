import PageSection from "@/components/PageSection";

const PortalSection = () => {
  const list = [
    "لجعل التجربة الشبابية أكثر عصرية وحداثة, قريباً سنوفر بوابة رقمية للنادي للأعضاء تتعلق بجميع أنشطتهم وبياناتهم.",
  ];

  return (
    <PageSection title="بوابة النادي الإلكترونية" id="hdl" color="light">
      <div className="col-xl-12 order-2 order-xl-1">
        <ul>
          {list.map((element, i) => (
            <li key={i}>
              <h5 className="text-justify text-black lh-lg">{element}</h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-xl-12 px-3 order-1 order-xl-2 text-center"></div>

      <div className="col-xl-12 px-3 order-3 text-center">
        <a
          href="https://health-empowerment-lifestyle.vercel.app/"
          target="_blank"
        >
          {" "}
          <button className="btn btn-primary text-white">قريباً</button>
        </a>
      </div>
    </PageSection>
  );
};

export default PortalSection;
