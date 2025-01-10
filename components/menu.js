import Link from "next/link";
import styles from "../styles/menu.module.css";
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  NavbarText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  var menuitems = [
    { name: "Home", link: "/" },
    {
      name: "People",
      subitems: [
        <Link href="/people/weiji">Weiji</Link>,
        <Link href="/people/labmembers">Lab Members</Link>,
      ],
    },
    {
      name: "Research",
      subitems: [
        <Link href="/research/direction">Research Areas</Link>,
        <Link href="/research/publications">Publications</Link>,
        <Link href="/research/demos">Demos</Link>,
      ],
    },
    {
      name: "Community",
      subitems: [
        <Link href="/community/lablife">Lab Life</Link>,
        <Link href="/community/outreach">Outreach</Link>,
      ],
    },
    {
      name: "Mentorship",
      subitems: [
        <Link href="/mentorship/teaching">Teaching</Link>,
        <Link href="/">Growing Up In Science</Link>,
      ],
    },
  ];

  return (
    <div className={styles.menu}>
      <Navbar expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {menuitems.map((item, index) => (
              <div className = {styles.menuitem}>
                {item.subitems ? (
                  <UncontrolledDropdown nav inNavbar key={index}>
                    <DropdownToggle nav caret>
                      {item.name}
                    </DropdownToggle>
                    <DropdownMenu left>
                      {item.subitems.map((subitem, subindex) => (
                        <DropdownItem key={subindex}>{subitem}</DropdownItem>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                ) : (
                  <NavItem key={index}>
                    <NavLink href={item.link}>{item.name}</NavLink>
                  </NavItem>
                )}
              </div>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
