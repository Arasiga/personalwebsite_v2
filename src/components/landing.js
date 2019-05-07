import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";

const TEXT = [
  "Software Developer.",
  "Computer Engineering Student.",
  "Full Stack Developer.",
  "Student Athlete.",
  "Dev Ops Enthousiast."
]

const Landing = () => {
  return (
    <Container>
      <Grid container style={{ height: "100%" }}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <TextContainer>
            <NameContainer>
              I'm Alexandru Rasiga.
            </NameContainer>
            <TypistLoop interval={200}>
              {
                TEXT.map(text => 
                  <Typist
                    key={text}
                    avgTypingSpeed={30}
                    className="Typist"
                    cursor={{ element: "_" }}
                  >
                    {text}
                    <Typist.Backspace count={text.length + 1} delay={3500} />
                  </Typist>
              )}
            </TypistLoop>
            <Icon src="./icons/github.svg" alt="" />
            <Icon src="./icons/gmail.svg" alt="" />
            <Icon src="./icons/instagram.svg" alt="" />
            <Icon src="./icons/leetcode.svg" alt="" />
            <Icon src="./icons/linkedin.svg" alt="" />
            <div>
              <Link to="about" smooth={true} duration={1000}>
                <Button
                  variant="outlined"
                  style={{ color: "white", marginTop: "25px", border: "1px solid white" }}>
                  Hire me
                </Button>
              </Link>
            </div>
          </TextContainer>
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  background-image:
    linear-gradient(to left, rgba(236, 236, 236, 0.54), rgba(83, 51, 237, 0.78)),
    url("./brick-wall.jpg");
  background-size: cover;

  @media (max-width: 800px) {
    clip-path: none;
  }
`;

const TextContainer = styled.div`
  padding: 35vh 0 0 10vw;
  color: white;
`;

const NameContainer = styled.div`
  font-weight: bold;
  font-size: 2.7em;
  letter-spacing: 1.4px;
  margin-bottom: 25px;

  @media(max-width: 800px) {
    font-size: 1.6em;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 15px;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    transform: scale(1.5);    
  }
`;

export default Landing;