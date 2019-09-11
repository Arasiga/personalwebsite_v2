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
            <Tab label="Root Education" {...a11yProps(2)} />
            <Tab label="Mindset Labs" {...a11yProps(3)} />
            <Tab label="React Native Apps" {...a11yProps(4)} />
          </Tabs>
          <TabPanel
            value={value}
            info="CodeMeeting is a web app that facilitates remote pair programming allowing users to join a room and take advantage of video chat, live programming and an interactive white board. This project was built as my final project at Lighthouse Labs with two other group members. I completed the user interface as well as the live interactions in the application. Users are able to compile C++, Javascript, and Ruby code using serverside scripts. This project was presented in front of 500+ people during my cohort's Demo Day at Lighthouse Labs in Toronto receiving great feedback."
            skills={["React", "Node JS", "Web RTC", "Web Sockets", "PostgreSQL", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/codemeeting.jpg"
            index={0}
          />
          <TabPanel
            value={value}
            info="Before creating this website, I had a previous iteration that I developed in first year of university. You can check it out on my github or at alexrasiga.website. I spent most of my time learning Adobe Illustrator and designing the graphics (notably the circuit SVG on the landing page). It was one of my first personal projects written in React and it was a blast putting it together!"
            skills={["React", "Adobe Illustrator", "Amazon Web Services", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/personalwebsite.jpg"
            index={1}
          />
          <TabPanel
            value={value}
            info="Root Education was a project that my instructor at Lighthouse Labs invited me to help one. It was a online learning platform much like Udemy. This was my first paid job as a software developer and allowed me to learn several good practices while coding including proper use of git source control within a team, AGILE methodology, and using interactive boards to facilitate collaboration within a team such as TRELLO."
            skills={["React", "Node JS", "Material UI", "Sequelize"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/root.jpg"
            index={2}
          />
          <TabPanel
            value={value}
            info="Much like Root Education, Mindset Labs was a group of software developers created by the head instructors at Lighthouse Labs. They asked me to help create their landing page which gave me a solid foundation for front end development and using React at a production level."
            skills={["React", "Bootstrap"]}
            image="https://s3.amazonaws.com/alexrasiga.ca.images/screenshots/mindset.jpg"
            index={3}
          />
          <TabPanel
            value={value}
            info="As mentioned in the about section, I recently completed a course introducing me to React Native. As I was progressing through the course, I was able to create several apps for react native including a employee manager app, an authentication app, and a app that would connect to an api serving music albums"
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