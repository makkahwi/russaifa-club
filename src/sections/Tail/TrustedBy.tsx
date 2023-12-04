import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const TrustedBySection = () => {
  const partners = [
    { logo: "orange.png", link: "Dubai" },
    { logo: "cranfield.png", link: "Dubai" },
    { logo: "efe.png", link: "Dubai" },
    { logo: "merck.png", link: "Dubai" },
    { logo: "joddb.png", link: "Dubai" },
    { logo: "real.jpg", link: "Dubai" },
    { logo: "johnson.png", link: "Dubai" },
    { logo: "giz.png", link: "Dubai" },
    { logo: "gp.png", link: "Dubai" },
    { logo: "kempinski.png", link: "Dubai" },
    { logo: "pfizer.png", link: "Dubai" },
    { logo: "tabuk.png", link: "Dubai" },
    { logo: "usaid.png", link: "Dubai" },
    { logo: "zain.png", link: "Dubai" },
  ];

  return (
    <PageSection title="Trusted By" noMinHeight color="light">
      {partners.map(({ logo, link }, i) => (
        <Col md={2} className="p-5" key={i}>
          <img src={`/images/partners/${logo}`} width="100%" />
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
