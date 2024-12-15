import PageSection from "@/components/PageSection";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));

export const socialLinksList = [
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962797035869",
    label: "عبر الواتس اب في أي وقت",
    color: "#1fb355",
    common: true,
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:fatemamohammad2008@gmail.com",
    label: "راسلني على البريد الإلكتروني",
    color: "#388e3c",
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
    <PageSection title="تواصل معي الآن" id="contact">
      <div className="col-md-12 text-center p-0 m-0">
        <h5 className="mb-5 text-dark">في أول تواصل بيننا...</h5>

        <div className="row justify-content-center">
          {whatYouWillGet.map((point, i) => (
            <div className="col-xs-12 col-lg-3 col-xl-2 my-3" key={i}>
              <div className="d-flex border rounded-5 border-dark w-100 h-100 p-3">
                <h6 className="text-dark m-auto">{point}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-12 text-center p-0 m-0 my-5">
        <div className="row justify-content-center">
          {socialLinksList
            .filter(({ common }) => common)
            .map(({ name, icon, link, label, color }, i) => (
              <div className="col-xs-6 col-md-4 col-lg-3" key={i}>
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
