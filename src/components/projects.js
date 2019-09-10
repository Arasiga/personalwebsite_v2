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

  const tabStyle = screenWidth > 1000 ? { marginRight: "40px" } : { marginBottom: "40px" }

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
            style={{ ...tabStyle, borderRight: "1 px solid grey" }}
            indicatorColor="primary"
          >
            <Tab label="CodeMeeting" {...a11yProps(0)} />
            <Tab label="Old Personal Website" {...a11yProps(1)} />
            <Tab label="ROOT Education" {...a11yProps(2)} />
            <Tab label="Mindset Labs" {...a11yProps(3)} />
            <Tab label="React Native Apps" {...a11yProps(4)} />
          </Tabs>
          <TabPanel
            value={value}
            info="Donec nec tortor nec nisi rutrum iaculis aliquet ac nulla. Nam a neque rutrum, pretium nibh id, convallis orci. Phasellus aliquet tempus ultricies. Fusce mattis egestas nulla quis accumsan. Vestibulum vel ante nisi. Curabitur elit nulla, ultrices ac convallis vel, porttitor quis risus. Vestibulum erat velit, semper et felis ut, tempus rutrum augue."
            skills={["React", "Node JS", "Web RTC", "Web Sockets", "PostgreSQL", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting.jpg"
            index={0}
          />
          <TabPanel
            value={value}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla pulvinar, posuere dui blandit, vehicula nisl. Aliquam a ligula sit amet mauris malesuada tempus. In facilisis venenatis lorem, eu vehicula eros eleifend at. Curabitur tincidunt sapien urna, non mollis risus semper in. Aliquam quis elementum sem. Curabitur viverra lobortis erat, eu lobortis sapien. Nam pellentesque arcu mi, in lobortis tortor dapibus eget. Suspendisse potenti. Proin molestie mauris quis massa iaculis, quis tincidunt mauris vestibulum."
            skills={["React", "Adobe Illustrator", "Amazon Web Services", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/personalwebsite.jpg"
            index={1}
          />
          <TabPanel
            value={value}
            info="Vestibulum risus risus, tincidunt ut elit a, auctor luctus nibh. Aenean blandit tristique arcu, eu ultrices orci venenatis a. Aenean ultrices sollicitudin sem vel mattis. Nullam vitae velit non lectus sollicitudin porttitor. Proin urna massa, convallis vel lacus sed, aliquam semper sem. Ut vitae dui vitae lorem facilisis blandit. Nulla facilisi. Nunc at porta tortor. In a massa tellus. Cras id quam ullamcorper, volutpat nisl sit amet, tempor nulla. Donec ac tincidunt augue. Suspendisse potenti. Aliquam gravida ante justo."
            skills={["React", "Node JS", "Material UI", "Sequelize"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/root.jpg"
            index={2}
          />
          <TabPanel
            value={value}
            info="Curabitur a ex velit. Aliquam eu semper massa. Duis sodales dignissim lectus at maximus. Suspendisse blandit velit eu ligula condimentum sagittis. Donec a erat ex. Donec nec dui eu orci tempor gravida sed sit amet augue. Vivamus vel lectus est. Vivamus pulvinar tortor vel mauris elementum mollis. Nam venenatis enim sed facilisis ornare. Vestibulum luctus varius mauris at luctus. Ut molestie vel neque vitae varius. Etiam mattis efficitur ligula, at egestas enim convallis quis. Vivamus malesuada non sem et auctor."
            skills={["React", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindset.jpg"
            index={3}
          />
          <TabPanel
            value={value}
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nulla pulvinar, posuere dui blandit, vehicula nisl. Aliquam a ligula sit amet mauris malesuada tempus. In facilisis venenatis lorem, eu vehicula eros eleifend at. Curabitur tincidunt sapien urna, non mollis risus semper in. Aliquam quis elementum sem. Curabitur viverra lobortis erat, eu lobortis sapien. Nam pellentesque arcu mi, in lobortis tortor dapibus eget. Suspendisse potenti. Proin molestie mauris quis massa iaculis, quis tincidunt mauris vestibulum."
            skills={["React Native", "Firebase"]}
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
  // align-items: center;
  // justify-content: center;
  display: flex;
  margin-top: 50px;
  min-height: 450px;
  flex-direction: ${props => props.screenWidth < 1000 ? "column" : "row"}
`;

export default Projects;