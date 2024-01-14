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
import { links } from "./Navbar";
import { Link } from "react-scroll";

const FooterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Row className="bg-dark py-5">
        <Col xs={12} className="text-center pb-5">
          <Image
            src="/images/logo/Logo-white.png"
            alt="Logo"
            width={1082 * 0.25}
            height={1082 * 0.25}
            priority
          />
        </Col>

        <Col xs={12} className="text-center">
          <Nav className="mx-auto" horizontal="center">
            {links.map(({ title, link }, i) => (
              <Link to={link} role="button" key={i}>
                <NavItem>
                  <NavLink className="text-white">{title}</NavLink>
                </NavItem>
              </Link>
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
        <h6 className="text-center text-dark">
          All Rights Reserved For{" "}
          <span className="text-primary">NOOR KAYYALI</span> ©{" "}
          {new Date().getFullYear()}
        </h6>

        <a
          href="https://www.alembicsoft.com/"
          target="_blank"
          className="text-center text-dark"
        >
          <small>Built By AlembicSoft</small>
        </a>
      </Row>
    </Fragment>
  );
};

export default FooterSection;
