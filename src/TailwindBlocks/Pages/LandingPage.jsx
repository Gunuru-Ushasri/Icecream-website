import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
import ContentSection from '../Components/ContentSection'
import GallerySection from '../Components/GallerySection'
import HoverSection from '../Components/HoverSection'
import FeatureSection from '../Components/FeatureSection'
import Pricing from '../Components/Pricing'
import TeamSection from '../Components/TeamSection'
import Testimonial from '../Components/Testimonial'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const LandingPage = ({change}) => {
  return (
    <div>
   <NavBar change={change}/>
   <Hero/>
   <ContentSection/>
   <GallerySection/>
   <HoverSection/>
   <FeatureSection/>
   <Pricing/>
   <TeamSection/>
   <Testimonial/>
   <Contact/>
   <Footer/>
    </div>
  )
}

export default LandingPage
