import PageSection from "@/components/PageSection";
import {
  faHourglassHalf,
  faMagnifyingGlassChart,
  faPeopleArrows,
  faPersonArrowUpFromLine,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = () => {
  const list = [
    {
      icon: faPersonArrowUpFromLine,
      title: "خطط غذائية مخصصة",
      content:
        "تصميم نظام غذائي متوازن يناسب احتياجاتك الشخصية وأهدافك الصحية، مع الحفاظ على شعورك بالشبع والرضا طوال اليوم.",
    },
    {
      icon: faPeopleArrows,
      title: "استشارات غذائية شخصية",
      content:
        "جلسات فردية لتحليل حالتك الصحية وعاداتك الغذائية، وتقديم خطة قابلة للتنفيذ تضمن استمتاعك بالأطعمة المفضلة لديك بكميات مناسبة. يمكن إجراء الجلسات عبر الإنترنت لتناسب راحتك وظروفك.",
    },
    {
      icon: faHourglassHalf,
      title: "متابعة مستمرة وتحفيز",
      content:
        "دعمك في كل خطوة من رحلتك الصحية، مع تعديلات مستمرة على خطتك الغذائية لضمان تحقيق النتائج المرجوة.",
    },
    {
      icon: faWeightScale,
      title: "برامج إدارة الوزن",
      content:
        "خطط غذائية مرنة وصحية تساعدك في الوصول إلى الوزن المثالي دون الشعور بالحرمان.",
    },
    {
      icon: faMagnifyingGlassChart,
      title: "تحليل عاداتك الغذائية",
      content:
        "مراجعة دقيقة لاختياراتك الغذائية الحالية، مع تقديم نصائح لتحسينها وضمان استفادتك من جميع العناصر الغذائية الضرورية.",
    },
  ];

  return (
    <PageSection title="خدماتي المصممة لك" id="services">
      <div className="col-xl-12">
        <ul className="list-group">
          {list.map(({ title, content, icon }, i) => (
            <li className="list-group-item list-group-item-action" key={i}>
              <h4 className="text-success lh-lg d-flex">
                <h1 className="text-success mx-2">
                  <FontAwesomeIcon icon={icon} />
                </h1>
                {title}
              </h4>

              <h5 className="text-justify text-black lh-lg">{content}</h5>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default HeaderSection;
