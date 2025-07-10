import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import heroPoster from "../../assets/hero-poster2.jpg"
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
            gsap.to(heroRef.current.querySelector(".hero-texts"), {
                   opacity: 0,
                   scale: 0,
                   scrollTrigger: {
                          trigger: heroRef.current.querySelector(".hero-texts"),
                          start: "270px center",
                          end: "+=300px",
                          scrub: true,
                          invalidateOnRefresh: true,
                   }
            })
            gsap.to(heroRef.current.querySelector(".hero-video"), {
                   width: "100%",
                   scrollTrigger: {
                          trigger: heroRef.current.querySelector(".hero-video"),
                          start: "-100px center",
                          end: "+=400px",
                          scrub: true,
                          invalidateOnRefresh: true,
                   }
            })
    }, [])
    
  return (
    <div ref={heroRef} className="hero-section">
                <div className="hero-texts">
                           <h1>Where Excellence <span>Meets Purpose.</span></h1>

                           <p>We shape minds and nurture hearts, where every child is seen, heard, and inspired, learning not just from books, but through discovery, identity, and excellence.</p>
                </div>

                <div ref={videoRef} className="hero-video">
                           <video autoPlay loop muted poster={heroPoster}>
                                    <source src={"https://res.cloudinary.com/dq6subhaj/video/upload/v1752157591/Hdrone_3_nmrq9l.mp4"} type="video/mp4" />
                           </video>
                </div>
    </div>
  )
}

export default HeroSection