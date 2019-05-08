import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Title from "./title";

const Contact = () => {
  return (
    <Container>
      <TitleContainer>
        <Title title="contact me." />
      </TitleContainer>
      <Footer>Copyright &copy; 2019, Alexandru Rasiga. All Rights Reserved.</Footer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  -webkit-clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.73)),
    url("./maps.jpg");
  background-size: cover;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;

const TitleContainer = styled.div`
  padding: 50px 8vw 0 8vw;
  color: white;
`;

const Footer = styled.div`
  height: 3vh;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 0.2em;
`;

export default Contact;
