import React from 'react'

export default function WorkPageImage(props) {

    let obj = props.obj;
    let width = obj.width
    if (!obj.header) {
        return (
            <div style={{width: width}} className="work-page-image-container">
                <img className="work-page-image" src={obj.image}></img>
            </div>
        )
    }
    return (
        <div style={{width: width}} className="work-page-image-container">
            <h1 className="work-page-image-section-header">{obj.header}</h1>
            <div className="top-border-container">
                <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
            </div>
            <img className="work-page-image" src={obj.image}></img>
        </div>
    )
}
