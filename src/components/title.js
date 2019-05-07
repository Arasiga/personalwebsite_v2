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
  font-size: 30px;
  font-weight: bold;
`;

const Underline = styled.div`
  margin-top: 10px;
  width: 100px;
  border-bottom: 4px solid rgb(83, 51, 237);
`;

export default Title;