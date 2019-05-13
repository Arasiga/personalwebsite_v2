import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import Title from "./title";

const Projects = () => {
  return (
    <Element name="projects">
      <Container>
        <Title title="my projects." />
      </Container>
    </Element>
  )
}

const Container = styled.div`
  padding: 50px 8vw 80px 10vw;
`;

export default Projects;