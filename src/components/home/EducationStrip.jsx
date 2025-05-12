import { Link } from "react-router-dom"
import { TbSchool } from "react-icons/tb";
import junior from "../../assets/junior.jpg"
import middle from "../../assets/middle.jpg"
import senior from "../../assets/senior.jpg"
import { BsArrowRight } from "react-icons/bs";

const EducationStrip = () => {
  return (
    <div className="education-strip">
              <div className="education-strip-intro">
                       <h2>Learning with Us</h2>
                       <Link to={"/"}>Book a Tour <span><TbSchool /></span></Link>
              </div>
             <div className="education-strip-row">
                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={junior} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052603/nursery-pre-prep-and-prep-v8_xwx142.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 4 - 8</h3>
                                                        <h2>Pre-primary</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>

                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={middle} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 9 - 14</h3>
                                                        <h2>Middle School</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>

                        <div className="education-strip-moja">
                                   <div className="strip-background">
                                            <div className="strip-background-image">
                                                       <img src={senior} alt="" />
                                            </div>
                                            <div className="strip-background-video">
                                                    <video autoPlay loop muted>
                                                            <source src="https://res.cloudinary.com/dq6subhaj/video/upload/v1747052601/6th-form-v4_larwe3.mp4" type="video/mp4" />
                                                     </video>
                                            </div>
                                   </div>
                                   <div className="overshadow"></div>
                                   <div className="strip-texts">
                                             <div className="">
                                                        <h3>Age 15 - 17</h3>
                                                        <h2>Senior School</h2>
                                             </div>

                                              <Link to={"/"}>Learn More <span><BsArrowRight /></span></Link>
                                   </div>
                        </div>
             </div>
    </div>
  )
}

export default EducationStrip