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
    {
      title: "استشارات غذائية فردية",
      content:
        "احصل على استشارات شخصية مباشرة معي لمساعدتك على تحقيق أهدافك الصحية والغذائية. يمكن إجراء الجلسات بشكل حضوري أو عبر الإنترنت لتناسب راحتك وظروفك.",
    },
  ];

  return (
    <PageSection title="خدماتي المصممة لك" id="services">
      <div className="col-xl-6 order-2 order-xl-1">
        <ul>
          {list.map(({ title, content }, i) => (
            <li key={i}>
              <h5 className="text-justify lh-lg text-dark lh-lg">
                <b>{title}:</b> {content}
              </h5>
            </li>
          ))}
        </ul>
      </div>

      <div className="col-xl-6 px-3 order-1 order-xl-2">
        <img
          alt="photo"
          src="/images/gallery/Food.jpg"
          className="rounded-5 soft-edges w-100 mb-5"
        />
      </div>
      {/* <Col lg={12} className="my-auto"></Col> */}
    </PageSection>
  );
};

export default HeaderSection;
