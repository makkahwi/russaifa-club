import PageSection from "@/components/PageSection";
import {
  faBalanceScale,
  faGasPump,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutIntroSection = () => {
  const cols = [
    { icon: faBalanceScale, content: "متوازنة" },
    { icon: faUsers, content: "مناسبة لكل الأعمار" },
    { icon: faGasPump, content: "بدون تجويع" },
  ];

  return (
    <PageSection>
      <div className="col-lg-12 my-auto">
        <h4 className="text-justify lh-lg text-primary">
          بتعاني من مشاكل زيادة الوزن؟ حاولت أكثر من برنامج تغذية مثل الكيتو وما
          نزل وزنك؟ الحل عند الأخصائية فاطمة محمد. برامج غذائية...
        </h4>

        <div className="row mt-5">
          {cols.map(({ icon, content }, i) => (
            <div className="col-md-4 py-5 text-center" key={i}>
              <h1>
                <FontAwesomeIcon icon={icon} className="mb-3" />
              </h1>

              <h3>{content}</h3>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default AboutIntroSection;
