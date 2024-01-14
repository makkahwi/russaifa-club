import Image from "next/image";
import { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link, animateScroll } from "react-scroll";

export const links = [
  { title: "About Me", link: "about" },
  { title: "Coaching", link: "coaching" },
  { title: "Business Facilitation", link: "business" },
  { title: "Testimonials", link: "testimonials" },
  { title: "Blog", link: "blog" },
  { title: "Contact Me", link: "contact" },
];

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      style={{ minHeight: "10vh" }}
      className="px-5 m-0 w-100"
      full
      fixed="top"
      color="dark"
      expand="lg"
    >
      <NavbarBrand onClick={() => animateScroll.scrollToTop()} role="button">
        <Image
          src="/images/logo/Logo-white.png"
          alt="Logo"
          width={1082 * 0.05}
          height={1082 * 0.05}
          priority
        />
      </NavbarBrand>

      <NavbarToggler onClick={toggle} className=" bg-white" />

      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          {links.map(({ title, link }, i) => (
            <Link
              to={link}
              role="button"
              onClick={() => setIsOpen(false)}
              key={i}
            >
              <NavItem>
                <NavLink className="text-white">{title}</NavLink>
              </NavItem>
            </Link>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
