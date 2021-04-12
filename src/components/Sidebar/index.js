import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            href="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
            onClick={toggle}
          >
            How It Works
          </SidebarLink>
          <SidebarLink
            href="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
            onClick={toggle}
          >
            Testimonials
          </SidebarLink>
          <SidebarLink
            href="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
            onClick={toggle}
          >
            Careers
          </SidebarLink>
          <SidebarLink
            href="https://github.com/gumdropsteve/nevada-smart-rpa/issues"
            onClick={toggle}
          >
            Investors
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="https://github.com/gumdropsteve/nevada-smart-rpa/blob/main/README.md">
            How It Works
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
