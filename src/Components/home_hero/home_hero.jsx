import React, {useRef, useEffect} from 'react'
import './home_hero.scss'
import './heroQuery.scss'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Home_hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const front = gsap.timeline({
      scrollTrigger: {
        trigger:'.home_front',
        start: "top 10%",
        top: "top 10%",
        scrub: true
      }
    })
    front.to(".home_front", { x: 100, duration: 5 })
    front.to(".home_front", { x: -100, duration: 2 })

    const end = gsap.timeline({
      scrollTrigger: {
        trigger: '.home_end',
        start: "top 10%",
        top: "top 10%",
        scrub: true
      }
    })
    end.to(".home_end", { x: -100, duration: 5 })
    end.to(".home_end", { x: 100, duration: 2 })
  }, [])
  return (
    <div data-scrol-container className='home_hero'>
      <div className="wrapper">
        <div className="home_hero_top">
          <div className="home_front" data-scroll 
          data-scroll-speed='7' data-scroll-direction='horizontal' data-scroll-position='top'>
            <span>f</span>
            <span>r</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
          </div>
          <div className="home_line">
            <div className="line"></div>
          </div>
          <div
            className="home_end" data-scroll
            data-scroll-speed='-7' data-scroll-direction='horizontal' data-scroll-position='top'>
            <span>e</span>
            <span>n</span>
            <span>d</span>
          </div>
        </div>
        <div className="home_hero_bottom">
          <div className="home_developer">
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </div>
          <div className="home_about">
            <span><h2>ABOUT</h2> I am a developer based in Lagos, Nigeria focused on creating interactive digital experiences on the web, working with brands and industry.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_hero
