import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Element } from "react-scroll";
import Title from "./title";
import TabPanel from "./tabPanel";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    style: { fontSize: "1rem" }
  };
}

const Projects = ({ screenWidth }) => {
  const [value, setValue] = useState(0);  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }  

  return (
    <Element name="projects">
      <Container>
        <Title title="my projects." />
        <TabContainer screenWidth={screenWidth}>
          <Tabs
            orientation={screenWidth > 1000 ? "vertical" : "horizontal"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            style={{ borderRight: "1 px solid grey" }}
            indicatorColor="primary"
          >
            <Tab label="Old Personal Website" {...a11yProps(0)} />
            <Tab label="CodeMeeting" {...a11yProps(1)} />
            <Tab label="ROOT Education" {...a11yProps(2)} />
            <Tab label="Mindset Labs" {...a11yProps(3)} />
            <Tab label="React Native Apps" {...a11yProps(4)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
        </TabContainer>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  padding: 50px 8vw 80px 10vw;
`;

const TabContainer = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: 50px;
  max-height: 400px;
  flex-direction: ${props => props.screenWidth < 1000 ? "column" : "row"}
`;

export default Projects;