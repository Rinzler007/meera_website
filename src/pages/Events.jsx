import React from "react";
import InfoSection from "../components/InfoSection";
import { ImpactData, ProjData } from "../data/InfoData";
import Footer from "../components/Footer";
import CommonEvent from "../components/CommonEvent";
import { EventData } from "../data/EventData";

const Projects = () => {
  return (
    <>
      <div
        style={{
          background: "#0D0D26",
          paddingBottom: "60px",
        }}
      ></div>
      <InfoSection {...ImpactData} />
      <CommonEvent primary="true" data={EventData}/>
      <Footer/>
    </>
  );
};

export default Projects;
