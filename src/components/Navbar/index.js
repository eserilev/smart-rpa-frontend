import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { GiPotionBall } from "react-icons/gi";
import { FaEthereum } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Icon,
  Bars,
} from "./NavBarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "50px" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo
              to="/"
              onClick={toggleHome}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              Smart RPA
              <FaEthereum />
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {/* <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
              <NavBtnLink style={{ textDecoration: "none" }}>
                <a
                  className="btnLink"
                  style={{ textDecoration: "none", color: "black" }}
                  href="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
                >
                  How It Works
                </a>
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
