import PageSection from "@/components/PageSection";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCar,
  faEnvelope,
  faHome,
  faLocation,
  faLocationPin,
  faLocationPinLock,
  faMobile,
  faPhone,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));

export const socialLinksList = [
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962777401641",
    label: "عبر الواتس اب في أي وقت",
    color: "#1fb355",
    common: true,
  },
  {
    name: "Mobile",
    icon: faMobile,
    link: "tel:+962777401641",
    label: "الاتصال على رقم المحمول",
    color: "#04235a",
    common: true,
  },
  {
    name: "Landline",
    icon: faPhone,
    link: "tel:+96253757017",
    label: "الاتصال على رقم النادي",
    color: "#f9ae15",
    common: true,
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:russaifaclub@gmail.com",
    label: "راسلنا على البريد الإلكتروني",
    color: "#04235a",
    common: true,
  },
  {
    name: "Location",
    icon: faCar,
    link: "https://maps.app.goo.gl/pKxbfeHEs5UXKupU6",
    label: "زرنا في مقر النادي",
    color: "#f9ae15",
    common: true,
  },
];

const ContactSection = () => {
  const whatYouWillGet = [
    "سنقوم بتحليل عاداتك الغذائية الحالية",
    "فهم تجاربك السابقة في التغذية والرجيم",
    "استشكاف دوافعك وأهدافك",
    "التعرف على وضعك الصحي الحالي",
    "بناء الخطة العلاجية",
  ];

  return (
    <PageSection title="تواصل معنا الآن" id="contact">
      {/* <div className="col-md-12 text-center p-0 m-0">
        <h5 className="mb-5 text-primary">في أول تواصل بيننا...</h5>

        <div className="row justify-content-center">
          {whatYouWillGet.map((point, i) => (
            <div className="col-6 col-lg-3 col-xl-2 my-3" key={i}>
              <div className="d-flex border rounded-5 border-primary w-100 h-100 p-3">
                <h6 className="text-primary m-auto">{point}</h6>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="col-md-12 text-center p-0 m-0 my-5">
        <div className="row justify-content-center">
          {socialLinksList
            .filter(({ common }) => common)
            .map(({ name, icon, link, label, color }, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={i}>
                <a href={link} target="_blank">
                  <button
                    style={{ backgroundColor: color }}
                    className="btn btn-transparent p-3 my-3 w-100"
                  >
                    <h6 className="text-center text-white p-0 m-0">
                      <FontAwesomeIcon icon={icon} /> {label}
                    </h6>
                  </button>
                </a>
              </div>
            ))}
        </div>
      </div>

      <div className="col-md-12 p-0 m-0">
        <ContactForm />
      </div>
    </PageSection>
  );
};

export default ContactSection;
