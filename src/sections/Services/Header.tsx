import ImageComp from "@/components/Image";
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
        "جلسات فردية لتحليل حالتك الصحية وعاداتك الغذائية، وتقديم خطة قابلة للتنفيذ تضمن استمتاعك بالأطعمة المفضلة لديك بكميات مناسبة.",
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
    <PageSection title="خدماتي المصممة لكم" id="services">
      <div className="col-xl-6">
        <ul>
          {list.map(({ title, content }, i) => (
            <li key={i}>
              <h5 className="text-justify text-dark lh-lg">
                <b>{title}:</b> {content}
              </h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-xl-6 px-3">
        <img
          alt="photo"
          src="/images/gallery/Food.jpg"
          className="rounded-5 soft-edges w-100"
        />
      </div>
      {/* <Col lg={12} className="my-auto"></Col> */}
    </PageSection>
  );
};

export default HeaderSection;
