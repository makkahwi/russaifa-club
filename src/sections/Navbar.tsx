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
import { Link } from "react-scroll";

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

  const NavComp = ({ navbar = false }) => (
    <Nav className="me-auto" navbar={navbar}>
      {links.map(({ title, link }, i) => (
        <Link to={link} key={i} role="button">
          <NavItem>
            <NavLink className="text-white">{title}</NavLink>
          </NavItem>
        </Link>
      ))}
    </Nav>
  );

  return (
    <Navbar
      style={{ minHeight: "10vh" }}
      className="px-5 m-0 poisition-fixed"
      color="dark"
    >
      <NavbarBrand href="/">
        <Image
          src="/images/Logo-White.png"
          alt="Logo"
          width={73 * 0.6}
          height={92 * 0.6}
          priority
        />
      </NavbarBrand>

      <NavComp />

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <NavComp navbar />
      </Collapse>
    </Navbar>
  );
};

export default NavbarComp;
