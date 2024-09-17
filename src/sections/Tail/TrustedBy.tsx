import { getPartners } from "@/api";
import ImageComp from "@/components/Image";
import PageSection from "@/components/PageSection";
import { Col } from "react-bootstrap";

interface PartnerProps {
  logo: string;
  link: string;
  bigger?: boolean;
}

const TrustedBySection = async () => {
  const partners: PartnerProps[] = [];

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
            <ImageComp
              alt={`partner-${i}-logo`}
              src={`/images/partners/${logo}`}
            />
          </a>
        </Col>
      ))}
    </PageSection>
  );
};

export default TrustedBySection;
