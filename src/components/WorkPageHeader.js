import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Illustrator from '../assets/tools/illustrator.svg'
import Indesign from '../assets/tools/indesign.svg'
import Photoshop from '../assets/tools/photoshop.svg'
import Xd from '../assets/tools/xd.svg'
import Figma from '../assets/tools/figma.svg'
import ReactIcon from '../assets/tools/react.svg'
import Js from '../assets/tools/js.svg'
import Node from '../assets/tools/node.svg'
import Bootstrap from '../assets/tools/bootstrap.svg'

export default function WorkPageHeader(props) {

    let tools = {
        'illustrator': Illustrator,
        'indesign': Indesign,
        'photoshop': Photoshop,
        'xd': Xd,
        'figma': Figma,
        'react': ReactIcon,
        'node': Node,
        'js': Js,
        'bootstrap': Bootstrap
    }


    let logotypeWidth = '300';
    
    if (typeof props.w.logotypeWidth !== 'undefined') {
        console.log(props.w.logotypeWidth)
        logotypeWidth = props.w.logotypeWidth;
    }
    return (
        <div className="work-page-header">
            <div className="work-thumb" to={props.path}>
                <div className="work-thumb-sub">
                    <div className="work-thumb-col1">
                        <img className="logotype" width={logotypeWidth} src={props.logotype}></img>
                        <h2 style={{color: props.mainColor}} className="subcat">{props.subcat.map((s, k) => {
                            if (k == props.subcat.length - 1) {
                                return s;
                            } else {
                                return s + ', ';
                            }
                        })}</h2>
                        <div className="tool-container">
                            {props.tools.map(t => <img className="tool" src={tools[t]}></img>)}
                        </div>
                    </div>
                    <div className="work-thumb-col2">
                        <img width="300" src={props.cover}></img>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
