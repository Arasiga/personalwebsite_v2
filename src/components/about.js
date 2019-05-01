import React from "react";
import styled from "styled-components";

import Title from "./title";

const About = () => {
  return (
    <Container>
      <Text>
        <Title title="about me." />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales neque sodales ut etiam. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Duis tristique sollicitudin nibh sit amet commodo nulla. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Iaculis urna id volutpat lacus laoreet non curabitur.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada. Etiam sit amet nisl purus in mollis. Amet mauris commodo quis imperdiet. Eu sem integer vitae justo eget. Neque gravida in fermentum et sollicitudin ac orci phasellus. Pulvinar pellentesque habitant morbi tristique senectus et. Feugiat pretium nibh ipsum consequat nisl.
        </p>
      </Text>
      <Image />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Text = styled.div`
  float: left;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 15vw 0 8vw;

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 100%;
    padding: 0 0 0 10px;
  }
`;

const Image = styled.img`
  float: right;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 8vw 0 8vw;

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 100%;
    padding: 0 0 0 10px;
  }
`;

export default About;