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
      title: "الخدمة 1",
      content: "شرح الخدمة الأولى كذا وكذا وكذا",
    },
    {
      icon: faPeopleArrows,
      title: "الخدمة 2",
      content: "شرح الخدمة الثانية كذا وكذا وكذا",
    },
  ];

  return (
    <PageSection title="خدمات النادي" id="services">
      <div className="col-xl-12">
        <ul className="list-group">
          {list.map(({ title, content, icon }, i) => (
            <li className="list-group-item list-group-item-action" key={i}>
              <h4 className="text-primary lh-lg d-flex">
                <div className="text-primary mx-2 h1">
                  <FontAwesomeIcon icon={icon} />
                </div>
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
