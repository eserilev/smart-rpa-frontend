import React from "react";
import { FaEthereum } from "react-icons/fa";
// import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLogo
                style={{ textDecoration: "none", color: "white" }}
                to="/home"
              >
                Smart RPA
                <FaEthereum />
              </FooterLogo>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink
                style={{ textDecoration: "none", color: "white" }}
                to="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
              >
                How It Works
              </FooterLink>
              <FooterLink
                style={{ textDecoration: "none", color: "white" }}
                to="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
              >
                Testimonials
              </FooterLink>
              <FooterLink
                style={{ textDecoration: "none", color: "white" }}
                to="https://github.com/gumdropsteve/SmartRPA/blob/main/README.md"
              >
                Careers
              </FooterLink>
              <FooterLink
                style={{ textDecoration: "none", color: "white" }}
                to="https://github.com/gumdropsteve/SmartRPA/issues"
              >
                Investors
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
