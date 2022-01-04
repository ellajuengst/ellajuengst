import React from 'react'

export default function ExperienceCard(props) {
    let position = props.position;
    let company = props.company;
    let dates = props.dates;
    let desc = props.desc;
    return (
        <div className="experience-card">
           <div className="top-border"></div>
           <h2>{position}</h2> 
           <h3>{company}</h3>
           <h4>{dates}</h4>
           <p>{desc}</p>
        </div>
    )
}
