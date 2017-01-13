import React from 'react';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

var Right   = require('react-icons/lib/io/arrow-right-b');
var Left    = require('react-icons/lib/io/arrow-left-b');

import ProjectNav from './ProjectNav.jsx';
import {palette} from './app.jsx';



const projectTitle       = 'jQuery Accordion';
const projectDescription = 'a simple accordion menu'

const styles = {
   tt: {
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '100%',
      alignItems: 'center',
      paddingTop: 10
   },
   banner: {
     backgroundColor: palette.accordion.primary,
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
     fontSize: 'calc(32px + 1vw)',
     minWidth: 300,
     maxWidth: '100vw'
   },
   titleText: {
    //  padding: '0 calc(2px + 1.6vw)'
   },
   images: {
      display: 'flex',
      flexFlow: 'row wrap',
      maxWidth: 600,
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
  gif: 'https://cloud.githubusercontent.com/assets/21989005/21210689/2170c74c-c24b-11e6-91c8-1a2c0df8371e.gif',
};


export var AScreenshots = React.createClass({

  render: function() {
    return (
      <div style={styles.images}>
        <img style={styles.screenshot} src={images.gif}/>
      </div>
    );
  }

});




var Banner = React.createClass({

  render: function() {
    return (
      <div id="banner" style={styles.banner}>
        <div style={styles.details}>
          <h1 style={styles.title}>

            <Link
              to="projects/batch-maker/"
              className="project-arrow"
              style={{color: 'white'}}
            >  <Left/>
            </Link>

            <div style={styles.titleText}>
              {projectTitle}
            </div>

            <Link style={{visibility: 'hidden'}}>
              <Right/>
            </Link>

          </h1>
        </div>

        <div style={styles.description}>
          {projectDescription}
        </div>
      </div>
    );
  }

});



var Accordion = React.createClass({


  render: function() {

    return (
      <div style={styles.tt}>
        <Banner/>

        <ProjectNav
          color={palette.accordion.secondary}
          iconClassName={palette.accordion.iconCn}
          path="projects/accordion/"
          linkPath="4.1.2-jquery-accordian"
        />

        {this.props.children}

     </div>

   );
 }

});

export default Accordion;
