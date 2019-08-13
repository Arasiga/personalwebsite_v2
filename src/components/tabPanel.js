import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Build from '@material-ui/icons/Build';
import Info from '@material-ui/icons/Info';

const TabPanel = (props) => {
  const {
    children,
    value,
    index,
    info,
    skills,
    image,
    ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ padding: "0 25px 25px 0px", width: "100%" }}
      {...other}
    >
      <Grid container style={{ width: "100%" }}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Info style={{ height: "33", width: "33" }} />
          <InfoContainer>
            {info}
          </InfoContainer>
        </Grid>
        
        <Grid item lg={4} md={4} sm={12} xs={12} style={{ paddingRight: "15px" }}>
          <Build style={{ height: "33", width: "33" }} />
          {skills.map( (skill, index) => <p key={index}> + {skill}</p>)}
        </Grid>

        <Grid
          item
          lg={4} md={4} sm={12} xs={12}
          style={{ display: "flex", justifyContent: "center"}}
        >
          <ImageContainer src={image} alt="" />
        </Grid>
      </Grid>
    </Typography>
  );
}

const InfoContainer = styled.p`
  padding-right: 25px;
`;

const ImageContainer = styled.img`
  max-height: 330px;
  max-width: 450px;
`;

export default TabPanel;