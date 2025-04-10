import Link from "next/link";
import styles from "../styles/menu.module.css";
import { useState, useEffect } from "react";
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.mobileMenuContent}`) && 
          !event.target.closest(`.${styles.mobileMenuButton}`)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  var menuitems = [
    { name: "Home", link: "/" },
    {
      name: "People",
      subitems: [
        { name: "Weiji", link: "/people/weiji" },
        { name: "Lab Members", link: "/people/labmembers" },
      ],
    },
    {
      name: "Research",
      subitems: [
        { name: "Research Areas", link: "/research/direction" },
        { name: "Publications", link: "/research/publications" },
        { name: "Demos", link: "/research/demos" },
      ],
    },
    {
      name: "Community",
      subitems: [
        { name: "Lab Life", link: "/community/lablife" },
        { name: "Outreach", link: "/community/outreach" },
      ],
    },
    {
      name: "Mentorship",
      subitems: [
        { name: "Teaching", link: "/mentorship/teaching" },
        { name: "Growing Up In Science", link: "/" },
      ],
    },
  ];

  return (
    <>
      <button 
        className={`${styles.mobileMenuButton} ${isOpen ? styles.active : ''} mobileonly`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`${styles.mobileMenuOverlay} ${isOpen ? styles.active : ''} mobileonly`}>
        <div className={styles.mobileMenuContent}>
          {menuitems.map((item, index) => (
            <div key={index} className={styles.mobileMenuItem}>
              {item.subitems ? (
                <>
                  <div className={styles.mobileMenuTitle}>{item.name}</div>
                  {item.subitems.map((subitem, subindex) => (
                    <Link 
                      key={subindex} 
                      href={subitem.link}
                      className={styles.mobileMenuSubitem}
                      onClick={closeMenu}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link 
                  href={item.link}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.menu} desktoponly`}>
        <div className={styles.menu}>
        <Navbar expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {menuitems.map((item, index) => (
                <div className={styles.menuitem} key={index}>
                  {item.subitems ? (
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {item.name}
                      </DropdownToggle>
                      <DropdownMenu left>
                        {item.subitems.map((subitem, subindex) => (
                          <DropdownItem key={subindex}>
                            <Link href={subitem.link}>{subitem.name}</Link>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem>
                      <NavLink href={item.link}>{item.name}</NavLink>
                    </NavItem>
                  )}
                </div>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
    </>
  );
}
