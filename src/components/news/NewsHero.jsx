
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom"
import { articles } from "../../data/articles";

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
                                                                  { articles.map(item => 
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
                                  </div>
                      </div>
            </div>
    </div>
  )
}

export default NewsHero