import { Link, NavLink, useLocation } from "react-router-dom"
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
         { id: 0, title: "About MEC", link: "/about-MEC"},
         { id: 1, title: "Our Leadership", link: "/about-MEC/leadership"},
         { id: 2, title: "Word from our Chairman", link: "/about-MEC/word-from-our-chairman"},
         { id: 3, title: "School Events", link: "/about-MEC/school-events"}
        //  { id: 39, title: "Academic Results", link: "#"},
        //  { id: 3, title: "School Facilities", link: "#"},
        //  { id: 4, title: "Careers", link: "#"}
  ]
  const educationData = [
      { id: 0, title: "Pre-primary", link: "/education/CBC/pre-primary"},
      { id: 1, title: "Lower Primary", link: "/education/CBC/lower-primary"},
      { id: 2, title: "Upper Primary", link: "/education/CBC/upper-primary"},
      { id: 3, title: "Junior School", link: "/education/CBC/junior-school"},
      { id: 4, title: "Senior School", link: "/education/CBC/senior-school"},
      { id: 5, title: "Cambridge System", link: "/education/cambridge-system"}
  ]
  const admissionData = [
    { id: 0, title: "Admission Process", link: "/admissions/admission-process"},
    // { id: 1, title: "Fees", link: "#"},
    { id: 2, title: "FAQs", link: "#"},
    // { id: 3, title: "Bronchure", link: "#"}
  ]
  // eslint-disable-next-line no-unused-vars
  const [ sidebarStatus, setSidebarStatus ] = useContext(sidebarContext);

  const { pathname } = useLocation();
 // console.log(pathname.slice(1,11))
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
                                                       <li onMouseEnter={() => setAboutDrop(true)} onMouseLeave={() => setAboutDrop(false)}><Link to={"#"} className={ pathname.slice(1, 10) === "about-MEC" ? "active" : ""}>About</Link>
                                                                <Dropdown data={aboutData} status={aboutDrop}/>
                                                       </li>
                                                       <li onMouseEnter={() => setEducationDrop(true)} onMouseLeave={() => setEducationDrop(false)}><Link to={"#"} className={ pathname.slice(1, 10) === "education" ? "active" : ""}>Education</Link>
                                                                 <Dropdown data={educationData} status={educationDrop} />
                                                       </li>
                                                       <li onMouseEnter={() => setAdmissionDrop(true)} onMouseLeave={() => setAdmissionDrop(false)}><Link to={"#"} className={ pathname.slice(1, 11) === "admissions" ? "active": ""}>Admissions</Link>
                                                                <Dropdown data={admissionData} status={admissionDrop} />
                                                       </li>
                                                       <li><NavLink to={"/news-and-updates"}>News & Updates</NavLink></li>
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