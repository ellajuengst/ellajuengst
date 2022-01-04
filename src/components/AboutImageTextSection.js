import React from 'react'
import Headshot from '../assets/images/headshot-tape.png'
import Ollie from '../assets/images/ollie-tape.png'

export default function AboutImageTextSection(props) {

    let image = '';
    if (props.img == 'ollie') {
        image = Ollie
    } else if (props.img == 'headshot') {
        image = Headshot
    }

    if (props.header) {
        return (
            <div className="about-page-image-text-container">
                <div className="about-page-image-text-col1">
                    <h1 className="about-page-image-text-section-header">about</h1>
                    <div className="top-border-container">
                        <div style={{borderTop: `1px solid #87BAEB`}} className="top-border"></div>
                    </div>
                    <p className="about-page-image-text-section-p">I grew up in Arlington, Virginia and graduated from H-B Woodlawn Secondary Program in 2018. I am currently a fourth year at the University of North Carolina at Chapel Hill, and I am pursuing a BS in Computer Science with a minor in Advertising and Public Relations. My expected graduation date is May 2022.</p>
                </div>
                <div style={{width: '100%'}}  className="about-page-image-text-col2">
                    <img className="about-page-image" src={image}></img>
                </div>
            </div>
        )
    } else {
        return (
            <div className="about-page-image-text-container">
                <div className="about-page-image-text-col1">
                    <p className="about-page-image-text-section-p">{props.text}</p>
                </div>
                <div style={{width: '100%'}}  className="about-page-image-text-col2">
                    <img className="about-page-image" src={image}></img>
                </div>
            </div>
        )
    }

    
}
