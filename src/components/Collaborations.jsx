import React from 'react'
import { CollabHeading, CollaboratorsData } from '../data/CollaboratorsData'
import CarouselSection from './CarouselSection'

const Collaborations = () => {
    return (
        <>
           <CarouselSection carouselData={CollaboratorsData} textData={CollabHeading}/> 
        </>
    )
}

export default Collaborations
