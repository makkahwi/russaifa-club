import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Fragment, useState } from "react";
import {
  Button,
  ButtonGroup,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import { socialLinksList } from "./Tail/Contact";

const FooterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const links = [
    { title: "About Noor", link: "/about" },
    { title: "Business Facilitation", link: "/business" },
    { title: "Entrepreneur Coach", link: "/coaching" },
  ];

  return (
    <Fragment>
      <Row className="bg-dark py-5">
        <Col xs={12} className="text-center pb-5">
          <Image
            src="/images/Logo-White.png"
            alt="Logo"
            width={73 * 2}
            height={92 * 2}
            priority
          />
        </Col>

        <Col xs={12} className="text-center">
          <Nav className="mx-auto" horizontal="center">
            {links.map(({ title, link }, i) => (
              <NavItem key={i}>
                <NavLink href={link} className="text-white">
                  {title}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Col>

        {/* <Col xs={12} className="text-center">
          <ButtonGroup>
            {socialLinksList.map(({ name, icon, link, label, color }, i) => (
              <Button
                className="w-100 p-3 my-3 text-white"
                color="transparent"
                key={i}
              >
                <a href={link} target="_blank">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </Button>
            ))}
          </ButtonGroup>
        </Col> */}
      </Row>

      <Row className="py-5">
        <h5 className="text-center">
          All Rights Reserved For{" "}
          <span className="text-primary">NOOR KAYYALI</span> ©{" "}
          {new Date().getFullYear()}
        </h5>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center"
        >
          Built By Arromi Creatives
        </a>
      </Row>
    </Fragment>
  );
};

export default FooterSection;
