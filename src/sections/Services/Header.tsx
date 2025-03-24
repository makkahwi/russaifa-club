import PageSection from "@/components/PageSection";
import {
  faBasketball,
  faFootball,
  faHourglassHalf,
  faMagnifyingGlassChart,
  faPeopleArrows,
  faPeopleCarry,
  faPersonArrowUpFromLine,
  faPingPongPaddleBall,
  faTheaterMasks,
  faVolleyball,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderSection = () => {
  const list = [
    {
      icon: faFootball,
      title: "كرة القدم",
      content: "شرح الخدمة الأولى كذا وكذا وكذا",
    },
    {
      icon: faPingPongPaddleBall,
      title: "تنس الطاولة",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
    {
      icon: faBasketball,
      title: "كرة السلة",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
    {
      icon: faVolleyball,
      title: "الكرة الطائرة",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
    {
      icon: faPeopleArrows,
      title: "أنشطة رياضية متنوعة",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
    {
      icon: faTheaterMasks,
      title: "فعاليات ثقافية وتوعوية",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
    {
      icon: faPeopleCarry,
      title: "مشاركات مجتمعية",
      content: "شرح الخدمة كذا وكذا وكذا",
    },
  ];

  return (
    <PageSection title="خدمات وانشطة النادي" id="services">
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
