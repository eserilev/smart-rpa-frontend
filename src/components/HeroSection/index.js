import React, { useState } from "react";

import { Button } from "../HeroSection/Button";
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

  return (
    <HeroContainer>
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
            to="/signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Start The Process{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
