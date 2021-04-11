import React from 'react'
import CarouselSection from '../components/CarouselSection'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { AboutData, InfoData, StoryData } from '../data/InfoData'
import { TeamData, TeamHeading } from '../data/TeamData'

const About = () => {
  return (
    <>
     <div style={{
       background:"#0D1821",
       paddingBottom:"50px"
     }}></div>
      <InfoSection {...AboutData} about="true"/>
      <CarouselSection team="true" textData={TeamHeading} carouselData={TeamData}/>      
      <Footer />
    </>
  )
}

export default About
