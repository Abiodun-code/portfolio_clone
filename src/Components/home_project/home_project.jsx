import React, { useEffect, useRef } from 'react'
import './home_project.scss'
import './projectQuery.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home_project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const link1 = gsap.timeline({
      scrollTrigger: {
        trigger:".link1",
        scrub: true
      }
    }); link1.to(".link1", {x: 10, duration: 2})

    const link2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".link2",
        scrub: true
      }
    }); link2.to(".link2", { x: -10, duration: 2 })
  }, [])
  
  return (
    <div className='home_project'>
      <div className="wrapper">
        <div className="project_right">
          <div className="project_line">
            <div className="line"></div>
          </div>
          <div className="project_label">
            <span>FEATURED <br /> PROJECTS (6)</span>
            <span>ART DIRECTION / <br /> WEB3 DEVELOPMENT</span>
          </div>
          <div className="project_link link1" data-scroll data-scroll-speed='3' data-scroll-direction='horizontal'>
            <a href=" https://abiodun-appwind-123.netlify.app/">appwind - design template</a>
          </div>
        </div>
        <div className="project_right">
          <div className="project_line">
            <div className="line"></div>
          </div>
          <div className="project_label">
            <span>FEATURED <br /> PROJECTS (6)</span>
            <span>ART DIRECTION / <br /> WEB3 DEVELOPMENT</span>
          </div>
          <div className="project_link link2" data-scroll data-scroll-speed='-3' data-scroll-direction='horizontal'>
            <a href=" https://abiodun-resume-123.netlify.app/">resume - design template</a>
          </div>
        </div>
        <div className="project_right">
          <div className="project_line">
            <div className="line"></div>
          </div>
          <div className="project_label">
            <span>FEATURED <br /> PROJECTS (6)</span>
            <span>ART DIRECTION / <br /> WEB3 DEVELOPMENT</span>
          </div>
          <div className="project_link link1" data-scroll data-scroll-speed='3' data-scroll-direction='horizontal'>
            <a href=" https://abiodun-code.github.io/blogrs/">blogr - design template</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_project
