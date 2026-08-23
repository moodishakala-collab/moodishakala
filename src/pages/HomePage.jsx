import React from 'react'
import Herosection from '../components/Herosection'
import CategorySlider from '../components/VehicleSlider'
import HomeExtraSections from '../components/HomeExtraSections'
import TrustFeatures from '../components/TrustFeatures'

const HomePage = () => {
    return (
        <div>
            <Herosection />
            <CategorySlider />
            <TrustFeatures />
            <HomeExtraSections />
        </div>
    )
}

export default HomePage