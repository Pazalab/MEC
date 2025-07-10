import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { TbSchool } from "react-icons/tb";
import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { sidebarContext } from "./navcontext";
import { GrFacebookOption } from "react-icons/gr";
import { FaX, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";

const Sidebar = () => {
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  const sidebarRef = useRef();

  useEffect(() => {
         if(sidebarStatus){
               sidebarRef.current.classList.add("active");

               const tl = gsap.timeline();

               tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
                      opacity: 1,
                      duration: 0.5,
                      scale: 2,
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-header"), {
                      y: 0,
                      opacity: 1,
                      duration: 0.5
               })
               tl.to(sidebarRef.current.querySelector(".sidebar-grid-nav"), {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
               })
         }
  }, [sidebarStatus])

  const handleRemoveSidebar = () => {
         const tl = gsap.timeline();

         tl.to(sidebarRef.current.querySelector(".sidebar-grid-nav"), {
              y: "200px",
             opacity: 0,
             duration: 0.5
         })

         tl.to(sidebarRef.current.querySelector(".sidebar-header"), {
                y: "-200px",
                opacity: 0,
                duration: 0.5
         })

         tl.to(sidebarRef.current.querySelector(".sidebar-overlay"), {
              opacity: 1,
              duration: 0.5,
              scale: 0
         })

         setTimeout(() => {
                sidebarRef.current.classList.remove("active");
                setSidebarStatus(false)
         }, 1400)
  }
  return (
    <div ref={sidebarRef} className="sidebar-section">
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content-group">
                 <div className="sidebar-content">
                      <div className="sidebar-header">
                                    <Link to={"/"} className="logo">
                                             <img src={logo} alt="Moi Educational Center logo" />
                                             {/* <div className="logo-texts">
                                                     <h2>Moi Educational Center</h2>
                                                     <p>Strive for Excellence</p>
                                             </div> */}
                                  </Link>
                                  <div className="sidebar-actions">
                                            <button>Book a Tour <span><TbSchool /></span></button>
                                            <span className="close-btn" onClick={handleRemoveSidebar}><CgClose /></span>
                                  </div>
                      </div>
                      <div className="sidebar-grid-nav">
                                  <div className="sidebar-grid-col">
                                             <div className="sidebar-grid-wrap">
                                                        <h2>About</h2>
                                                        <ul>
                                                                <li><NavLink to={"/about-us/who-we-are"}>Who We Are</NavLink></li>
                                                                <li><NavLink to={"/about-us/word-from-our-director"}>Word from Director</NavLink></li>
                                                                <li><NavLink to={"/about-us/academic-results"}>Academic Results</NavLink></li>
                                                                <li><NavLink to={"/about-us/our-staff"}>Our Staff</NavLink></li>
                                                                <li><NavLink to={"/about-us/school-facilities"}>School Facilities</NavLink></li>
                                                                <li><NavLink to={"/about-us/careers"}>Careers</NavLink></li>
                                                        </ul>
                                             </div>
                                  </div>

                                  <div className="sidebar-grid-col">
                                              <div className="sidebar-grid-wrap">
                                                        <h2>Learning</h2>
                                                        <ul>
                                                                  <li><NavLink to={"Pre-primary"}>Pre Primary</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Middle School</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Senior School</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Co-curricular</NavLink></li>
                                                        </ul>
                                              </div>
                                  </div>

                                  <div className="sidebar-grid-col">
                                              <div className="sidebar-grid-wrap">
                                                        <h2>Admissions</h2>
                                                        <ul>
                                                                  <li><NavLink to={"Pre-primary"}>Apply</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Fees</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Senior School</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Co-curricular</NavLink></li>
                                                        </ul>
                                              </div>
                                  </div>

                                  <div className="sidebar-grid-col">
                                              <div className="sidebar-grid-wrap">
                                                       <h2>Useful Links</h2>
                                                        <ul>
                                                                  <li><NavLink to={"/"}>Home</NavLink></li>
                                                                  <li><NavLink to={"/news-and-updates"}>News & Updates</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Contact Us</NavLink></li>
                                                                  <li><NavLink to={"Pre-primary"}>Child Safety</NavLink></li>
                                                        </ul>
                                              </div>
                                  </div>
                         </div>

                         <div className="sidebar-extra">
                              <div className="sidebar-contacts">
                                        <h3>Contact Details</h3>
                                        <p>Mai Mahiu Road - City Estate · Nairobi West, Nairobi, Kenya</p>
                                        <p>+254 702 090 213</p>
                              </div>
                              <div className="social-links">
                                          <ul>
                                                   <li><Link to={"/"}><span><GrFacebookOption /></span></Link></li>
                                                   <li><Link to={"/"}><span><FaXTwitter /></span></Link></li>
                                                   <li><Link to={"/"}><span><LuInstagram /></span></Link></li>
                                                   <li><Link to={"/"}><span><RiLinkedinFill/></span></Link></li>
                                                   <li><Link to={"/"}><span><SiTiktok /></span></Link></li>
                                          </ul>
                              </div>
                       </div>
                  </div>
             </div>
    </div>
  )
}

export default Sidebar