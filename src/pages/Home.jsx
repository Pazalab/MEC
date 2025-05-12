import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import AboutSection from "../components/home/AboutSection"
import AdmissionSection from "../components/home/AdmissionSection"
import BlogSection from "../components/home/BlogSection"
import CommunitySection from "../components/home/CommunitySection"
import HeroSection from "../components/home/HeroSection"
import ThriveSection from "../components/home/ThriveSection"
import UniqueSection from "../components/home/UniqueSection"
import "../css/home.css"

const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <UniqueSection />
          <ThriveSection />
          <CommunitySection />
          <AdmissionSection />
          <BlogSection />
          <Footer />
    </>
  )
}

export default Home