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
  margin-top: 50px;
  padding: 0 8vw 0 8vw;
`;

export default Projects;