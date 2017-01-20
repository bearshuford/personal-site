import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';
import { render } from 'react-dom'

import App from './components/app.jsx';
import About from './components/about.jsx';
import TravelTunes, {TTInfo, TTScreenshots, TTBuiltWith} from './components/traveltunes.jsx';
import BatchMaker,  {BMInfo, BMScreenshots, BMBuiltWith} from './components/batchmaker.jsx';
import Accordion,   {AInfo, AScreenshots, ABuiltWith}    from './components/accordion.jsx';


const history = new createHashHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About}/>
      <Route path="projects">
        <IndexRedirect to="traveltunes" />
        <Route path="traveltunes" component={TravelTunes}>
          <IndexRoute component={TTInfo}/>
          <Route path="screenshots" component={TTScreenshots}/>
          <Route path="built-with" component={TTBuiltWith}/>
        </Route>
        <Route path="batch-maker" component={BatchMaker}>
          <IndexRoute component={BMInfo}/>
          <Route path="screenshots" component={BMScreenshots}/>
          <Route path="built-with" component={BMBuiltWith}/>
        </Route>
        <Route path="accordion" component={Accordion}>
          <IndexRoute component={AInfo}/>
          <Route path="screenshots" component={AScreenshots}/>
          <Route path="built-with" component={ABuiltWith}/>
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
