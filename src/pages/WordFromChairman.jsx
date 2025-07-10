import Navbar from "../components/common/navigation/Navbar"
import chairman from "../assets/peter-chair.jpg"
import Footer from "../components/common/Footer"
const WordFromChairman = () => {
  return (
    <>
          <Navbar />
          <div className="chairmans-word-wrapper">
                    <div className="inner-row">
                             <div className="chairmans-word-content">
                                        <div className="chairmans-intro-row">
                                                  <div className="chairmans-picture">
                                                             <img src={chairman} alt="MEC-board-chairman-picture" />
                                                  </div>
                                                  <div className="chairmans-intro-texts">
                                                         <h2>Hear from our Board Chairman</h2>
                                                         <p>For over 40 years, Moi Educational Centre has remained a trusted pillar in delivering quality, values-based education. Rooted in our enduring motto, “Strive for Excellence,” we have cultivated a legacy defined by academic strength, moral clarity, and the holistic development of every learner entrusted to us. </p>
                                                  </div>
                                        </div>

                                        <div className="chairmans-words">
                                                  <p>As Kenya’s education system transforms, MEC continues to lead with vision and readiness. We have fully embraced the Competency-Based Curriculum (CBC), with well-trained teachers and a learning environment designed to meet its demands. Our Senior School is CBC-aligned and prepared to o'er the three Ministry-recommended pathways: STEM, Arts and Sports Science, and Social Sciences, ensuring every student is guided toward their strengths, passions, and future career goals. Recognizing the global shift in education, we are proud to now offer the Cambridge International Curriculum, giving our students access to a world-class academic experience while maintaining a strong foundation in values and identity. Whether CBC or Cambridge, our goal remains the same: to raise confident, responsible, and well-prepared young leaders.</p>
                                                  <p> In a rapidly digitizing world, we are thoughtfully integrating technology into the learning process, not for its novelty, but for its power to enhance understanding while preserving the heart of human connection in education. We are more than a school. We are a nurturing community committed to excellence, character, and leadership.</p>
                                                  <p>To every parent exploring the next step of their child, I warmly welcome you to a place where your child's potential is not only seen, it is shaped for a purposeful future.</p>

                                                  <h3>Mr. Paul K. Chemng'orem</h3>
                                                  <h4>Chairman, Board of Directors</h4>
                                        </div>
                             </div>
                    </div>
          </div>
          <Footer />
    </>
  )
}

export default WordFromChairman