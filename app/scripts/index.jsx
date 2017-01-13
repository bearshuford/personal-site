import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history';
import { render } from 'react-dom'

import App from './components/app.jsx';
import About from './components/about.jsx';
import TravelTunes, {TTScreenshots, TTBuiltWith} from './components/traveltunes.jsx';
import BatchMaker,  {BMScreenshots} from './components/batchmaker.jsx';
import Accordion,   {AScreenshots} from './components/accordion.jsx';


const history = new createHashHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About}/>
      <Route path="projects">
        <IndexRedirect to="traveltunes" />
        <Route path="traveltunes" component={TravelTunes}>
          <Route path="screenshots" component={TTScreenshots}/>
          <Route path="built-with" component={TTBuiltWith}/>
        </Route>
        <Route path="batch-maker" component={BatchMaker}>
          <Route path="screenshots" />
          <Route path="built-with"/>
        </Route>
        <Route path="accordion" component={Accordion}>
          <Route path="screenshots" component={AScreenshots}/>
          <Route path="built-with"/>
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
