import React from 'react'

export default function WorkPageList(props) {
    let header = props.obj.header;
    let subheader = props.obj.subheader;

    let content = props.obj.content;

    let obj = props.obj;
    let bg = '';
    if (obj.background) {
        bg = props.bg
    }

    
    return (
        <div style={{backgroundColor: bg}} className="work-page-list">
            <div  className="work-page-list-section">
            
                <h1 className="work-page-list-section-header">{header}</h1>

                <div className="top-border-container">
                    <div style={{borderTop: `1px solid ${props.color}`}} className="top-border"></div>
                </div>
                <h2>{subheader}</h2>
                <ol className="work-page-list-section-text">
                    {content.map(li => {
                        return <li>{li}</li>
                    })}
                </ol>
            </div>
        </div>
        
    )
}
