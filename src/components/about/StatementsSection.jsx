import school from "../../assets/school7.jpg"
import { values } from "../../data/values"

const StatementsSection = () => {
  return (
    <div className="statement-section">
             <div className="inner-row">
                     <div className="statements-content">
                               <div className="statements-grid">
                                         <div className="statement-moja">
                                                      <h3>Our Mission</h3>
                                                      <p>To provide holistic, accessible, and high-quality education that inspires curiosity, cultivates character, and unlocks every learner’s full potential — empowering them to thrive academically, socially, and ethically in an ever-changing world.</p>
                                         </div>
                                         <span></span>
                                         <div className="statement-moja">
                                                     <h3>Our Vision</h3>
                                                     <p>To be a leading centre of educational excellence — nurturing empowered, compassionate, and globally-minded learners who are equipped to lead, serve, and shape a better future.</p>
                                         </div>
                               </div>

                               <div className="values-system">
                                          <div className="values-intro">
                                                  <div className="value-system-texts">
                                                          <h2>The Values That Shape Us</h2>
                                                          <p>At MEC, our values are the foundation of who we are and how we operate. They inform every decision, interaction, and experience within our community. We invite every member of our school — students, staff, and families — to uphold these principles as the standard for learning, growing, and working together.</p>
                                                  </div>
                                                  <img src={school} alt="" />
                                          </div>
                                          <div className="values-body">
                                                    { values.map(item => 
                                                         <div className="value-moja" key={item.id}>
                                                                 <h3>{item.title}</h3>
                                                                 <p>{item.description}</p>
                                                        </div>
                                                    )}
                                          </div>
                               </div>
                     </div>
             </div>
    </div>
  )
}

export default StatementsSection