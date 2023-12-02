import PageSection from "@/components/PageSection";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup, Col } from "reactstrap";

export const socialLinksList = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/makkahwi/",
    label: "Connect and Empower",
    color: "#0A66C2",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962788424973",
    label: "Text Me Anytime",
    color: "#25D366",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    link: "https://t.me/makkahwi",
    label: "Let's Tele-chat",
    color: "#0088CC",
  },
  {
    name: "Phone",
    icon: faPhone,
    link: "tel:+962788424973",
    label: "Call IF NECESSARY",
    color: "#001F3F",
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:SuhaibAhmadAi@hotmail.com",
    label: "Inbox Awaits You",
    color: "#006400",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://facebook.com/makkahwi",
    label: "Let's Chat Forever",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://instagram.com/makkahwi",
    label: "Capture Life Together",
    color: "#E4405F",
  },
  {
    name: "X",
    icon: faXTwitter,
    link: "https://twitter.com/makkahwi",
    label: "Capture Life Together",
    color: "#181717",
  },
];

const ContactSection = () => {
  return (
    <PageSection title="Contact Me" color="light">
      <Col md={12} className="text-center p-0 m-0">
        <ButtonGroup>
          {socialLinksList.map(({ name, icon, link, label, color }, i) => (
            <Button
              style={{ backgroundColor: color }}
              className="w-100 p-3 my-3"
              key={i}
            >
              <a href={link} target="_blank">
                <h5 className="text-center">
                  <FontAwesomeIcon icon={icon} /> {label}
                </h5>
              </a>
            </Button>
          ))}
        </ButtonGroup>
      </Col>

      <Col md={12}></Col>
    </PageSection>
  );
};

export default ContactSection;
