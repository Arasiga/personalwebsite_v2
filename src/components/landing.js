import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  background-image:
    linear-gradient(to left, rgba(245, 246, 252, 0.52), rgba(255, 255, 126, 0.73)),
    url('./brick-wall.jpg');
  background-size: cover;
`;

export default Landing;