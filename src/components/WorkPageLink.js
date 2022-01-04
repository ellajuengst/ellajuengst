import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function WorkPageLink(props) {
    let obj = props.obj;
    let width = obj.width;
    console.log(props.mainColor)
    let link = obj.link
    return (
        <Link to={{ pathname: link }} target="_blank"  className="work-page-link work-page-image-text-container">
            <div className="work-page-image-text-col1">
                <h1 style={{color: props.mainColor, textDecoration: 'underline'}} className="work-page-image-text-section-header" className="work-page-link-text">{obj.header}</h1>
                {/* <div className="top-border-container">
                    <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
                </div> */}
                <p style={{color: props.textColor, textDecoration: 'none'}} className="work-page-image-text-section-p work-page-link-text">{obj.text}</p>
            </div>
            <div style={{width: width}}  className="work-page-image-text-col2">
                <img className="work-page-image" src={obj.image}></img>
            </div>
        </Link>
    )
}
