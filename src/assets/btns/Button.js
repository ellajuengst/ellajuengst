import React from 'react'

export default function Button(props) {
    let text = props.text;
    let color = props.color;
    return (
        <div className={"button "+color}>
            <h2>{text}</h2>
        </div>
    )
}
