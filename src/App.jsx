import { useRef } from 'react'
import './App.scss'
import Navbar from './Components/navbar/navbar'
import Home_hero from './Components/home_hero/home_hero'
import Home_project from './Components/home_project/home_project'
import Home_content from './Components/home_content/home_content'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Home_contact from './Components/home_contact/home_contact'


function App() {

  const refrence = useRef(null);

  const options = {
    smooth: true,
  }

  return (
    <LocomotiveScrollProvider options={options} containerRef={refrence} >
    <div
        data-scroll-container
      className={"App"}>
        <Navbar />
        <Home_hero />
        <Home_project />
        <Home_content />
        <Home_contact/>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App
