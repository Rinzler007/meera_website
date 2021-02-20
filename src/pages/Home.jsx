import React from "react";
import Hero from '../components/Hero';
import {SliderData} from '../data/SliderData'
import Vision from '../components/Vision';
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import Collaborations from "../components/Collaborations";

const Home = ({toggle}) => {
  return (
    <>
      <Hero slides={SliderData} />
      <Mission />
      <Vision />
      <Collaborations/>
      <Footer />
    </>
  );
};

export default Home;
