import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import Title from "./title";
import { Element } from "react-scroll";

import EmailForm from "./emailForm";

const Contact = () => {
  return (
    <Element name="contact">
      <Container>
        <TitleContainer>
          <Title title="contact me." />
        </TitleContainer>
        <Grid
          container
          style={{ padding: "50px 8vw 0 10vw", justifyContent: "center" }}
        >
          <Grid
            item
            lg={6} md={6} sm={12} xs={12}
            style={{
              padding: "35px",
              backgroundColor: "white",
            }}
          >
            <EmailForm />
          </Grid>
          <Grid item lg={1} md={1} sm={12} xs={12} style={{ height: "25px" }} />
          <Grid
            item
            lg={3} md={3} sm={12} xs={12}
            style={{
              padding: "35px",
              backgroundColor: "white",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              Alexandru Rasiga
            </p>
            <p>
              Univeristy of Waterloo
              <br />
              Waterloo, Canada
            </p>
            <p> alex.rasiga@gmail.com </p>
            <p> +1 (705) 795-8386 </p>
          </Grid>
        </Grid>

        <Footer>Copyright &copy; 2019, Alexandru Rasiga. All Rights Reserved.</Footer>
      </Container>
    </Element>
  );
}

const Container = styled.div`
  position: relative;
  -webkit-clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.88)),
    url("https://s3-us-west-2.amazonaws.com/websitev2images/maps.jpg");
  background-size: cover;
  padding-bottom: 100px;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;

const TitleContainer = styled.div`
  padding: 100px 8vw 0 10vw;
  color: white;

  @media (max-width: 800px) {
    padding: 50px 8vw 0 10vw;
  }
`;

const Footer = styled.div`
  height: 3vh;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  font-size: 0.7em;
  color: white;
  font-weight: bold;
`;

export default Contact;
