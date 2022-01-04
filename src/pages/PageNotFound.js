import React from 'react'
import MainLogo from '../assets/main-logo.svg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TakeMeHome from '../assets/illustrations/take-me-home.png'

export default function PageNotFound() {
    return (
        <div>
            <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
            <div className="page-not-found-container">
                <h2>So sorry, but it seems this page could not be found!</h2>
                <div className="take-me-home-container">
                    <Link to="/">
                        <img className="take-me-home"  src={TakeMeHome}></img>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
