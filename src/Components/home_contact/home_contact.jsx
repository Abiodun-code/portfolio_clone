import React, { useEffect } from 'react'
import './home_contact.scss'
import './contactQuery.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home_contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    const link = gsap.timeline({
      scrollTrigger:{
        trigger:'link',
        scrub:true
      }
    })
    link.to(".link", { x: -10, duration: 1 })
  },[])

  return (
    <div className='home_contact'>
      <div className="wrapper">
        <div className="contact_top">
          <span>Got a question, proposal or project or want to work together on something? Feel free to reach out.</span>
        </div>
        <div className="contact_bottom">
          <div className="contact_line">
            <div className="line"></div>
          </div>
          <div data-scroll data-scroll-speed='3' data-scroll-direction='horizontal' className="contact_text link">
            <a href='mailto:olaabiodun157@gmail.com'>
              LET’S TALK — LET’S COLLABORATE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_contact
