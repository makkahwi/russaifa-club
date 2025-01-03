import PageSection from "@/components/PageSection";
import {
  faBriefcase,
  faBullseye,
  faFaceGrinStars,
  faHandHoldingDollar,
  faLightbulb,
  faPersonChalkboard,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgramsSection = async () => {
  const programGroups = [
    { icon: "faBriefcase", title: "برنامج 1", programs: ["أ", "ب", "ج", "د"] },
    { icon: "faBullseye", title: "برنامج 2", programs: ["أ", "ب", "ج", "د"] },
  ];

  const renderIcon = (name = "") => {
    switch (name) {
      case "faBriefcase":
        return faBriefcase;
      case "faBullseye":
        return faBullseye;
      case "faFaceGrinStars":
        return faFaceGrinStars;
      case "faHandHoldingDollar":
        return faHandHoldingDollar;
      case "faLightbulb":
        return faLightbulb;
      case "faPersonChalkboard":
        return faPersonChalkboard;
      case "faUsers":
        return faUsers;
      default:
        return faUsers;
    }
  };

  return (
    <PageSection title="برامج التغذية" id="programs">
      <div className="col-12">
        <div className="card border border-success border-2 rounded-5 py-4 my-3 w-100">
          <div className="card-body">
            <div className="row justify-content-center">
              {programGroups?.map(({ icon, title, programs }, i) => (
                <div
                  className={`col-lg-6 mb-5 col-xl-${i < 3 ? 4 : 3}`}
                  key={i}
                >
                  <h1 className="text-center mb-4 text-success display-3">
                    <FontAwesomeIcon icon={renderIcon(icon)} />
                  </h1>

                  <h3 className="text-center mb-4 text-success">{title}</h3>

                  <div className="list-group list-group-flush">
                    {programs.map((program, y) => (
                      <div className="list-group-item" key={y}>
                        <h5 className="text-center my-1 text-success">
                          {program}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default ProgramsSection;
