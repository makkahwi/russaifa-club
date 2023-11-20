import PageSection from "@/components/PageSection";
import { useState } from "react";
import { Button, ButtonGroup, Col } from "reactstrap";

const ContactSection = () => {
  const contacts = [
    {
      link: "https://web.facebook.com/Noorcoach/?ref=bookmarks",
      icon: "facebook",
      color: "#1877F2",
    },
    {
      link: "https://www.instagram.com/noorkayyali303/",
      icon: "instagram",
      color: "#E4405F",
    },
    {
      link: "https://twitter.com/Noorkayyali303?lang=en",
      icon: "twitter",
      color: "#14171A",
    },
    {
      link: "https://www.linkedin.com/in/noor-kayyali-a4668811/",
      icon: "linkedin",
      color: "#0A66C2",
    },
    {
      link: "https://www.youtube.com/channel/UCdCODCOiHkQXfCGHGDQel4Q/featured",
      icon: "youtube",
      color: "#FF0000",
    },
  ];

  return (
    <PageSection title="Contact Me">
      <Col md={12} className="text-center p-0 m-0">
        <ButtonGroup vertical>
          {contacts.map(({ icon, color }, i) => (
            <Button
              color="secondary"
              style={{ backgroundColor: color }}
              key={i}
            >
              {icon}
            </Button>
          ))}
        </ButtonGroup>
      </Col>

      <Col md={12}></Col>
    </PageSection>
  );
};

export default ContactSection;
