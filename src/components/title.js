import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <Container>
      {title}
      <Underline />
    </Container>
  )
}

const Container = styled.div`
  font-size: 2.5em;
  font-weight: bold;

  @media(max-width: 800px) {
    font-size: 2em;
  }
`;

const Underline = styled.div`
  margin-top: 10px;
  width: 100px;
  border-bottom: 4px solid rgb(83, 51, 237);
`;

export default Title;