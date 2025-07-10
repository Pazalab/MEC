import blog1 from "../../assets/kids.jpg"
import blog2 from "../../assets/innovation.jpg"
import blog3 from "../../assets/academic.jpg"
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom"

const NewsHero = () => {
  return (
    <div className="news-hero">
            <div className="inner-row">
                      <div className="news-hero-content">
                                  <div className="news-intro">
                                           <h1>Latest News & Updates</h1>
                                           <p>Stay up to date with what's happening at MEC! Read our Blog and browser our events.</p>
                                  </div>

                                  <div className="news-body-strip">
                                             <div className="purple-strip"></div>
                                             <div className="news-body-row">
                                                           <div className="news-body-header">
                                                                     <h3>All News</h3>
                                                                     <select>
                                                                             <option value="">Filter by</option>
                                                                     </select>
                                                           </div>
                                                          <div className="news-body-group">
                                                                         <div className="blog-moja">
                                                                                    <img src={blog1} alt="" />

                                                                                  <div className="blog-texts">
                                                                                            <h3>Event</h3>
                                                                                            <h2>Celebrating Excellence: Highlights from MEC’s Annual Talent & Culture Showcase</h2>
                                                                                            <Link to={"/"}>Read More <span><HiChevronRight /></span></Link>
                                                                                  </div>
                                                                       </div>
                                                                       <div className="blog-moja">
                                                                                  <img src={blog2} alt="" />

                                                                                  <div className="blog-texts">
                                                                                            <h3>News</h3>
                                                                                            <h2>Moi Educational Centre Launches New Innovation Lab to Empower Future-Ready Learners</h2>
                                                                                            <Link to={"/"}>Read More <span><HiChevronRight /></span></Link>
                                                                                  </div>
                                                                       </div>
                                                                        <div className="blog-moja">
                                                                                   <img src={blog3} alt="" />

                                                                                   <div className="blog-texts">
                                                                                             <h3>Academic</h3>
                                                                                             <h2>Beyond the Books: How MEC’s Holistic Approach is Redefining Academic Success</h2>
                                                                                             <Link to={"/"}>Read More <span><HiChevronRight /></span></Link>
                                                                                   </div>
                                                                        </div>
                                                                         <div className="blog-moja">
                                                                                    <img src={blog1} alt="" />

                                                                                  <div className="blog-texts">
                                                                                            <h3>Event</h3>
                                                                                            <h2>Celebrating Excellence: Highlights from MEC’s Annual Talent & Culture Showcase</h2>
                                                                                            <Link to={"/"}>Read More <span><HiChevronRight /></span></Link>
                                                                                  </div>
                                                                       </div>
                                                          </div>
                                             </div>
                                  </div>
                      </div>
            </div>
    </div>
  )
}

export default NewsHero