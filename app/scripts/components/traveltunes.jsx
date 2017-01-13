import React from 'react';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import { MorphReplace } from 'react-svg-morph';

var Images = require('react-icons/lib/io/images');
import Github   from 'react-icons/lib/io/code';
var Repo   = require('react-icons/lib/go/repo');
var Tools   = require('react-icons/lib/io/hammer');
var Info   = require('react-icons/lib/io/informatcircled');
var Demo   = require('react-icons/lib/go/link-external');



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
     width: '100%',
    //  alignSelf: 'center',
     marginTop: 0,
     marginBottom: 18,
     padding: '16px 8px'

   },
   details: {
     fontSize: 24,
     maxWidth: 400,
     minWidth: 0,
    //  padding: '18px 18px',
    padding: '18px 0',
     textAlign: 'center',
     lineHeight: '34px',
    //  alignSelf: 'flex-start'
   },
   title: {
     padding: '0 16px',
     margin: 0
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
      margin: '24px 0'
   },
   description: {
     paddingTop: 12,
     paddingBottom: 0,
     padding: ' 12px 12px 0 12px',
     fontSize: 'calc(12px + 1vw)',
     fontWeight: 300
   },
   projectNav: {
     display: 'flex',
     flexFlow: 'row nowrap',
     width: '100%',
    //  maxWidth: 800,
    //  minWidth: 100,
     alignItems: 'center',
     justifyContent: 'center',

     padding: 6
   },
   projectIcons: {
     display: 'flex',
     flexFlow: 'row wrap',
     width: '100%',
    maxWidth: 600,
    //  minWidth: 100,
     alignItems: 'center',
     justifyContent: 'space-around'
   }
};












const images = {
  login: 'https://cloud.githubusercontent.com/assets/21989005/21708207/38b8fd92-d3a4-11e6-8961-da9cd62a2f9f.png',
  play:  'https://cloud.githubusercontent.com/assets/21989005/21703645/b8d744a2-d381-11e6-8af0-9a12a43a3861.png',
  add:   'https://cloud.githubusercontent.com/assets/21989005/21703828/eba76398-d382-11e6-9ece-1eede679ce0a.png'
};


var Navigation = React.createClass({

  getInitialState: function() {
    return {
      github: false,
      demo: false,
      info: false
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    console.log('Navigation CDU', prevProps, prevState);
  },

  githubEnter: function(){
    this.setState({github: true});
  },

  githubLeave: function(){
    this.setState({github: false});
  },

  demoEnter: function(){
    this.setState({demo: true});
  },

  demoLeave: function(){
    this.setState({demo: false});
  },

  infoEnter: function(){
    this.setState({info: true});
  },

  infoLeave: function(){
    this.setState({info: false});
  },


  render: function() {

    console.log('github',this.state.github);

    var secondary = palette.traveltunes.secondary;


    var github = this.state.github ?
      <svg viewBox="0 0 40 40"  key="gh-icon" fill={palette.traveltunes.secondary}>
        <g><path d="m7.7 17.5h-3.4c0 0-0.1 0.1-0.1 0.1v1.7c0 0.1 0.1 0.2 0.1 0.2h1.4v2s-0.3 0.1-1.1 0.1c-1 0-2.4-0.4-2.4-3.3 0-3 1.4-3.4 2.8-3.4 1.1 0 1.6 0.2 1.9 0.3 0.1 0.1 0.2 0 0.2-0.1l0.4-1.6c0 0-0.1-0.1-0.1-0.1-0.1-0.1-0.9-0.5-2.8-0.5-2.3 0-4.6 0.9-4.6 5.5 0 4.6 2.6 5.3 4.9 5.3 1.8 0 2.9-0.8 2.9-0.8 0.1 0 0.1-0.1 0.1-0.1v-5.2c0 0-0.1-0.1-0.2-0.1z m17-4.2h-1.9c-0.1 0-0.1 0-0.1 0.1v3.7h-3v-3.7c0-0.1 0-0.1-0.1-0.1h-1.9c-0.1 0-0.2 0-0.2 0.1v9.9c0 0.1 0.1 0.2 0.2 0.2h1.9c0.1 0 0.1-0.1 0.1-0.2v-4.2h3l0 4.2c0 0.1 0 0.2 0.1 0.2h1.9c0.1 0 0.2-0.1 0.2-0.2l0-9.9c0-0.1-0.1-0.2-0.2-0.2z m-14.7 0.2c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.2 1.2 1.2 1.2-0.5 1.2-1.2c0-0.7-0.6-1.2-1.2-1.2z m1.1 3.2c0-0.1-0.1-0.2-0.2-0.2h-1.9c-0.1 0-0.1 0.1-0.1 0.2v6.5c0 0.2 0.1 0.3 0.2 0.3h1.7c0.2 0 0.3-0.1 0.3-0.3 0-0.3 0-1.7 0-2 0-0.2 0-4.5 0-4.5z m21-0.2h-1.9c-0.1 0-0.2 0.1-0.2 0.2v4.8s-0.5 0.4-1.1 0.4c-0.7 0-0.9-0.3-0.9-1v-4.2c0-0.1-0.1-0.2-0.1-0.2h-2c0 0-0.1 0.1-0.1 0.2v4.5s1.1 2.5 2.6 2.5c1.2 0 2.2-0.7 2.2-0.7s0.1 0.4 0.1 0.4c0 0 0.1 0.1 0.2 0.1h1.2c0 0 0.1-0.1 0.1-0.2l0-6.6c0-0.1-0.1-0.2-0.1-0.2z m5.1-0.2c-1.1 0-1.8 0.5-1.8 0.5v-3.4c0-0.1-0.1-0.1-0.1-0.1h-1.9c-0.1 0-0.2 0-0.2 0.1l0 9.9c0 0.1 0.1 0.2 0.2 0.2h1.3c0 0 0.1-0.1 0.1-0.1 0-0.1 0.1-0.5 0.1-0.5s0.8 0.8 2.2 0.8c1.8 0 2.8-0.9 2.8-4 0-3-1.6-3.4-2.7-3.4z m-0.7 5.6c-0.7 0-1.1-0.3-1.1-0.3v-3.2s0.4-0.3 0.9-0.3c0.7-0.1 1.4 0.1 1.4 1.8 0 1.7-0.3 2-1.2 2z m-20-0.1c0 0-0.3 0.1-0.5 0.1-0.7 0-0.9-0.4-0.9-0.8v-2.8h1.4c0.1 0 0.2 0 0.2-0.1v-1.5c0-0.1-0.1-0.2-0.2-0.2h-1.4l0-1.9c0-0.1-0.1-0.1-0.1-0.1h-2c0 0-0.1 0-0.1 0.1v2s-1 0.2-1 0.2c-0.1 0-0.1 0.1-0.1 0.2v1.2c0 0.1 0 0.1 0.1 0.1h1v3c0 2.1 1.5 2.4 2.6 2.4 0.4 0 1-0.2 1.1-0.2 0.1 0 0.1-0.1 0.1-0.2l0-1.3c0-0.1-0.1-0.2-0.2-0.2z"/></g>
      </svg> :
      <svg viewBox="0 0 40 40" key="code-icon" fill={palette.traveltunes.secondary}>
        <g><path d="m26.3 7.5l-3.8 3.8 8.8 8.7-8.8 8.8 3.8 3.7 11.2-12.5-11.2-12.5z m-12.5 0l-11.3 12.5 11.3 12.5 3.7-3.7-8.7-8.8 8.7-8.7-3.7-3.8z"/></g>
      </svg>;

    var demo = this.state.demo  ?
    <svg viewBox="0 0 40 40" key="demo-text" fill={palette.traveltunes.secondary}>
      <g><path d="m30 10h-5.4c1.9 1.3 3.6 3.5 4.2 5h1.2c2.5 0 5 2.5 5 5s-2.6 5-5 5h-7.5c-2.5 0-5-2.5-5-5 0-0.9 0.2-1.8 0.7-2.5h-5.4c-0.2 0.8-0.3 1.6-0.3 2.5 0 5 5 10 10 10h7.5s10-5 10-10-5-10-10-10z m-18.8 15h-1.2c-2.5 0-5-2.5-5-5s2.6-5 5-5h7.5c2.5 0 5 2.5 5 5 0 0.9-0.2 1.8-0.7 2.5h5.4c0.2-0.8 0.3-1.6 0.3-2.5 0-5-5-10-10-10h-7.5s-10 5-10 10 5 10 10 10h5.4c-1.9-1.2-3.6-3.5-4.2-5z"/></g>
      </svg>:
      <svg viewBox="0 0 40 40" key="link-icon" fill={palette.traveltunes.secondary}>
        <g><path d="m30 30h-20v-19.9l5-0.1v-5h-10v30h30v-12.5h-5v7.5z m-10-25l5 5-7.5 7.5 5 5 7.5-7.5 5 5v-15h-15z"/></g>
      </svg>;



    return (
      <div style={styles.projectNav}>
        <div style={styles.projectIcons}>

          <Link
            to="projects/traveltunes/"
            className="tt-nav"
            activeClassName="active-nav"
            onlyActiveOnIndex={true}
          >
            <Info color={secondary} size={32}/>
          </Link>

          <Link
            to="projects/traveltunes/screenshots"
            className="tt-nav"
            activeClassName="active-nav"
          >
            <Images color={secondary} size={38}/>
          </Link>

          <Link
            to="projects/traveltunes/built-with"
            className="tt-nav"
            activeClassName="active-nav"
          >
            <Tools size={36} color={secondary} />
          </Link>

          <a
            href="https://github.com/bearshuford/travel-tunes"
            target="_blank"
            className="tt-nav code-icon"
            onMouseEnter={this.githubEnter}
            onMouseLeave={this.githubLeave}
            >
            <MorphReplace duration={400} height={40}>
              {github}
            </MorphReplace>
          </a>

          <a
            href="https://bearshuford.github.io/travel-tunes"
            target="_blank"
            className="tt-nav demo-icon"
            onMouseEnter={this.demoEnter}
            onMouseLeave={this.demoLeave}
            >

            <MorphReplace
              duration={400}
              width={36}
              height={36}
            >
              {demo}
            </MorphReplace>
          </a>

        </div>

      </div>
    );
  }

});






export var Screenshots = React.createClass({

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






var TravelTunes = React.createClass({

  render: function() {

    return (
      <div style={styles.tt}>
        <div id="banner" style={styles.banner}>
          <div style={styles.details}>
            <h1 style={styles.title}>TravelTunes</h1>
          </div>
          <div style={styles.description}> final project for The Iron Yard</div>
        </div>

        <Navigation/>

        {this.props.children}

     </div>

   );
 }

});

export default TravelTunes;
