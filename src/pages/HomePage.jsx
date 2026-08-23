import React from 'react'
import Herosection from '../components/Herosection'
import CategorySlider from '../components/VehicleSlider'
import HomeExtraSections from '../components/HomeExtraSections'

const HomePage = () => {
    return (
        <div>
            <Herosection />
            <CategorySlider />
            <HomeExtraSections />
        </div>
    )
}

export default HomePage