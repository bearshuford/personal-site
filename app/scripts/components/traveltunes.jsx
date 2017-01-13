import React from 'react';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

var Right   = require('react-icons/lib/io/arrow-right-b');
var Left   = require('react-icons/lib/io/arrow-left-b');

import ProjectNav from './ProjectNav.jsx';
import {palette} from './app.jsx';

const styles = {
  tt: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10
  },
  banner: {
    backgroundColor: palette.traveltunes.primary,
    color: 'white',
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100vw',
    marginTop: 0,
    marginBottom: 18,
    padding: '16px 8px'
   },
  details: {
    fontSize: 24,
    maxWidth: 400,
    minWidth: 0,
    padding: '18px 0',
    textAlign: 'center',
    lineHeight: '34px',
   },
  title: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 'calc(36px + 1vw)',
    minWidth: 320,
    maxWidth: '100vw'
  },
  titleText: {},
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
    margin: '24px 0'
  },
  description: {
   paddingTop: 12,
   paddingBottom: 0,
   padding: ' 12px 12px 0 12px',
   fontSize: 'calc(12px + 1vw)',
   fontWeight: 300
  }
};


const images = {
  login: 'https://cloud.githubusercontent.com/assets/21989005/21708207/38b8fd92-d3a4-11e6-8961-da9cd62a2f9f.png',
  play:  'https://cloud.githubusercontent.com/assets/21989005/21703645/b8d744a2-d381-11e6-8af0-9a12a43a3861.png',
  add:   'https://cloud.githubusercontent.com/assets/21989005/21703828/eba76398-d382-11e6-9ece-1eede679ce0a.png'
};






export var TTScreenshots = React.createClass({

  render: function() {
    return (
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

    );
  }

});

export var TTBuiltWith = React.createClass({

  render: function() {
    return (
      <div style={styles.builtWith}>
        <div>
          SeatGeek Api
        </div>
      </div>
    );
  }

});








var Banner  = React.createClass({

  render: function() {
    return (
      <div id="banner" style={styles.banner}>
        <div style={styles.details}>
          <h1 style={styles.title}>
            <Link
              to="projects/batch-maker/"
              className="project-arrow"
              style={{visibility: 'hidden'}}
            >
              <Left/>
            </Link>
            <div style={styles.titleText}>TravelTunes</div>
            <Link
              to="projects/batch-maker/"
              className="project-arrow"
              style={{color: 'white'}}
            >
              <Right/>
            </Link>
          </h1>
        </div>
        <div style={styles.description}> final project for The Iron Yard</div>
      </div>
    );
  }

});


var TravelTunes = React.createClass({

  render: function() {

    return (
      <div style={styles.tt}>

        <Banner/>

        <ProjectNav
          color={palette.traveltunes.secondary}
          iconClassName={palette.traveltunes.iconCn}
          path="projects/traveltunes/"
          linkPath="travel-tunes"
        />

        {this.props.children}

     </div>

   );
 }

});

export default TravelTunes;
