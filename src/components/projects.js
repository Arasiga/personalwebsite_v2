import React from "react";
import styled from "styled-components";

import Title from "./title";

const Projects = () => {
  return (
    <Container>
      <Title title="my projects." />
    </Container>
  )
}

const Container = styled.div`
  padding: 50px 8vw 80px 10vw;
`;

export default Projects;