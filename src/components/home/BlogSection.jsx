import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi2";
import blog1 from "../../assets/kids.jpg"
import blog2 from "../../assets/innovation.jpg"
import blog3 from "../../assets/academic.jpg"
import Accreditations from "./Accreditations";
import Explorations from "./Explorations";
const BlogSection = () => {
  return (
    <div className="blog-section">
              <div className="inner-row">
                        <Explorations />
                        <div className="blog-section-content">
                                  <div className="blog-intro">
                                              <div className="blog-intro-column">
                                                        <h3>Latest News & Updates</h3>
                                                        <h2>Stay up to date with what’s happening at MEC! Read our Blog and see our events</h2>
                                              </div>
                                              <Link to={"/"}>View all News <span><BsArrowRight /></span></Link>
                                  </div>

                                  <div className="blog-section-row">
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
                                  </div>
                        </div>
                        <Accreditations />
              </div>
    </div>
  )
}

export default BlogSection