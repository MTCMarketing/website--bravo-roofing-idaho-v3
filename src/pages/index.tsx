import * as React from "react"
import Header from "../Components/header"
import MobileStickyCTA from "../Components/MobileStickyCTA"
import HeroSection from "../Components/hero"
import TestimonialSlider from "../Components/testimonial"
import ServiceCard from "../Components/Services"
import NewsletterSubscription from "../Components/NewsletterSubscription"
import Footer from "../Components/Footer"
import FAQSection from "../Components/Faq"
import ProjectManagementSection from "../Components/procces"
import AboutSection from "../Components/about"
import RecentProjects from "../Components/projects"
import ExitIntentPopup from "../Components/Exit"

const height = {
  height: "1000vh",
}

const IndexPage = () => {
  return (
   <main >
     <ExitIntentPopup/>
    <Header/>
    <HeroSection/>
    <TestimonialSlider/>
    <ServiceCard/>
    <AboutSection/>
    <ProjectManagementSection/>
    <FAQSection/>
    <RecentProjects/>
    <Footer/>
    </main>
  )
}

export default IndexPage