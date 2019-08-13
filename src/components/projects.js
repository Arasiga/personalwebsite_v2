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
    style: { fontSize: "1rem", height: "75px" }
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
            style={{ borderRight: "1 px solid grey", margin: "0 40px 40px 0" }}
            indicatorColor="primary"
          >
            <Tab label="Old Personal Website" {...a11yProps(0)} />
            <Tab label="CodeMeeting" {...a11yProps(1)} />
            <Tab label="ROOT Education" {...a11yProps(2)} />
            <Tab label="Mindset Labs" {...a11yProps(3)} />
            <Tab label="React Native Apps" {...a11yProps(4)} />
          </Tabs>
          <TabPanel
            value={value}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla pulvinar, posuere dui blandit, vehicula nisl. Aliquam a ligula sit amet mauris malesuada tempus. In facilisis venenatis lorem, eu vehicula eros eleifend at. Curabitur tincidunt sapien urna, non mollis risus semper in. Aliquam quis elementum sem. Curabitur viverra lobortis erat, eu lobortis sapien. Nam pellentesque arcu mi, in lobortis tortor dapibus eget. Suspendisse potenti. Proin molestie mauris quis massa iaculis, quis tincidunt mauris vestibulum."
            skills={["python", "javascript"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/personalwebsite.jpg"
            index={0}
          />
          <TabPanel
            value={value}
            info=""
            skills={["python", "javascript"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting.jpg"
            index={1}
          />
          <TabPanel
            value={value}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla pulvinar, posuere dui blandit, vehicula nisl. Aliquam a ligula sit amet mauris malesuada tempus. In facilisis venenatis lorem, eu vehicula eros eleifend at. Curabitur tincidunt sapien urna, non mollis risus semper in. Aliquam quis elementum sem. Curabitur viverra lobortis erat, eu lobortis sapien. Nam pellentesque arcu mi, in lobortis tortor dapibus eget. Suspendisse potenti. Proin molestie mauris quis massa iaculis, quis tincidunt mauris vestibulum."
            skills={["python", "javascript"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/root.jpg"
            index={2}
          />
          <TabPanel
            value={value}
            info=""
            skills={["python", "javascript"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindset.jpg"
            index={3}
          />
          <TabPanel
            value={value}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla pulvinar, posuere dui blandit, vehicula nisl. Aliquam a ligula sit amet mauris malesuada tempus. In facilisis venenatis lorem, eu vehicula eros eleifend at. Curabitur tincidunt sapien urna, non mollis risus semper in. Aliquam quis elementum sem. Curabitur viverra lobortis erat, eu lobortis sapien. Nam pellentesque arcu mi, in lobortis tortor dapibus eget. Suspendisse potenti. Proin molestie mauris quis massa iaculis, quis tincidunt mauris vestibulum."
            skills={["python", "javascript"]}
            image="https://websitev2images.s3-us-west-2.amazonaws.com/brick-wall.jpg"
            index={4}
          />
        </TabContainer>
      </Container>
    </Element>
  )
}

const Container = styled.div`
  padding: 50px 8vw 50px 10vw;
`;

const TabContainer = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: 50px;
  min-height: 400px;
  flex-direction: ${props => props.screenWidth < 1000 ? "column" : "row"}
`;

export default Projects;