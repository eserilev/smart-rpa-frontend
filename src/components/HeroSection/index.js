import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../HeroSection/Button";
import { Alert } from "react-bootstrap";

import cryptoVideo from "../../videos/cryptoVideo.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
  ArrowForward,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
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

  return (
    <HeroContainer>
      <Alert variant="success">
        <Alert.Heading>Contract Already Found View It Here.</Alert.Heading>
      </Alert>
      <HeroBg>
        <VideoBg autoPlay loop muted src={cryptoVideo} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1></HeroH1>
        <HeroP>
          Nevada Residential Purchase Agreement (RPA) Uploaded To The BlockChain
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/ContractForm"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            style={{ textDecoration: "none", color: "black" }}
          >
            Start The Process{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
