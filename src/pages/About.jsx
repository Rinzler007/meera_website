import React from 'react'
import CarouselSection from '../components/CarouselSection'
import Contact from '../components/Contact'
import InfoSection from '../components/InfoSection'
import { AboutData, InfoData, StoryData } from '../data/InfoData'
import { TeamData, TeamHeading } from '../data/TeamData'

const About = () => {
  return (
    <>
     <div style={{
       background:"#000d1a",
       paddingBottom:"50px"
     }}></div>
      <InfoSection {...AboutData} about="true"/>
      <InfoSection {...InfoData} primary="true"/>
      <InfoSection {...StoryData}/>
      <CarouselSection team="true" textData={TeamHeading} carouselData={TeamData}/>
      <Contact/>
      
      
    </>
  )
}

export default About
