import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import AdmissionProcess from './pages/AdmissionProcess'
import SingeEducationPage from './pages/SingeEducationPage'
import Leadership from './pages/Leadership'
import CambridgePage from './pages/CambridgePage'
import { useEffect } from 'react'
import WordFromChairman from './pages/WordFromChairman'
import Events from './pages/Events'
import SingleEventPage from './pages/SingleEventPage'
import SingleArticlePage from './pages/SingleArticlePage'

function App() {
  const location = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-MEC' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/news-and-updates' element={<News />} />
              <Route path="/admissions/admission-process" element={<AdmissionProcess />} />
              <Route path='/education/CBC/:name' element={<SingeEducationPage />} />
              <Route path='/about-MEC/leadership' element={<Leadership />} />
              <Route path='/about-MEC/word-from-our-chairman' element={<WordFromChairman />} />
              <Route path='/education/cambridge-system' element={<CambridgePage />} />
              <Route path="/about-MEC/school-events" element={<Events />} />
              <Route path="/about-MEC/school-events/:name" element={<SingleEventPage />} />
              <Route path='/news-and-updates/:title' element={<SingleArticlePage />} />
    </Routes>
  )
}

export default App
