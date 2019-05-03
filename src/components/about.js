import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

import Title from "./title";

const About = () => {
  return (
    <Container>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Text>
            <Title title="about me." />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Duis tristique sollicitudin nibh sit amet commodo nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Iaculis urna id volutpat lacus laoreet non curabitur.
            </div>
            <div>
              Pellentesque habitant morbi tristique senectus et netus et malesuada. Etiam sit amet nisl purus in mollis. Amet mauris commodo quis imperdiet. Eu sem integer vitae justo eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar pellentesque habitant morbi tristique senectus et. Feugiat pretium nibh ipsum consequat nisl.
            </div>
          </Text>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ImageContainer>
            <Image src="./bench.jpg" />
          </ImageContainer>
        </Grid>
      </Grid>
    </Container>
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
  padding: 0 15vw 0 8vw;
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