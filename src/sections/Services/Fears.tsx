import PageSection from "@/components/PageSection";
import {
  faCow,
  faFaceGrinBeamSweat,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FearSection = async () => {
  const cols = [
    {
      title: "خوف من الشعور المستمر بالجوع؟",
      icon: faFaceGrinBeamSweat,
      content:
        "الشعور بالجوع ليس جزءًا من أي نظام غذائي صحي. الأنظمة الغذائية المتوازنة تعتمد على توفير وجبات متكاملة وغنية بالعناصر الغذائية التي تمنحك الشبع والطاقة طوال اليوم. بدلاً من الجوع، ستشعر بالتحكم والسعادة.",
    },
    {
      title: "لا تريد الابتعاد عن وجباتك المفضلة؟",
      icon: faHeartCrack,
      content:
        "النظام الغذائي لا يعني قول وداعًا لأغلب الأطعمة المفضلة لديك. يمكننا تصميم خطة غذائية تسمح لك بالاستمتاع بها بكميات مناسبة وفي أوقات محددة, مع الحفاظ على برنامج الغذائي الصحي.",
    },
    {
      title: "هناك أطعمة ليست سيئة كما تعتقد",
      icon: faCow,
      content:
        "الدهون ليست عدوًا، والكربوهيدرات ليست المشكلة! عندما يتم تناولها بالكميات الصحيحة، تصبح هذه الأطعمة جزءًا أساسيًا من نظام غذائي صحي ومتوازن. نحن هنا لنساعدك على تحقيق ذلك.",
    },
  ];

  return (
    <PageSection title="وداعًا لمخاوف الرجيم!" id="blog" color="light">
      <div className="row lh-lg justify-content-center">
        <h5 className="col-md-12 text-center lh-lg">
          هل تفكر في البدء بنظام غذائي، ولكن{" "}
          <b className="text-danger">تخشى الشعور بالجوع أو الحرمان</b> من
          الأطعمة المفضلة لديك؟ لست وحدك! معظم الناس يشعرون بالقلق عند سماع كلمة
          رجيم، لكن الحقيقة مختلفة تمامًا عما تعتقد.
        </h5>

        {cols.map(({ title, content, icon }, i) => (
          <div className="col-xl-4 col-lg-6 mt-5" key={i}>
            <div className="card h-100">
              <div className="card-body p-5">
                <div className="card-text">
                  <h1 className="text-center display-1 text-dark mb-4">
                    <FontAwesomeIcon icon={icon} />
                  </h1>

                  <h4 className="text-dark mb-4">
                    <b>{title}</b>
                  </h4>

                  <h6 className="lh-lg text-justify lh-lg">{content}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default FearSection;
