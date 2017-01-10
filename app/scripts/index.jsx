import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history';
import { render } from 'react-dom'

import App from './components/app.jsx';
import About from './components/about.jsx';
import TravelTunes, {Screenshots} from './components/traveltunes.jsx';

const history = new createHashHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About}/>
      <Route path="projects">
        <IndexRedirect to="traveltunes" />
        <Route path="traveltunes" component={TravelTunes}>
          <Route path="screenshots" component={Screenshots}/>
          <Route path="built-with"/>
        </Route>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
