import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  -webkit-clip-path: polygon(65% 10%, 100% 19%, 100% 90%, 22% 100%, 0 90%, 0 21%);
  clip-path: polygon(65% 10%, 100% 19%, 100% 90%, 22% 100%, 0 90%, 0 21%);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(255, 255, 126, 0.73)),
    url("./brick-wall.jpg");
  background-size: cover;
`;

export default Skills;