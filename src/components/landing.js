import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tooltip from '@material-ui/core/Tooltip';

const TEXT = [
  "Software Developer.",
  "Computer Engineering Student.",
  "Full Stack Developer.",
  "Student Athlete.",
  "Dev Ops Enthousiast."
]

class Landing extends Component {

  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });

    // This will take care of copying to clipboard
    const textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
  
    textArea.value = "alex.rasiga@gmail.com";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      const successful = document.execCommand("copy");
      const msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  
    document.body.removeChild(textArea);
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  copyToClipboard = () => {

  }

  render() {
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
              <a
                href="https://www.linkedin.com/in/alex-rasiga-b3b599119"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src="./icons/linkedin.svg" alt="" />
              </a>
              <Tooltip title="Click to copy email address">
                <Icon onClick={this.handleClick} src="./icons/gmail.svg" alt="" />
              </Tooltip>
              <a
                href="https://github.com/Arasiga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src="./icons/github.svg" alt="" />
              </a>
              <a
                href="https://www.instagram.com/alexrasiga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src="./icons/instagram.svg" alt="" />
              </a>
              <a
                href="https://leetcode.com/arasiga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon src="./icons/leetcode.svg" alt="" />
              </a>
              <div>
                <Link to="about" smooth={true} duration={1000}>
                  <Button
                    variant="outlined"
                    style={{ color: "white", marginTop: "25px", border: "1px solid white" }}>
                    Learn More
                  </Button>
                </Link>
              </div>
            </TextContainer>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={
            { vertical: "bottom", horizontal: "center" }
          }
          style={{ zIndex: "200" }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">alex.rasiga@gmail.com copied to clipboard.</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
                
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  clip-path: polygon(72% 0, 100% 0, 100% 88%, 28% 100%, 0 88%, 0 0);
  background-image:
    linear-gradient(to left, rgba(236, 236, 236, 0.54), rgba(83, 51, 237, 0.88)),
    url("https://s3-us-west-2.amazonaws.com/websitev2images/brick-wall-min.jpg");
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