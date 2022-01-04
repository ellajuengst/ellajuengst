import React, { useState, useEffect } from 'react';

export default function Oval(props) {
    // console.log(props)

    useEffect(() => {
        window.addEventListener("resize", setStyleType(props.styleType));
        return () => window.removeEventListener("resize", setStyleType(props.styleType));
    });

    let textName = props.textName
    let header = '';

    if (props.header) {
        header = 'header';
    }

    let [styleType, setStyleType]=React.useState(props.styleType);
    let classes = {"ux": true, "dev": true, "fine-art": true, "visual": true}
    let enterHandler = () => {
        classes[styleType] = false
        let identifiers = Object.keys(classes);
        identifiers = identifiers.filter(function(k) {
            return classes[k]
        })
        identifiers.forEach((id) => {
            let elements = document.body.getElementsByClassName(id)
            console.log(elements);
            elements = Array.prototype.slice.call( elements )
            elements.forEach(e => {
                e.classList.add('grey')
            })
        })
        classes[styleType] = true;
        let hovered = document.body.getElementsByClassName(styleType)
        hovered = Array.prototype.slice.call( hovered )
        hovered.forEach(e => {
            e.classList.add('hover')
        })

    }
    let exitHandler = () => {
        classes[styleType] = false
        let identifiers = Object.keys(classes);
        identifiers = identifiers.filter(function(k) {
            return classes[k]
        })
        identifiers.forEach((id) => {
            let elements = document.body.getElementsByClassName(id)
            elements = Array.prototype.slice.call( elements )
            elements.forEach(e => {
                e.classList.remove('grey')
            })
        })
        classes[styleType] = true;
        let hovered = document.body.getElementsByClassName(styleType)
        hovered = Array.prototype.slice.call( hovered )
        hovered.forEach(e => {
            e.classList.remove('hover')
        })


    }
    return (
        <div onMouseEnter={enterHandler} onMouseLeave={exitHandler} className={"oval " + styleType + " " + header}>
            <h3>{textName}</h3>
        </div>
    
    )
}
