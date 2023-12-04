import PageSection from "@/components/PageSection";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";

export const socialLinksList = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/noor-kayyali-a4668811/",
    label: "Connect and Empower",
    color: "#0A66C2",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    link: "https://wasap.my/962797030228",
    label: "Text Me Anytime",
    color: "#25D366",
  },
  {
    name: "Phone",
    icon: faPhone,
    link: "tel:+962797030228",
    label: "Call Me Maybe",
    color: "#001F3F",
  },
  {
    name: "Email",
    icon: faEnvelope,
    link: "mailto:ask@noorkayyali.com",
    label: "Inbox Awaits You",
    color: "#006400",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    link: "https://facebook.com/Noorcoach",
    label: "Let's Chat Forever",
    color: "#1877F2",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/noorkayyali303/",
    label: "Capture Life Together",
    color: "#E4405F",
  },
  {
    name: "X",
    icon: faXTwitter,
    link: "https://twitter.com/Noorkayyali303",
    label: "Join My Conversations",
    color: "#181717",
  },
  {
    name: "Youtube",
    icon: faYoutube,
    link: "https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q",
    label: "Subscribe, Watch, Like",
    color: "#FF0000",
  },
];

const inputs = [
  { name: "name", title: "Name", type: "text", required: true },
  { name: "subject", title: "Subject", type: "text", required: false },
  {
    name: "message",
    title: "Message",
    type: "textarea",
    required: true,
    fullWidth: true,
  },
];

const ContactSection = () => {
  return (
    <PageSection title="Contact Me" id="contact">
      <Col md={12} className="text-center p-0 m-0">
        <Row>
          {socialLinksList.map(({ name, icon, link, label, color }, i) => (
            <Col sm={6} md={3} key={i}>
              <a href={link} target="_blank">
                <Button
                  style={{ backgroundColor: color }}
                  className="p-3 m-3 w-100"
                >
                  <h5 className="text-center p-0 m-0">
                    <FontAwesomeIcon icon={icon} /> {label}
                  </h5>
                </Button>
              </a>
            </Col>
          ))}
        </Row>
      </Col>

      <Col md={12} className="mt-5">
        <Row>
          {inputs.map(({ name, title, required, type, fullWidth }, i) => (
            <Col md={fullWidth ? 12 : 6} key={i}>
              <FormGroup>
                <Label for={name}>
                  {title}
                  {required ? <span className="text-danger">{" *"}</span> : ""}
                </Label>
                <Input
                  id={name}
                  name={name}
                  placeholder={title}
                  className="py-3"
                />
              </FormGroup>
            </Col>
          ))}
        </Row>
      </Col>
    </PageSection>
  );
};

export default ContactSection;
