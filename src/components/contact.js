import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Title from "./title";

const Contact = () => {
  return (
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
          <Grid container>
            <Grid
              item
              lg={6} md={6} sm={12} xs={12}
              style={{ textAlign: "center", padding: "5px" }}
            >
              <TextField
                label="Name"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              lg={6} md={6} sm={12} xs={12}
              style={{ textAlign: "center", padding: "5px" }}
            >
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid
              item
              lg={12} md={12} sm={12} xs={12}
              style={{ textAlign: "center", marginTop: "10px", padding: "5px" }}
            >
              <TextField
                style={{ width: "100%" }}
                label="Message"
                multiline
                rows="6"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "150px", marginTop: "25px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
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
  );
}

const Container = styled.div`
  position: relative;
  -webkit-clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  clip-path: polygon(65% 10%, 100% 0, 100% 100%, 22% 100%, 0 100%, 0 0);
  background-image:
    linear-gradient(to bottom, rgba(236, 236, 236, 0.45), rgba(83, 51, 237, 0.73)),
    // url("./maps.jpg");
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
  font-size: 0.2em;
  color: white;
  font-weight: bold;
`;

export default Contact;
