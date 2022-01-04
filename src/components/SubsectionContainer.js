import React from 'react'
import WorkPageTextSection from '../components/WorkPageTextSection';

export default function SubsectionContainer(props) {

    let obj = props.obj;
    let bg = '';
    if (obj.background) {
        bg = props.bg
    }

    return (
        <div style={{backgroundColor: bg}} className="subsection-container">
            {props.obj.content.map(sub => {
                if (sub.type === 'text') {
                    return <WorkPageTextSection color={props.color} header={sub.header} text={sub.text} subheader={sub.subheader} emphasis={sub.emphasis} obj={obj} bg={bg} align={sub.align}/>
                }
            })}
        </div>
    )
}
