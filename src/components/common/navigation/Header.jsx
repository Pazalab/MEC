import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { TbSchool } from "react-icons/tb";
import Dropdown from "./Dropdown";
import { useContext, useState } from "react";
import { CgMenu } from "react-icons/cg";
import { sidebarContext } from "./navcontext";
const Header = () => {
  const [ aboutDrop, setAboutDrop ] = useState(false)
  const [ educationDrop, setEducationDrop ] = useState(false);
  const [ admissionDrop, setAdmissionDrop ] = useState(false);
  const aboutData = [
         { id: 0, title: "About MEC", link: "/about-us/about-mec"},
         { id: 1, title: "Word from Director", link: "/about-us/word-from-our-director"},
         { id: 39, title: "Academic Results", link: "/about-us/academic-results"},
         { id: 2, title: "Our Staff", link: "/about-us/our-staff"},
         { id: 3, title: "School Facilities", link: "/about-us/school-facilities"},
         { id: 4, title: "Careers", link: "/about-us/careers"}
  ]
  const educationData = [
      { id: 0, title: "Pre-primary", link: "/education/pre-primary"},
      { id: 1, title: "Middle School", link: "/education/middle-school"},
      { id: 2, title: "Senior School", link: "/education/senior-school"}
  ]
  const admissionData = [
    { id: 0, title: "Admission Process", link: "/admissions/admission-process"},
    { id: 1, title: "Fees", link: "/admissions/fees"},
    { id: 2, title: "FAQs", link: "/admissions/faqs"},
    { id: 3, title: "Bronchure", link: "/admissions/bronchure"}
  ]
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);
  return (
    <header>
             <div className="inner-row">
                        <div className="header-content">
                                     <Link to={"/"} className="logo">
                                               <img src={logo} alt="Moi Educational Center logo" />
                                               <div className="logo-texts">
                                                        <h2>Moi Educational Centre</h2>
                                                        <p>Strive for Excellence</p>
                                               </div>
                                     </Link>
                                     <nav>
                                               <ul>
                                                       <li><NavLink to={"/"}>Home</NavLink></li>
                                                       <li onMouseEnter={() => setAboutDrop(true)} onMouseLeave={() => setAboutDrop(false)}><NavLink to={"/about-us"}>About</NavLink>
                                                                <Dropdown data={aboutData} status={aboutDrop}/>
                                                       </li>
                                                       <li onMouseEnter={() => setEducationDrop(true)} onMouseLeave={() => setEducationDrop(false)}><NavLink to={"/education"}>Education</NavLink>
                                                                 <Dropdown data={educationData} status={educationDrop} />
                                                       </li>
                                                       <li onMouseEnter={() => setAdmissionDrop(true)} onMouseLeave={() => setAdmissionDrop(false)}><NavLink to={"/admissions"}>Admissions</NavLink>
                                                                <Dropdown data={admissionData} status={admissionDrop} />
                                                       </li>
                                                       <li><NavLink to={"/news"}>News & Updates</NavLink></li>
                                                       <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                                               </ul>

                                               <div className="header-actions">
                                                        <button>Book a Tour <span><TbSchool /></span></button>
                                                        <span onClick={() => setSidebarStatus(true)} className="menu-btn"><CgMenu /></span>
                                               </div>
                                     </nav>
                        </div>
             </div>
    </header>
  )
}

export default Header