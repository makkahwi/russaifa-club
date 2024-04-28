import { getCerts } from "@/api";
import PageSection from "@/components/PageSection";
import { capitalizeSentenceFirstLetters } from "@/functions/utils";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

interface CertProps {
  title: string;
  date: string;
  source: string;
}

const WhoAmISection = async () => {
  const certs: CertProps[] = await getCerts();

  return (
    <PageSection
      // title="In-Depth Look"
      color="light"
      aboveTitle={
        <Col md={12} className="text-center">
          <Image
            src="/images/logo/logo-white-text-only.png"
            className="mb-5"
            alt="Sun"
            width={543 * 0.35}
            height={439 * 0.35}
            priority
          />
        </Col>
      }
    >
      <Col md={12}>
        <h5 className="text-block text-dark">
          {
            "I am a vibrant, high-energy Leadership Facilitator and Executive Coach passionately harnessing the transformative potential of Solution-Focused Methodology. As the driving force behind the Noor Kayyali Training Institute, I am on a mission to inspire and empower individuals and teams."
          }
        </h5>
      </Col>

      <Col md={12}>
        <h5 className="text-block text-dark">
          {
            "I proudly hold many certifications & recognition. Those are not just qualifications; they are tools I wield with unwavering zeal to ignite growth, innovation, and meaningful change. Let's embark on this incredible journey together!"
          }
        </h5>
      </Col>

      <Col md={12} className="border border-danger border-2 rounded-5 mt-5">
        <Row className="justify-content-center">
          <Col md={12} className="my-4">
            <h3 className="text-center text-danger">Certifications</h3>
          </Col>

          <Col xs={12} className="text-justify my-4 text-dark p-3">
            <h5 className="lh-lg">
              <ul>
                {certs?.map(({ title, date, source }, i) => (
                  // <h6>
                  //   {/* {date} @  */}
                  //   {/* {source} */}
                  // </h6>
                  <li key={i}>{capitalizeSentenceFirstLetters(title)}</li>
                ))}
              </ul>
            </h5>
          </Col>
        </Row>
      </Col>
    </PageSection>
  );
};

export default WhoAmISection;
