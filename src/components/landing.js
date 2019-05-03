import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const Landing = () => {
  return (
    <Container>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <TextContainer>
            I'm Alexandru Rasiga
          </TextContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  background-image:
    linear-gradient(to left, rgba(236, 236, 236, 0.45), rgba(255, 255, 126, 0.73)),
    url("./brick-wall.jpg");
  background-size: cover;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;

const TextContainer = styled.div`
  padding: 35vh 0 0 5vw;
`;

export default Landing;