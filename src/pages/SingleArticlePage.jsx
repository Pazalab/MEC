import { useParams } from "react-router-dom"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import { articles } from "../data/articles";
import { ImLocation2 } from "react-icons/im";
import { LuCalendarDays } from "react-icons/lu";

const SingleArticlePage = () => {
    const { title } = useParams();
    const data = articles.find(item => item.url_param === title)
  return (
    <>
            <Navbar />
            <div className="single-article-page">
                     <div className="inner-row">
                                <div className="single-article-content">
                                           <img className="intro-image" src={data.image} alt="" />
                                           <div className="single-article-title">
                                                     <h3>{data.category}</h3>
                                                    <h2>{data.title}</h2>
                                                    { data.intro && <h4>{data.intro}</h4>}
                                           </div>
                                           <div className="single-article-body">
                                                    { data.body.map(item => <p key={item}>{item}</p>)}
                                                    { data.body_list && 
                                                           <>
                                                                 <ul>
                                                                          { data.body_list.data.map(item => <li key={item}>{item}</li>)}
                                                                 </ul>
                                                                 <p>{data.body_list.justification}</p>
                                                           </>
                                                    }
                                                    { data.expectations && 
                                                          <>
                                                                 <h3>{data.expectations.intro}</h3>
                                                                 <ul>
                                                                         { data.expectations.list.map(item => <li key={item}>{item}</li>)}
                                                                 </ul>
                                                          </>
                                                    }
                                                    { data.extra_info && <p>{data.extra_info}</p>}
                                                    { data.pitch && <p><span>{data.pitch}</span></p>}

                                                    <div className="body-block">
                                                             { data.location && <p><span><ImLocation2 /></span>{data.location}</p>}
                                                             { data.date && <p><span><LuCalendarDays /></span>{data.date}</p>}
                                                    </div>
                                           </div>
                                </div>
                     </div>
            </div>
            <Footer />
    </>
  )
}

export default SingleArticlePage