import React from "react";
import { MissionData } from "../data/InfoData";
import InfoSection from "./InfoSection";

const Mission = () => {
  return (
    <div>
      <InfoSection {...MissionData} primary="true" height="500px"/>
    </div>
  );
};

export default Mission;
