import { Link } from "react-router-dom"
import about1 from "../../assets/about2.jpg"
import EducationStrip from "./EducationStrip"
const AboutSection = () => {
  return (
    <div className="about-section">
           <div className="inner-row">
                      <div className="about-section-content">
                                 <div className="intro">
                                          <h3>Rooted in the globally acclaimed <span>CBC </span>and <span>Cambridge curricula</span>, our holistic approach to education empowers learners with the knowledge, character, and resilience to lead and thrive in an ever-changing world.</h3>
                                 </div>

                                 <div className="about-content-group">
                                              <div className="about-content-image">
                                                        <img src={about1} alt="" />
                                              </div>
                                              <div className="about-content-texts">
                                                        <p>Established in 1981 by the late President Daniel Toroitich Arap Moi, the school was born from his unwavering belief that every Kenyan child deserves access to affordable, quality education. Step through our gates and experience the difference — a culture of curiosity, values-driven teaching, and a dynamic community where every learner truly matters. </p>
                                                        <Link to={"/about-MEC"}>Find out More</Link>
                                              </div>
                                 </div>
                      </div>     
                        <EducationStrip />
           </div>
          
    </div>
  )
}

export default AboutSection