import React from 'react';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

var Left    = require('react-icons/lib/io/chevron-left');
var Right   = require('react-icons/lib/io/chevron-right');

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
     textAlign: 'center',
     overflow: 'hidden'
   },


   media: {
     width: '100%',
     display: 'flex',
     flexFlow: 'column nowrap',
     alignItems: 'center',
     textAlign: 'center'
   },
  info: {
    fontFamily: '"Roboto", sans-serif',
    padding: 18,
    //  paddingTop: 24,
     textAlign: 'center',
     fontSize: 18,
     minHeight: 238
   },


   // banner
   banner: {
     backgroundColor: palette.accordion.primary,
     color: 'white',
     display: 'flex',
     flexFlow: 'row nowrap',
     justifyContent: 'space-between',
     alignItems: 'center',
     width: '100vw',
     padding: '8px 0',
     marginTop: 0,
     marginBottom: 18,
     minHeight: 168
    },
  bannerInner: {
   display: 'flex',
   flexFlow: 'row wrap-reverse',
   justifyContent: 'space-around',
   alignContent: 'space-around',
   alignItems: 'center',
   minHeight: '136px',
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
   fontSize: 'calc(34px + 1vw)',
   minWidth: 200,
   maxWidth: '100vw'
  },
  description: {
   fontFamily: '"Roboto", sans-serif',
   alignSelf: 'flex-start',
   paddingBottom: 0,
   padding: ' 12px 12px 0 12px',
   fontSize: 'calc(12px + 1vw)',
   fontWeight: 300
  },




   // built with
   builtWith: {
     display: 'flex',
     flexFlow: 'column nowrap',
     width: '100%',
     alignItems: 'center',
     paddingTop: 10,
     textAlign: 'center'
   },
   toolLink: {
     textDecoration: 'none',
     color: 'black',
     fontWeight: 600
   },
   toolTitle: {
     marginBottom: 8,
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


   images: {
      display: 'flex',
      flexFlow: 'row wrap',
      maxWidth: 600,
      minWidth: 20,
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'hidden'
   },
   screenshot: {
      flex: '0 0 auto',
      objectFit: 'scale-down',
      minWidth: 0,
      margin: '24px 0'
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
   },

   bwLabel: {
     fontFamily: '"Roboto", sans-serif',
     paddingBottom: 6
   },

};


const images = {
  gif: 'https://cloud.githubusercontent.com/assets/21989005/21210689/2170c74c-c24b-11e6-91c8-1a2c0df8371e.gif',
};


export var AScreenshots = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.images}>
          <img style={styles.screenshot} src={images.gif}/>
        </div>
      </div>
    );
  }

});




export var AInfo = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.info}>
          {'Week 4 Monday assignment for '}
          <a
            href="https://www.theironyard.com/locations/greenville.html"
            target="_blank"
            style={styles.toolLink}
          >
            the Iron Yard - Greenville
          </a>
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


export var ABuiltWith = React.createClass({

  render: function() {
    return (
        <div style={styles.builtWith}>

          <Tool
            href="https://jquery.com/"
            title="jQuery"
            label="event handling and dom manipulation"
          />

          <Tool
            href="sass-lang.com"
            title="SCSS"
            label="styles"
          />

          <Tool
            href="https://fontawesome.io/"
            title="Font Awesome"
            label="icons"
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
          style={{color: 'white'}}
        >  <Left size={60}/>
        </Link>

        <div style={styles.bannerInner}>

          <div style={styles.details}>
            <h1 style={styles.title}> {projectTitle} </h1>
          </div>

          <div style={styles.description}> {projectDescription} </div>

        </div>

        <Link style={{visibility: 'hidden'}}
        >  <Right size={60} />
        </Link>
      </div>
    );
  }

});



//
// var Banner = React.createClass({
//
//   render: function() {
//     return (
//       <div id="banner" style={styles.banner}>
//         <div style={styles.details}>
//           <h1 style={styles.title}>
//
//             <Link
//               to="/projects/batch-maker/"
//               className="project-arrow"
//               style={{color: 'black'}}
//             >  <Left/>
//             </Link>
//
//             <div style={styles.titleText}>
//               {projectTitle}
//             </div>
//
//             <Link style={{visibility: 'hidden'}}>
//               <Right/>
//             </Link>
//
//           </h1>
//         </div>
//
//         <div style={styles.description}>
//           {projectDescription}
//         </div>
//       </div>
//     );
//   }
//
// });



const routeOrder = {
  info: 0,
  screenshots: 1,
  'built-with': 2
};


var Accordion = React.createClass({

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
      <div style={styles.tt}>
        <Banner/>

        <ProjectNav
          color={palette.accordion.secondary}
          iconClassName={palette.accordion.iconCn}
          path="/projects/accordion/"
          linkPath="4.1.2-jquery-accordian"
        />

        <ReactCSSTransitionGroup
          component="div"
          style={styles.children}
          transitionName={this.state.transitionName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          { React.cloneElement(this.props.children, {key: segment}) }
        </ReactCSSTransitionGroup>

      </div>

    );
  }

});

export default Accordion;