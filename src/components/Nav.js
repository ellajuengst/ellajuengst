import React, { useState } from "react";
import OpenBtn from '../assets/btns/open-btn.svg'
import CloseBtn from '../assets/btns/close-btn.svg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Nav() {

    const [open, setOpen] = useState(false);
    
    let menuBtnListener = () => {
        setOpen(!open);
        if (!open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"

        }
      
    }
 
    if (open) {
        return (
            <nav className="open-nav">
                
                <img className="menu-btn" src={CloseBtn} onClick={menuBtnListener}></img>
                <ul>
                    <li>
                        <Link to="/ux-design" onClick={menuBtnListener}>ux design</Link>
                        <span>ux research, strategy, and prototyping</span>
                    </li>
                    <li>
                        <Link to="/visual-design" onClick={menuBtnListener}>visual design</Link>
                        <span>ui design, graphic design, and infographics</span>
                    </li>
                    <li>
                        <Link to="/development" onClick={menuBtnListener}>development</Link>
                        <span>front end development and web apps</span>
                    </li>
                    <li>
                        <Link to="/fine-art" onClick={menuBtnListener}>fine art</Link>
                        <span>paintings, drawings, and illustrations</span>
                    </li>
                    <li>
                        <Link to="/about" onClick={menuBtnListener}>about</Link>
                        <span>learn more about me</span>
                    </li>
                    <li>
                        <Link to="/contact" onClick={menuBtnListener}>contact</Link>    
                        <span>find out how to reach me</span>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav className="close-nav">
                <img className="menu-btn" src={OpenBtn} onClick={menuBtnListener}></img>
            </nav>
         );
    }
}


