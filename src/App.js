import React from 'react';
import './css/main.css';
import { Redirect } from 'react-router'
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UxDesign from './pages/UxDesign';
import VisualDesign from './pages/VisualDesign';
import Development from './pages/Development';
import Artwork from './pages/Artwork';
import UxWorkPage from './pages/UxWorkPage';
import VisualWorkPage from './pages/VisualWorkPage';
import DevWorkPage from './pages/DevWorkPage';
import ArtWorkPage from './pages/ArtWorkPage';

import PageNotFound from './pages/PageNotFound';
import ScrollToTop from './components/ScrollToTop';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
        <ScrollToTop>
        <Nav/>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/ux-design' component={UxDesign} />
              <Route exact path="/ux-design/:id" render={props => <UxWorkPage {...props} />} />
              <Route exact path='/visual-design' component={VisualDesign} />
              <Route exact path="/visual-design/:id" render={props => <VisualWorkPage {...props} />} />
              <Route exact path='/development' component={Development} /> 
              <Route exact path="/development/:id" render={props => <DevWorkPage {...props} />} />
              <Route exact path='/fine-art' component={Artwork} /> 
              <Route exact path="/fine-art/:id" render={props => <ArtWorkPage {...props} />} />
              <Route exact path='/404' component={PageNotFound} /> 
              <Redirect to="/404" />
          </Switch>
        </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
