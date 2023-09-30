import Banner from '@/app/components/banner'
import Cards from '@/app/components/cards'
import Comp from '@/app/components/comp'
import Count from '@/app/components/count'
import Footer from '@/app/components/footer'
import Navbar from '@/app/components/navbar'
import Para from '@/app/components/para'
import Truckcard from '@/app/components/truckcard'
import Truepara from '@/app/components/truepara'
import React from 'react'

function Landing() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Count/>
    <Para/>
    <Truckcard/>
    <Comp/>
    <Truepara/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Landing