import Navbar from '../components/common/navigation/Navbar'
import AboutHero from '../components/about/AboutHero'
import "../css/about.css"
import StatementsSection from '../components/about/StatementsSection'
import LeadershipSection from '../components/about/LeadershipSection'
import Footer from '../components/common/Footer'
const About = () => {
  return (
    <>
          <Navbar />
          <AboutHero />
          <StatementsSection />
          <LeadershipSection />
          <Footer />
    </>
  )
}

export default About