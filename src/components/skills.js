import React from "react";
import styled from "styled-components";

import Title from "./title";

const Skills = () => {
  return (
    <Container>
      <TitleContainer>
        <Title title="my skills." />
      </TitleContainer>
      {/* <SkillsContainer></SkillsContainer> */}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 100vh;
  -webkit-clip-path: polygon(66% 0, 100% 5%, 100% 93%, 22% 100%, 0 91%, 0 10%);
  clip-path: polygon(66% 0, 100% 5%, 100% 93%, 22% 100%, 0 91%, 0 10%);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(255, 255, 126, 0.73)),
    url("./library.jpg");
  background-size: cover;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;

const TitleContainer = styled.div`
  padding: 150px 0 0 8vw;
  color: white;

  @media (max-width: 800px) {
    padding: 20px 0 0 10px;
  }
`;

export default Skills;