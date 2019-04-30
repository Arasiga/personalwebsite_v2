import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  -webkit-clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  background-image:
    linear-gradient(to top, rgba(236, 236, 236, 0.45), rgba(255, 255, 126, 0.73)),
    url("./brick-wall.jpg");
  background-size: cover;
`;

export default Contact;
