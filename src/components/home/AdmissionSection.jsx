import { TbSchool } from "react-icons/tb"
import { useNavigate } from "react-router-dom"


const AdmissionSection = () => {
  const navigate = useNavigate();
  return (
    <div className="admission-section">
               <div className="admission-group-item">
                          <h3>Admissions</h3>
                          <h2>Joining Moi Educational Centre</h2>
                          <p>Joining Moi Educational Centre marks the start of a meaningful journey — where every learner is welcomed, supported, and empowered to thrive. With a strong focus on academic excellence, character development, and holistic growth, our admissions process is warm, personal, and guided every step of the way.</p>
                          <button onClick={() => navigate("/admissions/admission-process")}>Admission Process<span><TbSchool /></span></button>
               </div>
    </div>
  )
}

export default AdmissionSection