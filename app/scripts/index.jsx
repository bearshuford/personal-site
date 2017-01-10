import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history';
import { render } from 'react-dom'

import App from './components/app.jsx';
import About from './components/about.jsx';
import TravelTunes from './components/traveltunes.jsx';

const history = new createHashHistory();

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRedirect to="/about" />
      <Route path="about" component={About}/>
      <Route path="projects">
        <IndexRedirect to="travel-tunes" />
        <Route path="travel-tunes" component={TravelTunes}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
