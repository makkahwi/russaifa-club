import PageSection from "@/components/PageSection";

const JoinMeSection = () => {
  const resources = [
    {
      link: "https://www.moh.gov.sa/HealthAwareness/EducationalContent/Food-and-Nutrition/Pages/default.aspx",
      text: "موسوعة مرجعية عربية",
    },
    { link: "https://www.eatright.org/", text: "موسوعة مرجعية إنجليزية" },
    {
      link: "https://www.eatright.org/food/planning/meals-and-snacks",
      text: "وصفات غذائية صحية",
    },
    {
      link: "https://www.eatright.org/recipes/breakfast",
      text: "وصفات غذائية صحية",
    },
    {
      link: "https://www.myplate.gov/myplate-kitchen/recipes",
      text: "وصفات غذائية صحية",
    },
    { link: "https://fdc.nal.usda.gov/", text: "الحقائق الغذائية للأغذية" },
    {
      link: "https://www.moh.gov.sa/HealthAwareness/MedicalTools/Pages/CalorieCalculate.aspx",
      text: "حساب السعرات الغذائية التي يحتاجها الجسم",
    },
  ];

  return (
    <PageSection title="الموسوعة الغذائية" color="light" id="pedia">
      <div className="col-md-12 mb-4">
        <h5 className="text-block text-justify">
          قريباً ستتوفر موسوعة غذائية شاملة ومفيدة لكم. لكن في الوقت الراهن,
          يمكنكم تصفح المصادر الخاصة بي...
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
