import React, { useState, useEffect, useRef } from "react";
import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ navBackground }) =>
    navBackground ? "#cd853f" : "transparent"};
  transition: 0.4s ease-in;
`;

const Navlink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(NavLink)`
  ${Navlink}
  color: #fff;
  font-style: italic;
`;

const MenuBars = styled(BiMenuAltRight)`
  display: none;

  @media screen and (max-width: 768px) {
    color: white;
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  margin-right: -48px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const activeClassName = 'nav-item-active';

const NavMenuLinks = styled(NavLink).attrs({
  activeClassName,
})`
  ${Navlink}
  padding:20px 14px;
  border-radius: 5px;
  margin-right: 10px;
  transition: 0.3s ease-in;

  &.${activeClassName} {
    background-color: #fff;
    color: #000d1a;
  }

  &:hover {
    background-color: #fff;
    color: #000d1a;
    padding: 20px 14px;
  }
`;

const activeBtn = css`
  background-color: #fff;
  color: #000d1a;
  padding: 20px 14px;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 55;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav navBackground={navBackground}>
      <Logo to="/">
        <h1>PEHEL - We For You</h1>
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks exact to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavMenu></NavMenu>
      <NavBtn>
        <Button to="/donate" primary="true">
          Donate Now
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
