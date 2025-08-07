
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Service from './pages/Service'
import Project from './pages/Project'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Service/>}/>
        <Route path='/projects' element = {<Project/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
