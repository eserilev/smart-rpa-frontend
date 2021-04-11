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
              <FooterLogo>
                Smart RPA
                <FaEthereum />
              </FooterLogo>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="https://github.com/gumdropsteve/nevada-smart-rpa/blob/feature/README.md/README.md">
                How It Works
              </FooterLink>
              <FooterLink to="https://github.com/gumdropsteve/nevada-smart-rpa/blob/feature/README.md/README.md">
                Testimonials
              </FooterLink>
              <FooterLink to="https://github.com/gumdropsteve/nevada-smart-rpa/blob/feature/README.md/README.md">
                Careers
              </FooterLink>
              <FooterLink to="https://github.com/gumdropsteve/nevada-smart-rpa/blob/feature/README.md/README.md">
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
