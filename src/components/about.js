import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { Element } from "react-scroll";
import Title from "./title";

const About = () => {
  return (
    <Element name="about">
      <Container>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Text>
              <Title title="about me." />
            </Text>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            {/* <ImageContainer>
              <Image src="./bench.jpg" />
            </ImageContainer> */}
          </Grid>
        </Grid>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10vh 0 0 10vw;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 8vw;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  max-height: 660px;
  max-width: 490px;
`;

export default About;