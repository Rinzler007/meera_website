import React from 'react';
import InfoSection from "./InfoSection";
import { VisionData } from "../data/InfoData";

const Vision = () => {
    return (
        <div>
         <InfoSection {...VisionData} primary="true" height="500px"/>
        </div>
    )
}

export default Vision
