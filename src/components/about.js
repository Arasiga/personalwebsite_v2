import React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { Element } from "react-scroll";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';

import Title from "./title";

const About = () => {
  return (
    <Element name="about">
      <Container data-aos="fade-down-right">
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Text>
              <Title title="about me." />
              <AboutText>
                ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis
              </AboutText>
              <AboutText>
                ut aliquam purus sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis
              </AboutText>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "250px", marginTop: "35px" }}
              >
                <SaveIcon style={{ marginRight: "5px" }} />
                Download Resume
              </Button>
            </Text>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ImageContainer>
              <Image src="https://websitev2images.s3-us-west-2.amazonaws.com/portrait.jpg" />
            </ImageContainer>
          </Grid>
        </Grid>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10vh 5vw 0 10vw;
`;

const AboutText = styled.div`
  letter-spacing: 0.8px;
  line-height: 2em;
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
  padding: 25px;
`;

const Image = styled.img`
  height: 80%;
  width: 100%;
  max-height: 660px;
  max-width: 490px;
`;

export default About;