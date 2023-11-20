import PageSection from "@/components/PageSection";
import { Col } from "reactstrap";

const TrustedBySection = () => {
  const partners = [
    { logo: "1.jpg", link: "Dubai" },
    { logo: "2.jpg", link: "Dubai" },
    { logo: "3.jpg", link: "Dubai" },
    { logo: "4.jpg", link: "Dubai" },
    // { logo: "5.jpg", link: "Dubai" },
    // { logo: "6.jpg", link: "Dubai" },
    // { logo: "7.jpg", link: "Dubai" },
    // { logo: "8.jpg", link: "Dubai" },
    // { logo: "9.jpg", link: "Dubai" },
    // { logo: "10.jpg", link: "Dubai" },
    // { logo: "11.jpg", link: "Dubai" },
    // { logo: "12.jpg", link: "Dubai" },
    // { logo: "13.jpg", link: "Dubai" },
    // { logo: "14.jpg", link: "Dubai" },
  ];

  return (
    <PageSection title="Trusted By" noMinHeight>
      {partners.map(({ logo, link }, i) => (
        <Col md={3} className="p-5" key={i}>
          <img src={`/images/partners/${logo}`} width="100%" />
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
