import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Element } from "react-scroll";
import Title from "./title";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Skills = () => {
  return (
    <Element name="skills">
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
          <Grid
            item
            lg={12} md={12} sm={12} xs={12}
            style={{ marginTop: "60px", fontSize: "1em" }}
          >
            <AutoPlaySwipeableViews interval={6500}>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                Alex Rasiga has done an amazing job when it comes to the React application for PipsPass. Alex's work was always on time and the final result was better than expected. In addition of being very skilled and talented, Alex is deeply passionate about the work he does, he has an web DNA for sure. What's even greater, is his fast responsiveness as well as his ability to advise you on the best course when you share with him the ideas you want to implement.
                <QuoteIcon src="./icons/closing_quote.svg" />
                <strong>Adam Dahan</strong>Previous Employer @ 88Labs
              </SliderContainer>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                Alex worked on a hobby side project with me, and was great to work with - he's an incredibly fast learner, and went from limited prior programming experience to becoming an excellent frontend developer in a very short space of time. He'd be a real asset for any team.
                <QuoteIcon src="./icons/closing_quote.svg" />
                <strong>Harshvardhan Sukthankar</strong>Previous Class Peer @ Lighthouse Labs
              </SliderContainer>
              <SliderContainer>
                <QuoteIcon src="./icons/opening_quote.svg" />
                Alex has an amazing talent for front end design and he has a lot of potential for growth. He is really smart and fun to work with.
                <QuoteIcon src="./icons/closing_quote.svg" />
                <strong>Johnny Hsiao</strong>Previous Class Peer @ Lighthouse Labs
              </SliderContainer>
            </AutoPlaySwipeableViews>
          </Grid>
        </Grid>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  margin-top: 90px;
  -webkit-clip-path: polygon(84% 3%, 100% 0, 100% 96%, 32% 100%, 0 98%, 0 0);
  clip-path: polygon(84% 3%, 100% 0, 100% 96%, 32% 100%, 0 98%, 0 0);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.88)),
    url("./laptop.jpg");
  background-size: cover;
  padding-bottom: 8vh;
  will-change: transform;
  letter-spacing: 0.7px;
  line-height: 1.9em;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;
  
const TitleContainer = styled.div`
  padding: 10vh 0 0 10vw;
  color: white;
  margin-bottom: 50px;
  line-height: normal;
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
  width: 50%;
  margin: auto;
  font-size: 1.2em;

  @media(max-width: 800px) {
    width: 90%;
  }
`;

const QuoteIcon = styled.img`
  margin: 15px 0 15px 0;
  height: 24px;
  width: 24px;
`;

const Name = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

export default Skills;