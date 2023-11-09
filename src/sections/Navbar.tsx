import Image from "next/image";
import { useState } from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { links } from "./Welcome";

const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const NavComp = ({ navbar = false }) => (
    <Nav className="me-auto" navbar={navbar}>
      {links.map(({ title, link }, i) => (
        <NavItem key={i}>
          <NavLink href={link} className="text-white">
            {title}
          </NavLink>
        </NavItem>
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
