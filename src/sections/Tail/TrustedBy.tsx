import { getPartners } from "@/api";
import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

interface PartnerProps {
  logo: string;
  link: string;
  bigger?: boolean;
}

const TrustedBySection = async () => {
  const partners: PartnerProps[] = await getPartners();

  return (
    <PageSection title="Trusted By" noMinHeight color="light">
      {partners.map(({ logo, link, bigger }, i) => (
        <Col
          xs={6}
          md={3}
          lg={4}
          xl={bigger ? 3 : 2}
          className="p-3 p-lg-5"
          key={i}
        >
          <a href={link} target="_blank">
            <img src={`/images/partners/${logo}`} width="100%" />
          </a>
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
