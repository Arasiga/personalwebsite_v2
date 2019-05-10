import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import { Element } from "react-scroll";
import Title from "./title";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Skills = () => {
  return (
    // <Element name="skills">
      <Container>
        <TitleContainer>
          <Title title="my skills." />
        </TitleContainer>
        <Grid container style={{ textAlign: "center" }}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/react-original.svg" alt="" />
            <IconText> React </IconText>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/nodejs-original.svg" alt="" />
            <IconText> NodeJS </IconText>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/amazonwebservices-original.svg" alt="" />
            <IconText> Amazon Web Services </IconText>
          </Grid>
        </Grid>
        <Grid container style={{ textAlign: "center" }}>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/linux-plain.svg" alt="" />
            <IconText> Linux </IconText>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/python-original.svg" alt="" />
            <IconText> Python </IconText>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <IconContainer src="./icons/docker-plain.svg" alt="" />
            <IconText> Docker </IconText>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "60px" }}>
            <AutoPlaySwipeableViews interval={5000}>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                slide n°1
                <QuoteIcon src="./icons/closing_quote.svg" />
              </SliderContainer>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                slide n°2
                <QuoteIcon src="./icons/closing_quote.svg" />
              </SliderContainer>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                slide n°3
                <QuoteIcon src="./icons/closing_quote.svg" />
              </SliderContainer>
            </AutoPlaySwipeableViews>
          </Grid>
        </Grid>
      </Container>
    // </Element>
  )
}

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  -webkit-clip-path: polygon(84% 3%, 100% 0, 100% 96%, 32% 100%, 0 98%, 0 0);
  clip-path: polygon(84% 3%, 100% 0, 100% 96%, 32% 100%, 0 98%, 0 0);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.73)),
    url("./laptop.jpg");
  background-size: cover;
  padding-bottom: 8vh;
  will-change: transform;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;
  
const TitleContainer = styled.div`
  padding: 10vh 0 0 10vw;
  color: white;
  margin-bottom: 50px;
`;

const IconContainer = styled.img`
  max-height: 130px;
  max-width: 130px;
`;

const IconText = styled.div`
  margin: 30px 0 30px 0;
  color: white;
  font-size: 1.7em;
`;

const SliderContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuoteIcon = styled.img`
  margin: 15px 0 15px 0;
  height: 24px;
  width: 24px;
`;

export default Skills;