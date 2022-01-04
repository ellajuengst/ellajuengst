import React from 'react'

export default function WorkPageImageText(props) {
    let obj = props.obj;
    let width = obj.width
    return (
        <div className="work-page-image-text-container">
            <div className="work-page-image-text-col1">
                <h1 className="work-page-image-text-section-header">{obj.header}</h1>
                <div className="top-border-container">
                    <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
                </div>
                <p className="work-page-image-text-section-p">{obj.text}</p>
            </div>
            <div style={{width: width}}  className="work-page-image-text-col2">
                <img className="work-page-image" src={obj.image}></img>
            </div>
        </div>
    )
}
