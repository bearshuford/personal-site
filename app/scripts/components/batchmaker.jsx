import React from 'react';

import {Link} from 'react-router';
import Icon from 'react-icon-base';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';

var Left    = require('react-icons/lib/io/chevron-left');
var Right   = require('react-icons/lib/io/chevron-right');

import ProjectNav from './ProjectNav.jsx';
import {palette} from './app.jsx';



const projectTitle       = 'Batch Maker';
const projectDescription = 'a recipe CRUD application';

const styles = {
   tt: {
     display: 'flex',
     flexFlow: 'column nowrap',
     width: '100%',
     alignItems: 'center',
     paddingTop: 10,
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
     paddingTop: 24,
     textAlign: 'center',
     fontSize: 18
   },

   images: {
      display: 'flex',
      flexFlow: 'row wrap',
      maxWidth: 600,
      minWidth: 20,
      alignItems: 'center',
      justifyContent: 'center'
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
    //  backgroundColor: 'white',
     paddingTop: 10,
     flex: 1
  },


   // banner
   banner: {
     backgroundColor: palette.batchmaker.primary,
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
   fontSize: 'calc(32px + 1vw)',
   minWidth: 200,
   maxWidth: '100vw',
   padding: '4px 0'
  },
  description: {
   alignSelf: 'flex-start',
   paddingBottom: 0,
   padding: ' 12px 12px 0 12px',
   fontSize: 'calc(12px + 1vw)',
   fontWeight: 300,
   textAlign: 'center'
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
};


const images = {
  desktop: 'https://cloud.githubusercontent.com/assets/21989005/21202570/d95ccaf6-c21c-11e6-9387-32baa1e95fc1.gif',
  mobile:  'https://cloud.githubusercontent.com/assets/21989005/21203619/48407356-c221-11e6-8396-2ab5d1e4a919.gif'
};


export var BMScreenshots = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.images}>

          <img style={styles.screenshot} src={images.desktop}/>
          <img style={styles.screenshot} src={images.mobile}/>

        </div>
      </div>
    );
  }

});







export var BMInfo = React.createClass({

  render: function() {
    return (
      <div style={styles.media}>
        <div style={styles.info}>
          {'Week 8 weekend assignment for '}
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
        <div style={{paddingBottom: 12}}>
          {this.props.label}
        </div>
      </div>
    );
  }

});


export var BMBuiltWith = React.createClass({

  render: function() {
    return (
        <div style={styles.builtWith}>

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
            href="https://parse.com/"
            title="Parse Server"
            label="server for user authentication, and recipes"
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
          to="/projects/traveltunes/"
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

        <Link
          to="/projects/accordion/"
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


var BatchMaker = React.createClass({


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
          color={palette.batchmaker.secondary}
          iconClassName={palette.batchmaker.iconCn}
          path="/projects/batch-maker/"
          linkPath="8.4-batch-maker"
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

export default BatchMaker;
