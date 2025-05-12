import { Link } from "react-router-dom"
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RiLinkedinFill } from "react-icons/ri";
import { SiTiktok } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
             <div className="inner-row">
                       <div className="footer-content">
                                  <div className="footer-column">
                                           <h2>Guiding every learner to discover, grow and thrive beyond the classroom.</h2>
                                  </div>
                                  <div className="footer-column split">
                                             <div className="footer-column-grid">
                                                       <h4>Get in Touch</h4>
                                                       <div className="location">
                                                              <p>Mai Mahiu Road</p>
                                                              <p>City Estate</p>
                                                              <p>Nairobi West</p>
                                                       </div>

                                                       <span>info@moieducentre.ac.ke</span>

                                                       <p>+254 702 090 213</p>
                                             </div>
                                             <div className="footer-column-grid">
                                                          <h4>Useful Links</h4>
                                                          <ul>
                                                                   <li><Link to={"/"}>Admissions</Link></li>
                                                                   <li><Link to={"/"}>FAQs</Link></li>
                                                                   <li><Link to={"/"}>Academic Results</Link></li>
                                                                   <li><Link to={"/"}>Learning</Link></li>
                                                                   <li><Link to={"/"}>Events</Link></li>
                                                                   <li><Link to={"/"}>Bronchure</Link></li>
                                                                   <li><Link to={"/"}>Contact Us</Link></li>
                                                          </ul>
                                             </div>

                                             <div className="footer-column-grid">
                                                       <div className="footer-social-links">
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

                       <div className="copyright">
                                 <p>&copy; Moi Educational Center { new Date().getFullYear() } All Rights Reserved</p>
                                 <p>Privacy policy</p>
                       </div>
             </div>
    </footer>
  )
}

export default Footer