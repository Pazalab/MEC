import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import AdmissionProcess from './pages/AdmissionProcess'

function App() {
  return (
    <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-MEC' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/news-and-updates' element={<News />} />
              <Route path="/admissions/admission-process" element={<AdmissionProcess />} />
    </Routes>
  )
}

export default App
