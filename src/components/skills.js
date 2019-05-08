import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { Element } from "react-scroll";

import Title from "./title";

const Skills = () => {
  return (
    <Element name="skills">
      <Container data-aos="fade-down-left">
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
        </Grid>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  -webkit-clip-path: polygon(78% 0, 100% 6%, 100% 94%, 50% 100%, 0 92%, 0 5%);
  clip-path: polygon(78% 0, 100% 6%, 100% 94%, 50% 100%, 0 92%, 0 5%);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.73)),
    url("./laptop.jpg");
  background-size: cover;
  padding-bottom: 8vh;
  
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
  max-height: 160px;
  max-width: 160px;
`;

const IconText = styled.div`
  margin: 30px 0 30px 0;
  color: white;
  font-size: 2em;
`;

export default Skills;