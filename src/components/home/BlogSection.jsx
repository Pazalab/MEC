import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi2";
import Accreditations from "./Accreditations";
import Explorations from "./Explorations";
import { articles } from "../../data/articles";
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
                                              <Link to={"/news-and-updates"}>View all Articles<span><BsArrowRight /></span></Link>
                                  </div>

                                  <div className="blog-section-row">
                                            { articles.slice(0,3).map(item => 
                                                <div className="blog-moja" key={item.id}>
                                                        <img src={item.image} alt="" />

                                                        <div className="blog-texts">
                                                                  <h3>{item.category}</h3>
                                                                  <h2>{item.title}</h2>
                                                                  <Link to={item.link}>Read More <span><HiChevronRight /></span></Link>
                                                        </div>
                                                </div>
                                            )}
                                  </div>
                        </div>
                        <Accreditations />
              </div>
    </div>
  )
}

export default BlogSection