import React from 'react';
import MainLogo from '../assets/main-logo.svg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutImageTextSection from '../components/AboutImageTextSection';
import UltimatePhotos from '../assets/images/nationals-pleiades-tape.png'
import UltimatePhotosSmall from '../assets/images/nationals-pleiades-tape-sm.png'
import Ollie from '../assets/images/ollie-tape.png'


function About() {
  let text1 = "I grew up in Arlington, Virginia and graduated from H-B Woodlawn Secondary Program in 2018. I am currently a fourth year at the University of North Carolina at Chapel Hill, and I am pursuing a BS in Computer Science with a minor in Advertising and Public Relations. My expected graduation date is May 2022.";
  let text2 = "In my free time, I enjoy drawing, exercising, and spending time with my friends. In recent years, I have found joy in thrift shopping for clothes and decor. I like to keep up with the latest fashion trends in a sustainable, Earth-friendly way. I have a love for coffee and all animals, especially my adorable cat named Ollie.";


  return (
    <div className="About">
      <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
      <div className="about-page">
        <AboutImageTextSection text={text1} header={true} img={'headshot'}/>
        <div className="about-page-text-section">
            <div className="about-page-text-section-container">
                <p style={{textAlign: 'left'}} className="about-page-text-section-text">Throughout my early life, I took many art and design courses in and outside of school, and I quickly developed a strong passion for design. I have studied color theory, principles of design, studio art, user experience, and graphic design. I have a love for creating beautiful aesthetics, implementing efficiency and usability, and designing meaningful visual experiences. I have particularly enjoyed my recent courses in graphic design, user experience design, and information graphics.</p>
            </div>
        </div>
        <div className="about-page-text-section">
            <div className="about-page-text-section-container">
                <p style={{textAlign: 'left'}} className="about-page-text-section-text">Beyond my love for design, I have always enjoyed using critical thinking to solve mathematical problems. When I came to college, I discovered my passion for computer science. I have strong logical skills and a natural curiosity to learn new technologies. Through my computer science major, I have been exposed to many opportunities, including my role on the Executive Board of Kappa Theta Pi, a professional technology fraternity, as the Director of Marketing. Through KTP, I have met many outgoing individuals who share my passion for tech. Additionally, since summer 2021, I have been working as a Front End Software Engineering Intern at Red Hat, where I work to solve customer problems by collaborating with other members of the Advanced Cluster Management team.</p>
            </div>
        </div>
        <div className="about-page-text-section">
            <div className="about-page-text-section-container">
                <p style={{textAlign: 'left'}} className="about-page-text-section-text">Outside of my academics, I enjoy playing competitive ultimate frisbee. I am the co-captain of UNC Chapel Hill’s women’s club ultimate frisbee team. In 2019, we made our first College National Championships semifinals appearance, and in December 2021, we won the College National Championships and earned <Link className="about-page-link" to={{ pathname: 'https://ultiworld.com/2021/12/24/d-i-college-championships-2021-brilliant-unc-ascends-to-win-over-washington-womens-final-recap/' }} target="_blank">our program’s first ever National Title</Link>. I have competed on several adult club and professional teams in the D.C. and Triangle areas. In 2018, I was a member of the U.S. Under-20 Women’s National Ultimate Team, which is one of my most cherished experiences.</p>
            </div>
        </div>
        <div className="ultimate-photos-sm about-page-image-container">
                <img className="about-page-image" src={UltimatePhotosSmall}></img>
        </div>
        <div className="ultimate-photos about-page-image-container">
                <img className="about-page-image" src={UltimatePhotos}></img>
        </div>
        <AboutImageTextSection text={text2} header={false} img={'ollie'}/>
      </div>
    </div>
  );
}

export default About;
