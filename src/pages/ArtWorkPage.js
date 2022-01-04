import React from 'react'
import { Redirect } from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import artProjects from '../data/art-data'
import WorkPageHeader from '../components/WorkPageHeader'
import MainLogo from '../assets/main-logo.svg'
import WorkPageTextSection from '../components/WorkPageTextSection';
import SubsectionContainer from '../components/SubsectionContainer';
import WorkPageImage from '../components/WorkPageImage';
import WorkPageList from '../components/WorkPageList';
import WorkPageImageText from '../components/WorkPageImageText';
import WorkPageLink from '../components/WorkPageLink';
import WorkPageImageHover from '../components/WorkPageImageHover';



export default function ArtWorkPage({match: {params: { id }}, props}) {

    let thisProject = artProjects.filter((p) => p.id === '/' + p.category+ '/'+id);
    if (thisProject.length <= 0) {
        return (
            <Redirect to={{pathname: "/404"}}/>
        )
    } 

    let w = thisProject[0]
    
    return (
        <div>
            <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
            <div style={{color: w.textColor}} className='work-page'>
                <WorkPageHeader w={w} name={w.name} category={w.category} path={w.id} logotype={w.logotype} cover={w.cover} subcat={w.subcategory} tools={w.tools} textColor={w.textColor} mainColor={w.mainColor} accentColor={w.accentColor}/>
                {w.content.map(obj => {
                    console.log(obj.type)
                    if (obj.type === 'text') {
                        return <WorkPageTextSection color={w.mainColor} header={obj.header} text={obj.text} subheader={obj.subheader} obj={obj} bg={w.backgroundColor} emphasis={obj.emphasis} align={obj.align}/>
                    } else if (obj.type === 'subsection') {
                        return <SubsectionContainer obj={obj} color={w.mainColor} bg={w.backgroundColor}/>
                    } else if (obj.type === 'image') {
                        return <WorkPageImage color={w.mainColor} obj={obj} />
                    } else if (obj.type === 'list') {
                        return <WorkPageList color={w.mainColor} obj={obj} bg={w.backgroundColor} />
                    } else if (obj.type === 'image-text') {
                        return <WorkPageImageText color={w.mainColor} obj={obj} />
                    } else if (obj.type === 'link') {
                        return <WorkPageLink mainColor={w.mainColor} textColor={w.textColor} obj={obj} />
                    } else if (obj.type === 'image-hover') {
                        return <WorkPageImageHover color={w.mainColor} obj={obj}  />
                    } 
                })}
            </div> 
         

        </div>
        
    )
}
