import PageSection from "@/components/PageSection";

const JoinMeSection = () => {
  const resources = [
    {
      link: "https://www.moh.gov.sa/HealthAwareness/EducationalContent/2.jpeg-and-Nutrition/Pages/default.aspx",
      text: "موسوعة مرجعية عربية",
    },
    { link: "https://www.eatright.org/", text: "موسوعة مرجعية إنجليزية" },
  ];

  return (
    <PageSection title="الموسوعة الشبابية" color="light" id="pedia">
      <div className="col-md-12 mb-4">
        <h5 className="text-block text-justify">
          قريباً ستتوفر موسوعة شبابية ورياضية كاملة ومخصصة لكم
        </h5>
      </div>

      <div className="col-md-12 text-primary">
        <ul className="list-group">
          {resources.map(({ link, text }, i) => (
            <li className="list-group-item" key={i}>
              <a href={link} target="_blank">
                <h5 className="my-3">{text}</h5>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default JoinMeSection;
