import React from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { DonateData } from '../data/InfoData'

const Donate = () => {
    return (
        <>
          <InfoSection {...DonateData} height="85vh" donate="true"/>
          <Footer/>  
        </>
    )
}

export default Donate
