import React, { useState, useEffect } from 'react';
import Oval from './Oval'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function TechSkills() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
      };
    
      useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
   
    if (isDesktop) {
        return (
        <div className="tech-skills-container">
            <div className="row1">
            <Link to="/ux-design"><Oval styleType="ux" textName="ux research" /></Link>
            <Link to="/ux-design"><Oval styleType="ux" textName="user testing" /></Link>
            <Link to="/ux-design"><Oval styleType="ux" textName="ux strategy" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="javascript" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="react.js" /></Link>
            </div>
            <div className="row2">
            <Link to="/ux-design"><Oval styleType="ux" textName="prototyping" /></Link>
            <Link to="/ux-design"> <Oval styleType="ux" header={true} textName="ux design" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="python" /></Link>
            <Link to="/development"><Oval styleType="dev" header={true} textName="front end dev" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="bootstrap" /></Link>
            </div>
            <div className="row3">
            <Link to="/ux-design"><Oval styleType="ux" textName="wireframing" /></Link>
            <Link to="/ux-design"><Oval styleType="ux" textName="adobe xd" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="html" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="css" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="github" /></Link>
            
            </div>
            <div className="row4">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="drawing" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" textName="digital painting" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="ui design" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="typography" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="graphic design" /></Link>
            </div>
            <div className="row5">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="painting" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" header={true} textName="fine art" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="infographics" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" header={true} textName="visual design" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe photoshop" /></Link>
            </div>
            <div className="row6">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="color theory" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" textName="illustration" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" textName="composition" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe illustrator" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe indesign" /></Link>
            </div>
        </div>
        )
    } else {
    return (
        <div className="tech-skills-container">
            
            <div className="row">
            <Link to="/visual-design"><Oval styleType="visual" textName="ui design" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="typography" /></Link>
            </div>
            <div className="row">
            <Link to="/visual-design"><Oval styleType="visual" textName="graphic design" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="infographics" /></Link>
            </div>
            <div className="row">
            <Link to="/visual-design"><Oval styleType="visual" header={true} textName="visual design" /></Link>
            </div>
            <div className="row">
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe photoshop" /></Link>
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe indesign" /></Link>
            </div>
            <div className="row">
            <Link to="/visual-design"><Oval styleType="visual" textName="adobe illustrator" /></Link>
            </div>
           
            <div className="row">
            <Link to="/development"><Oval styleType="dev" textName="javascript" /></Link>
            </div>
            <div className="row">
            <Link to="/development"><Oval styleType="dev" textName="react.js" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="python" /></Link>
            </div>
            <div className="row">
            <Link to="/development"><Oval styleType="dev" header={true} textName="front end dev" /></Link>
            </div>
           
            <div className="row">
            <Link to="/development"><Oval styleType="dev" textName="bootstrap" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="github" /></Link>

            </div>
            <div className="row">
            <Link to="/development"><Oval styleType="dev" textName="html" /></Link>
            <Link to="/development"><Oval styleType="dev" textName="css" /></Link>
            </div>
            <div className="row">
            <Link to="/ux-design"><Oval styleType="ux" textName="ux strategy" /></Link>
            </div>
            <div className="row">
            <Link to="/ux-design"><Oval styleType="ux" textName="ux research" /></Link>
            <Link to="/ux-design"><Oval styleType="ux" textName="user testing" /></Link>
            </div>
            <div className="row">
            <Link to="/ux-design"> <Oval styleType="ux" header={true} textName="ux design" /></Link>
            </div>
           
            <div className="row">
            <Link to="/ux-design"><Oval styleType="ux" textName="prototyping" /></Link>
            <Link to="/ux-design"><Oval styleType="ux" textName="wireframing" /></Link>
            </div>
            <div className="row">
            <Link to="/ux-design"><Oval styleType="ux" textName="adobe xd" /></Link>
            </div>
            <div className="row">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="digital painting" /></Link>
            </div>
            <div className="row">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="drawing" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" textName="illustration" /></Link>
            </div>
            <div className="row">
            <Link to="/fine-art"><Oval styleType="fine-art" header={true} textName="fine art" /></Link>
            </div>
            
            <div className="row">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="painting" /></Link>
            <Link to="/fine-art"><Oval styleType="fine-art" textName="color theory" /></Link>
            </div>
            <div className="row">
            <Link to="/fine-art"><Oval styleType="fine-art" textName="composition" /></Link>
            </div>
        </div>
    ) }
}
