import React from "react";
import InfoSection from "../components/InfoSection";
import { InfoData } from "../data/InfoData";
import Footer from "../components/Footer";
import { ProjectData } from "../data/ProjectData";
import CommonEvent from "../components/CommonEvent";
import { EventData } from "../data/EventData";

const Projects = () => {
  return (
    <>
      <div
        style={{
          background: "#000d1a",
          paddingBottom: "60px",
        }}
      ></div>
      <InfoSection {...InfoData} primary="true"/>
      <CommonEvent data={ProjectData}/>
      <CommonEvent primary="true" data={EventData}/>
      <Footer/>
    </>
  );
};

export default Projects;
