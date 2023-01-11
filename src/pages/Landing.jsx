import React from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import CompFoot from '../component/Footer'
import Banner from '../component/Banner'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Card />
        <CompFoot />
    </div>
  )
}

export default Landing