import React from 'react';
import { MapInteractionCSS } from 'react-map-interaction';


export default function WorkPageImageHover(props) {
    
    let obj = props.obj;
    let subheader = props.obj.subheader;
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
            <h2>{subheader}</h2>
            <div className="image-hover-container">
                <MapInteractionCSS defaultValue={{scale: 1, translation: {x: 0, y: 0}}} maxScale={10} minScale={1}>
                    <img className="work-page-image" src={obj.image}></img>
                </MapInteractionCSS>
            </div>
           
        </div>
    )
}
