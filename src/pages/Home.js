import React, { Component, useRef } from 'react';
import HomeHeroScene from '../assets/illustrations/home-hero-scene.svg'
import MainLogo from '../assets/main-logo.svg'
import Title from '../assets/title.svg'
import ScrollDownBtn from '../assets/btns/home-scroll-btn.svg'
import HiBear from '../assets/illustrations/hi-bear.svg'
import Hi from '../assets/illustrations/hi.png'
// import FineArt from '../assets/illustrations/fine-art.svg'
import { ReactComponent as FineArt } from '../assets/illustrations/fine-art.svg';
import TechSkills from '../components/TechSkills'
import ExperienceCard from '../components/ExperienceCard'
import Button from '../assets/btns/Button'
import LinkedIn from '../assets/linkedin.svg'
import Behance from '../assets/behance.svg'
import Instagram from '../assets/instagram.svg'
import Gmail from '../assets/gmail.svg'
import OrangeBear from '../assets/illustrations/orange-bear.svg'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Home() {
  const myRef = useRef()

  const scrollDown = () =>{ 
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  let experienceList = [
    {
      "position": "Front End Software Engineer Intern",
      "company": "Red Hat Software",
      "dates": "May 2021-August 2021",
      "desc": "Used Python and SQLite to implement a dashboard visualizing user data for the Advanced Cluster Management for Kubernetes team. Conducted meetings with stakeholders to address needs and analyze customer metrics. Participated in daily scrum meetings and bi-weekly playbacks to present project progress to larger ACM team. "
    },
    {
      "position": "UX, UI, and Graphic Design Intern",
      "company": "Float",
      "dates": "July 2020-March 2021",
      "desc": "Float is an innovative startup that connects homeowners, businesses, and community centers with renters looking for monthly parking. Designed mockups and prototypes in Figma for website architecture and design. Created UI elements, illustrations, and animations for the website and social media."
    }
  ]

  return (
    <div>
      <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
      <div className="home"> 
          <div className="hero">
              <div className="home-hero-scene-container"><img className="home-hero-scene" src={HomeHeroScene} alt='HomeHeroScene' /></div>
              <div className="home-title-container"><img className="home-title" src={Title} alt='Title' /></div>
              <div className="home-subtitle-container">
                <h2 className="home-subtitle">i’m a designer and developer located in chapel hill, nc</h2>
              </div>
              <div className="scroll-down-btn-container">
                <img onClick={scrollDown}  id="scroll-btn" className="scroll-down-btn"  src={ScrollDownBtn} alt='ScrollDownBtn' />
              </div>
          </div>
          <div ref={myRef} id="hi-section">
                <div className="hi-image-container">
                  <img className="hi-text" src={Hi} alt='Hi'/>
                  <img className="hi-bear" src={HiBear} alt='HiBear' />
                </div>
                <div className="hi-section-title-container">
                  <h1 className="hi-section-title">i love creating beautiful products</h1>
                </div>
                <div className="hi-section-subtitle-container">
                  <h2 className="hi-section-subtitle">I have a passion for designing beautiful aesthetics, implementing efficiency and usability, and constructing meaningful visual experiences. I am looking to pursue a career that allows me to combine my eye for design with my problem solving and technical skills.</h2>
                </div>
          </div>
          <div className="tech-skills-section">
            <div className="tech-skills-section-title-container">
              <h1 className="tech-skills-section-title">technical skills</h1>
            </div>
            <TechSkills />
          </div>
          <div className="experience-section">
            <div className="experience-section-title-container">
                <h1 className="experience-section-title">recent experience</h1>
            </div>
            <div className="experience-section-cards">
                {experienceList.map((e)=> {
                  return <ExperienceCard position={e.position} company={e.company} dates={e.dates} desc={e.desc}  />
                })}
            </div>
            {/* <Link to="/files/myfile.pdf" target="_blank" download>Download</Link> */}
            <a href="/assets/Ella-Juengst-Resume-2022.pdf" download="Ella-Juengst-Resume-2022.pdf"><Button text={"download my resume"} color={"blue"}></Button></a>
            
           
          </div>
          <div className="lets-talk-section">
            <div className="lets-talk-title-container">
                <h1 className="lets-talk-title">let's talk!</h1>
            </div>
            <div className="lets-talk-links">
            <div className="placeholder"></div>
              <div className="link-container"><Link to={{ pathname: "https://www.linkedin.com/in/ella-juengst/" }} target="_blank"><img className="link-img" src={LinkedIn}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "https://www.behance.net/ellajuengst" }} target="_blank"><img className="link-img" src={Behance}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "https://www.instagram.com/ella.j.art/" }} target="_blank"><img className="link-img" src={Instagram}></img></Link></div>
              <div className="link-container"><Link to={{ pathname: "mailto:ellajuengst@gmail.com" }} target="_blank"><img className="link-img" src={Gmail}></img></Link></div>
              <img className="lets-talk-bear" src={OrangeBear}></img>
            </div> 
          </div>
        </div>
    </div>
  );
}

export default Home;
