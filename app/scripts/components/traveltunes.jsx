import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

var Left    = require('react-icons/lib/io/chevron-left');
var Right   = require('react-icons/lib/io/chevron-right');

import ProjectNav from './ProjectNav.jsx';
import {palette} from './app.jsx';

const styles = {
  page: {
    backgroundColor: palette.traveltunes.primary
  },
  tt: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    //  overflow: 'scroll',
      position: 'relative',
    backgroundColor: palette.traveltunes.primary,
    color: 'white'
  },

  // banner
  banner: {
    color: 'white',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100vw',
    padding: '8px 0',
    marginTop: 10,
    marginBottom: 10,
    height: 148
   },
  bannerInner: {
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    flex: 1
  },
  details: {
    alignSelf: 'center',
    fontSize: 24,
    maxWidth: 400,
    minWidth: 0,
    textAlign: 'center'
   },
  title: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 'calc(28px + 2.1vw)',
    minWidth: 200,
    maxWidth: '80vw'
  },
  description: {
    alignSelf: 'flex-start',
    paddingBottom: 0,
    padding: ' 12px 12px 0 12px',
    fontSize: 'calc(12px + 1vw)',
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 300
  },


  media: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    textAlign: 'center'
  },
  images: {
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: 800,
    minWidth: 20,
    alignItems: 'center'
  },
  screenshot: {
    flex: '0 0 auto',
    objectFit: 'scale-down',
    minWidth: 0,
    margin: '12px 0 36px'
  },

  // built with
  builtWith: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 8px 8px'
  },
  toolLink: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 600,
  },
  toolTitle: {
    marginBottom: 8,
    marginTop: 0,
    position: 'relative',
    fontWeight: 300,
    fontSize: 42
  },
  toolPlus: {
    marginBottom: 8,
    position: 'relative',
    fontWeight: 300,
    fontSize: 42,
    padding: '0 24px',
    lineHeight: '42px'
  },
  bwLabel: {
    fontFamily: '"Roboto", sans-serif',
    marginBottom: 42
  },

  navTitle: {
    fontSize: 36,
    marginBottom: 16,
    marginTop: 12
 },





 info: {
   fontFamily: '"Roboto", sans-serif',
   paddingLeft: 24,
   paddingRight: 24,
   fontSize: 18,
   maxWidth: 750,
  //  minWidth: '80%',
   alignSelf: 'center',
   textAlign: 'left',
   marginTop: 18,
   fontWeight: 300
  },

  infoHeading: {
    fontFamily: '"Raleway", sans-serif',
    fontSize: 32,
    fontWeight: 400,
    marginBottom: 12,
    marginTop: 16
  },
  requirements: {
    marginTop: 0,
    maxWidth: 800
  },

  requirement: {
    marginBottom: 10
  },
  children: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 10,
    justifyContent: 'flex-start',
     flex: 1,
    minHeight: '30vh'
  }
};


const images = {
  login: 'https://cloud.githubusercontent.com/assets/21989005/21708207/38b8fd92-d3a4-11e6-8961-da9cd62a2f9f.png',
  play:  'https://cloud.githubusercontent.com/assets/21989005/21703645/b8d744a2-d381-11e6-8af0-9a12a43a3861.png',
  add:   'https://cloud.githubusercontent.com/assets/21989005/21703828/eba76398-d382-11e6-9ece-1eede679ce0a.png'
};


export var TTInfo = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.info}>
          <div>
            {'Final Project for '}
            <a
              href="https://www.theironyard.com/locations/greenville.html"
              target="_blank"
              style={styles.toolLink}
            >
              the Iron Yard - Greenville
            </a>
            <p>
              The final three weeks of the twelve week course focused completely on the final project.
              I created an app for users to discover concerts that will be playing at their travel destinations.
            </p>
            <h3 style={styles.infoHeading}>Use</h3>
              <ol style={styles.requirements}>
                <li style={styles.requirement}>Create an account to add some trips.</li>
                  <li style={styles.requirement}>Select a trip to view concerts you could see.</li>
                  <li style={styles.requirement}>Select an artist to play samples of their top tracks from Spotify (if available).</li>
              </ol>
            <h3 style={styles.infoHeading}>Requirements</h3>
            <ul style={styles.requirements}>
              <li style={styles.requirement}>make regular commits each day</li>
              <li style={styles.requirement}>use an MV* front end framework</li>
              <li style={styles.requirement}>use at least one Read/Write HTTP API and one 3rd Party API</li>
              <li style={styles.requirement}>save data, don't just pull it down (must be a "CRUD" app)</li>
              <li style={styles.requirement}>have user authentication and authorization</li>
              <li style={styles.requirement}>include at least one image upload</li>
              <li style={styles.requirement}>have responsive ui and work on both desktop and mobile</li>
            </ul>

          </div>


        </div>
      </div>
    );
  }

});





export var TTScreenshots = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.images}>

          <img
             style={styles.screenshot}
             src={images.login}
          />
          <img
            style={styles.screenshot}
            src={images.play}
          />
          <img
            style={styles.screenshot}
            src={images.add}
          />

        </div>
      </div>
    );
  }

});




var Tool = React.createClass({

  render: function() {
    return (
      <div>
        <a
          href={this.props.href}
          target="_blank"
          style={styles.toolLink}
        >
          <h1 style={styles.toolTitle} className="bw-link">
            {this.props.title}
          </h1>
        </a>
        <div style={styles.bwLabel}>
          {this.props.label}
        </div>
      </div>
    );
  }

});


export var TTBuiltWith = React.createClass({

  render: function() {
    return (
        <div style={styles.builtWith}>

          <Tool
            href="http://platform.seatgeek.com/"
            title="SeatGeek API"
            label="directory of live events in the US and Canada"
          />

          <Tool
            href="https://github.com/JMPerez/spotify-web-api-js"
            title="Spotify Web API JS"
            label={<div>{'wrapper for '}
            <a
              href="https://developer.spotify.com/web-api/"
              target="_blank"
              style={styles.toolLink}
            > Spotify API
            </a></div>}
          />

          <Tool
            href="https://facebook.github.io/react/docs/"
            title="React"
            label="user interfaces"
          />

          <Tool
            href="http://backbonejs.org/"
            title="Backbone.js"
            label="routing, models, and collections"
          />

          <Tool
            href="http://www.material-ui.com/"
            title="material-ui"
            label="React components that implement Google's Material Design"
          />

          <Tool
            href="https://github.com/joshwcomeau/react-flip-move"
            title="React Flip Move"
            label={<div>
              {'animation between DOM changes (eg. list reordering) using the '}
              <a
                href="https://aerotwist.com/blog/flip-your-animations/#the-general-approach"
                target="_blank"
                style={styles.toolLink}
              > FLIP technique
              </a>
            </div>}
          />

          <Tool
            href="https://parse.com/"
            title="Parse Server"
            label="server for user authentication, trips, and favorite events"
          />

        </div>

    );
  }
});

var Banner = React.createClass({

  render: function() {
    return (
      <div style={styles.banner}>
        <Link
          to="/projects/batch-maker/"
          className="project-arrow"
          style={{visibility: 'hidden'}}
        >  <Left size={60}/>
        </Link>

        <div style={styles.bannerInner}>

          <div style={styles.details}>
            <h1 style={styles.title}>
              TravelTunes
            </h1>
          </div>

          <div style={styles.description}>
            live music discovery for your travel plans
          </div>

        </div>

        <Link
          to="/projects/batch-maker/"
          className="project-arrow"
          style={{color: 'white'}}
        >  <Right size={60} />
        </Link>
      </div>
    );
  }

});



const routeOrder = {
  info: 0,
  screenshots: 1,
  'built-with': 2
};


var TravelTunes = React.createClass({

  // http://stackoverflow.com/a/39289862
  getInitialState: function() {
    return {
      transitionName: 'pageSwap'
    };
  },

  componentWillReceiveProps(nextProps) {
    var project = this.props.location.pathname.split('/')[2];
    var nextProject = nextProps.location.pathname.split('/')[2];

    if (nextProps.location !== this.props.location &&
        project === nextProject) {
      var currentPath = this.props.location.pathname;
      var current = currentPath.split('/')[3] || 'info';

      var nextPath = nextProps.location.pathname;
      var next = nextPath.split('/')[3] || 'info';
      var transition = routeOrder[current] < routeOrder[next] ? 'pageSwap' : 'reversePageSwap';

      this.setState({ transitionName: transition });
    }
  },


  render: function() {
    var path = this.props.location.pathname;
    var segment = path.split('/')[3] || 'info';

    return (
      <div className="page">
      <div style={styles.tt}>

        <Banner/>

        <ProjectNav
          color={'white'}
          iconClassName={palette.traveltunes.iconCn}
          path="/projects/traveltunes/"
          linkPath="travel-tunes"
        />

        <ReactCSSTransitionGroup
          component="div"
          style={styles.children}
          transitionName={this.state.transitionName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page"
        >
          { React.cloneElement(this.props.children, {key: segment}) }
        </ReactCSSTransitionGroup>
     </div>
     </div>

   );
 }

});

export default TravelTunes;
