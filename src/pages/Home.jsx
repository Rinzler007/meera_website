import React from "react";
import Hero from '../components/Hero';
import {SliderData} from '../data/SliderData'
import InfoSection from '../components/InfoSection';
import { InfoData } from '../data/InfoData';
import Vision from '../components/Vision';
import Impact from '../components/Impact';
import Collaborations from "../components/Collaborations";
import Mission from "../components/Mission";

const Home = ({toggle}) => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} height="500px" primary="true" />
      <Mission />
      <Vision />
      <Impact />
      <Collaborations />
    </>
  );
};

export default Home;
