import AdmissionProcessBody from "../components/admissions/AdmissionProcessBody"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import "../css/admissions.css"

const AdmissionProcess = () => {
  return (
    <>
             <Navbar />
             <AdmissionProcessBody />
             <Footer />
    </>
  )
}

export default AdmissionProcess