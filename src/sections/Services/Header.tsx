import PageSection from "@/components/PageSection";

const HeaderSection = () => {
  const list = [
    {
      title: "خطط غذائية مخصصة",
      content:
        "تصميم نظام غذائي متوازن يناسب احتياجاتك الشخصية وأهدافك الصحية، مع الحفاظ على شعورك بالشبع والرضا طوال اليوم.",
    },
    {
      title: "استشارات غذائية شخصية",
      content:
        "جلسات فردية لتحليل حالتك الصحية وعاداتك الغذائية، وتقديم خطة قابلة للتنفيذ تضمن استمتاعك بالأطعمة المفضلة لديك بكميات مناسبة. يمكن إجراء الجلسات عبر الإنترنت لتناسب راحتك وظروفك.",
    },
    {
      title: "متابعة مستمرة وتحفيز",
      content:
        "دعمك في كل خطوة من رحلتك الصحية، مع تعديلات مستمرة على خطتك الغذائية لضمان تحقيق النتائج المرجوة.",
    },
    {
      title: "برامج إدارة الوزن",
      content:
        "خطط غذائية مرنة وصحية تساعدك في الوصول إلى الوزن المثالي دون الشعور بالحرمان.",
    },
    {
      title: "تحليل عاداتك الغذائية",
      content:
        "مراجعة دقيقة لاختياراتك الغذائية الحالية، مع تقديم نصائح لتحسينها وضمان استفادتك من جميع العناصر الغذائية الضرورية.",
    },
  ];

  return (
    <PageSection title="خدماتي المصممة لك" id="services">
      <div className="col-xl-12">
        <ul className="list-group">
          {list.map(({ title, content }, i) => (
            <li className="list-group-item list-group-item-action" key={i}>
              <h4 className="text-black lh-lg">
                <b>{title}</b>
              </h4>

              <h5 className="text-justify text-dark lh-lg fw-bold">
                {content}
              </h5>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default HeaderSection;
