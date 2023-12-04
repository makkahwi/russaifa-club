import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const TrustedBySection = () => {
  const partners = [
    { logo: "orange.png", link: "https://orange.jo" },
    { logo: "cranfield.png", link: "https://www.cranfield.ac.uk/" },
    { logo: "efe.png", link: "https://efejordan.org/" },
    { logo: "merck.png", link: "https://www.merckgroup.com" },
    { logo: "joddb.png", link: "https://www.joddb.com/" },
    { logo: "real.jpg", link: "https://realcosmetics.jo/" },
    { logo: "johnson.png", link: "https://www.jnj.com/" },
    { logo: "giz.png", link: "https://www.giz.de/en" },
    { logo: "gp.png", link: "https://www.gpstrategies.com/" },
    { logo: "kempinski.png", link: "https://www.kempinski.com/" },
    { logo: "pfizer.png", link: "https://www.pfizer.com/" },
    { logo: "tabuk.png", link: "https://www.tabukpharmaceuticals.com/" },
    { logo: "usaid.png", link: "https://www.usaid.gov/jordan" },
    {
      logo: "zain.png",
      link: "https://www.jo.zain.com",
    },
  ];

  return (
    <PageSection title="Trusted By" noMinHeight>
      {partners.map(({ logo, link }, i) => (
        <Col md={2} className="p-5" key={i}>
          <a href={link} target="_blank">
            <img src={`/images/partners/${logo}`} width="100%" />
          </a>
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
