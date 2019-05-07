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
`;

const Underline = styled.div`
  margin-top: 10px;
  width: 150px;
  border-bottom: 7px solid rgb(83, 51, 237);
`;

export default Title;