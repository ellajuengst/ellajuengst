import React from 'react'

export default function WorkPageTextSection(props) {

    let header = props.header;
    let text = props.text;
    let subheader = props.subheader
    let textSize = '';
    if (props.emphasis) {
        textSize = '1.2em'
    }

    let obj = props.obj;
    let bg = '';
    if (obj.background) {
        bg = props.bg
    }
    let align = props.align;
    
    if (subheader=='') {
        return (
            <div style={{backgroundColor: bg}} className="work-page-text-section">
                <div className="work-page-text-section-container">
                    <h1 className="work-page-text-section-header">{header}</h1>
                    <div className="top-border-container">
                        <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
                    </div>
                    <p style={{fontSize: textSize, textAlign: align}} className="work-page-text-section-text">{text}</p>
            
                </div>
             </div>
        )
    } else {
        return (
            <div style={{backgroundColor: bg}} className="work-page-text-section">
                <div className="work-page-text-section-container">
                    <h1 className="work-page-text-section-header">{header}</h1>
                    <div className="top-border-container">
                        <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
                    </div>
                    <h2>{subheader}</h2>
                    <p style={{fontSize: textSize, textAlign: align}} className="work-page-text-section-text">{text}</p>
            
                </div>
             </div>
        )
    }
    
}
