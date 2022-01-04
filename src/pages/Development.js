import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainLogo from '../assets/main-logo.svg'
import WorkThumb from '../components/WorkThumb'
import projects from '../data/dev-data'

function Development() {
  let work = projects;

  return (
    <div className="general-work-thumb-page ux-design">
      <Link to="/"><img className="logo"  src={MainLogo} alt='MainLogo' /></Link>
      <div className="work-thumb-section">
        <h1 className="title">development</h1>
        <h2 className="subtitle">featured projects</h2>

        {work.map((w) => {
          return <WorkThumb w={w} name={w.name} category={w.category} path={w.id} logotype={w.logotype} cover={w.cover} subcat={w.subcategory} tools={w.tools} textColor={w.textColor} mainColor={w.mainColor} accentColor={w.accentColor}/>
        })}
      </div>
      
    </div>
  );
}

export default Development;
