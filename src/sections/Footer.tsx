import Image from "next/image";
import { Fragment } from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";
import { animateScroll, Link } from "react-scroll";

import { links } from "./Navbar";

const FooterSection = () => {
  return (
    <Fragment>
      <Row className="bg-dark py-5">
        <Col xs={12} className="text-center pb-5">
          <Image
            src="/images/logo/logo-white.png"
            alt="Logo"
            width={543 * 0.25}
            height={771 * 0.25}
            priority
            onClick={() => animateScroll.scrollToTop()}
            role="button"
          />
        </Col>

        <Col xs={12} className="text-center">
          <Navbar expand="lg">
            <Container>
              <Nav className="mx-auto">
                {links.map(({ title, link }, i) => (
                  <Link to={link} role="button" key={i}>
                    <NavItem>
                      <NavLink className="text-white">{title}</NavLink>
                    </NavItem>
                  </Link>
                ))}
              </Nav>
            </Container>
          </Navbar>
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

      <Row className="py-5 bg-white">
        <h6 className="text-center text-dark">
          All Rights Reserved For{" "}
          <span className="text-danger">NOOR KAYYALI</span> ©{" "}
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
