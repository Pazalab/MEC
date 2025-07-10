import { Link } from "react-router-dom"

const UniqueSection = () => {
  return (
    <div className="unique-section">
              <div className="section-texts">
                        <div className="section-texts-group">
                                   <h2>What Makes Us <span>Unique?</span></h2>
                                   <p>Moi Educational Centre is renowned for academic excellence, fostering a spirit of curiosity in students from a rich diversity of backgrounds and experiences. At the heart of our school is a community of passionate educators who cultivate independent thinking and inspire creativity. Our learners are encouraged to explore their unique interests, while engaging in collaborative outreach that nurtures empathy and prepares them for compassionate, forward-thinking leadership in an increasingly interconnected world.</p>

                                   <Link to={"/about-MEC/word-from-our-chairman"}>Hear From Our Chair</Link>
                        </div>
              </div>
              <div className="unique-image"></div>
    </div>
  )
}

export default UniqueSection