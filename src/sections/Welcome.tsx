import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";

export const links = [
  { title: "About Noor", link: "/about" },
  { title: "Business Facilitation", link: "/business" },
  { title: "Entrepreneur Coach", link: "/coaching" },
];

const WelcomeSection = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Row
        style={{
          minHeight: "100vh",
          background: "black url('/images/BG.jpg') no-repeat fixed center",
          backgroundSize: "cover",
        }}
        className="justify-content-center"
      >
        <Col lg={4} md={6} className="my-auto px-5 text-white">
          <h1>NOOR KAYYALI</h1>
          <h4>Unlocks Your Potential</h4>

          <ButtonGroup vertical className="w-100 mt-4">
            {links.map(({ title, link }, i) => (
              <Button
                color="light"
                className="my-2 text-start py-3"
                onClick={() => router.push(link)}
                key={i}
              >
                <h4 className="m-0 p-0">{title}</h4>
              </Button>
            ))}
          </ButtonGroup>
        </Col>

        <Col lg={4} md={6} className="position-relative">
          <Image
            src="/images/noor-1.png"
            className="position-absolute end-0 bottom-0 me-5"
            alt="Noor Photo"
            width={635 * 0.6}
            height={940 * 0.6}
            priority
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default WelcomeSection;
