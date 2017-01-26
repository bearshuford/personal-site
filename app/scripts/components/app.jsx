import React from 'react';
import _ from 'underscore';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Link } from 'react-router';

import { MorphReplace, MorphReplaceResize } from 'react-svg-morph';



var SocialGithub          = require('react-icons/lib/io/social-github');
var SocialGithubOutline   = require('react-icons/lib/io/social-github-outline');

var Github = require('react-icons/lib/go/mark-github');
var Mail   = require('react-icons/lib/io/paper-airplane');

//TODO import Transition from 'react-inline-transition-group';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export const palette = {
  about: {
    secondary: '#C2A83E',
    primary: '#243E36',
    cn: "nav",                  //className
    iconCn: "nav-icon"
  },

  traveltunes: {
    secondary: '#1976D2',
    primary: '#00C853',
    cn: "tt-header nav",
    iconCn: "tt-header",
    navCn: "tt-nav"
  },

  batchmaker: {
    primary: '#00BCD4',
    secondary: '#FF4081',
    cn: "bm-header nav",
    iconCn: "bm-header",
    navCn: "bm-nav"
  },

  accordion: {
    primary: '#F7B1AB',
    secondary: '#B4DC7F',
    cn: "a-header nav",
    iconCn: "a-header",
    navCn: "a-nav"
  }

};




const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start'
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // lineHeight: '70px',
    padding: '0 6px',
    fontFamily: '"Raleway", sans-serif',
    fontSize: 48,
    marginBottom: 6
  },
  name: {
    padding: 5,
    marginRight: 12,
    flex: '100 1 auto'
  },
  navItem: {
    transition: 'all .3s ease',
    WebkitFontSmoothing: 'antialiased',
    textDecoration: 'none ',
    position: 'relative'
  },
  link: {
    position: 'relative',
    color: '#26C6DA',
    textDecoration: 'none',
    padding: 3,
    transition: 'all .3s ease'
  },
  activeLink: {
    transition: 'all .3s ease',
    color: 'black',
    fontSize: 58,
    cursor: 'default'
  },
  period: {
    fontSize: 72,
    padding: '0 4px'
  },
  icons: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-around',
    flex: '1 0 112px',
    minWidth: '180px',
    alignItems: 'center',
    height: 70,
    marginRight: 4,
    marginLeft: 4,
    marginTop: 6
  },

  children: {
  width: '100%',
  position: 'relative',
  minHeight: 'calc(100vh - 100px)',
  flex: 1

  }

};




const briefcase =
  <svg height="32" width="32" viewBox="0 0 32 32" key="briefcase-icon">
  	<path d="M31 27.8c0 1.8-4.5 1.7-4.5 1.7l-12.55-3.15c-0.9-0.2-1.6-1.15-1.6-2.15v-10.7l18.65 1.050v13.25z" fill="#5f6262"/>
  	<path d="M30.1 6.7c0 0-0.7-0.1-0.7-0.1l-3.5 1.7-0.5 22.050c2.9-2.45 5.6-2.5 5.6-2.5v-19.2c0-0.8-0.35-1.5-0.9-1.95z" fill="#343434"/>
  	<path d="M26.1 28.35c0 1.8-1.3 2.95-2.85 2.6l-19.6-4.8c-1.15-0.3-2.1-1.75-2.1-3.25v-16.15l24.55 1.6v20z" fill="#5f6262"/>
  	<path d="M26.45 16.3c0 1.8-1.5 3.15-3.050 2.85l-19.65-3.25c-1.15-0.2-2.1-1.6-2.1-3.1l0.65-6.6 24.25 1.95-0.1 8.15z" fill="#343434"/>
  	<path d="M2.3 5.75c-1.85 1.25-1.85 8.95 0.85 8.95l19.65 3.050c1.55 0.25 2.85-1.050 2.85-2.85 0 0-0.6-5.85 0.5-6.6l0.9-0.4-24.75-2.15z" fill="#5f6262"/>
  	<path d="M15.5 13.3l-5.3-0.7-0.95 3.7 0.95 2.75 5.3 0.95z" fill="#65562d"/>
  	<path d="M10.2 12.6l-0.95 3.7 5.3 0.8 0.95-3.8z" fill="#f8ecc5"/>
  	<path d="M10.2 19.050l5.3 0.95-0.95-2.9-5.3-0.8z" fill="#bfae6e"/>
  	<path d="M28.35 6.1l-17.95-1.6-6.8 0.8-0.3 0.050c-0.35 0.050-0.7 0.2-0.95 0.4l23.85 2.6 2.5-1.1c2.050-1 2.3 0.8 2.3 0.8-0.3-1.6-1.75-1.85-2.65-1.95z" fill="#919193"/>
  	<path d="M9.35 5.1c0-2.15 1.7-2.25 2.1-2.4 0.35-0.1 0.6-0.45 0.5-0.75s-0.45-0.35-0.8-0.35c-1.15 0-3.15 0.5-3.15 3.5 0.050 0.35 1.35 0.35 1.35 0z" fill="#bfae6e"/>
  	<path d="M9.1 4.95c-0.050-0.3-0.050-0.6 0.050-0.9 0.050-0.3 0.2-0.6 0.4-0.8 0.2-0.25 0.5-0.4 0.75-0.5 0.3-0.1 0.6-0.15 0.9-0.15-0.3 0.1-0.55 0.2-0.8 0.3-0.25 0.15-0.5 0.3-0.65 0.5-0.4 0.4-0.55 0.95-0.65 1.55z" fill="#65562d"/>
  	<path d="M21.85 3.45c-0.050 0.85-0.8 1.5-1.65 1.4l-9.25-0.75c-0.85-0.050-1.5-0.8-1.4-1.65 0.050-0.85 0.8-1.5 1.65-1.4l9.2 0.75c0.9 0.050 1.55 0.8 1.45 1.65z" fill="#5f6262"/>
  	<path d="M21.85 3.45c-0.050 0.55-0.75 0.9-1.6 0.8l-9.25-0.75c-0.85-0.050-1.5-0.55-1.45-1.1s0.75-0.9 1.6-0.85l9.2 0.75c0.9 0.15 1.55 0.6 1.5 1.15z" fill="#343434"/>
  	<path d="M22 6.55c0-1.3-0.95-2.1-1.5-2.35-0.85-0.35-0.15-1.85 0.65-1.45 1 0.45 2.35 1.85 2.35 3.8 0.050 0.45-1.5 0.45-1.5 0z" fill="#bfae6e"/>
  	<path d="M22.2 6.55c-0.1-0.6-0.25-1.15-0.6-1.6-0.3-0.45-0.7-0.9-1.2-1.2 0.3 0.050 0.55 0.2 0.8 0.4s0.45 0.4 0.6 0.65c0.35 0.55 0.5 1.15 0.4 1.75z" fill="#65562d"/>
  </svg>;


const bear =
  <svg height="32" width="32" viewBox="0 0 32 32" key="bear-emojione-icon">
  	<path d="M30.3 5.2c0 2.3-1.95 4.2-4.35 4.2s-4.35-1.9-4.35-4.2 1.95-4.2 4.35-4.2c2.4 0 4.35 1.9 4.35 4.2z" fill="#947151"/>
  	<path d="M28.55 5.2c0 1.4-1.15 2.55-2.6 2.55s-2.6-1.15-2.6-2.55 1.15-2.55 2.6-2.55c1.45 0 2.6 1.15 2.6 2.55z" fill="#e0ac7e"/>
  	<path d="M10.4 5.2c0 2.32-1.948 4.2-4.35 4.2s-4.35-1.88-4.35-4.2c0-2.32 1.948-4.2 4.35-4.2s4.35 1.88 4.35 4.2z" fill="#947151"/>
  	<path d="M8.65 5.2c0 1.408-1.164 2.55-2.6 2.55s-2.6-1.142-2.6-2.55c0-1.408 1.164-2.55 2.6-2.55s2.6 1.142 2.6 2.55z" fill="#e0ac7e"/>
  	<path d="M31 18.55c0 9.050-10.1 12.45-15 12.45s-15-3.4-15-12.45c0-11.5 5.5-14.15 15-14.15s15 2.65 15 14.15z" fill="#947151"/>
  	<path d="M9.45 22.8c0-4.65 4.45-6.4 6.6-6.4s6.6 1.75 6.6 6.4c0 5.9-2.4 7.3-6.6 7.3s-6.6-1.4-6.6-7.3z" fill="#e0ac7e"/>
  	<path d="M16.35 1c0.15 0.8-0.3 1.4-0.3 1.4-0.7-0.95-2.1-1.25-2.1-1.25 0.55 0.65 0.4 1.65 0.4 1.65-0.95-0.35-1.8-0.3-1.8-0.3 2 1.5 1.55 6.050 1.55 6.050 2.35-2.5 5.3-3.7 5.3-3.7-0.65-2.35-3.050-3.85-3.050-3.85z" fill="#947151"/>
  	<path d="M18.2 28.5c0.050 0 0.050-0.1 0.050-0.15 0-0.35-1-0.7-2.25-0.7s-2.25 0.3-2.25 0.7c0 0.050 0 0.15 0.050 0.15h4.4z" fill="#3e4347"/>
  	<path d="M11.4 22.95c0-1.9 2.050-2.3 4.6-2.3s4.6 0.35 4.6 2.3c0 1.55-3.7 2.9-4.6 2.9s-4.6-1.4-4.6-2.9z" fill="#3e4347"/>
  	<path d="M29.55 15.35l-1.7 0.3c-0.55 0.1-1.15 0.15-1.7 0.25-1.15 0.15-2.25 0.25-3.4 0.35-2.2 0.15-4.5 0.25-6.75 0.25s-4.55-0.1-6.8-0.3c-2.25-0.2-4.55-0.5-6.75-1-0.050 0-0.050-0.050-0.050-0.050s0.050-0.050 0.050-0.050c1.15 0.050 2.25 0.15 3.4 0.2s2.25 0.1 3.4 0.15c2.25 0.050 4.5 0.1 6.8 0.1 2.25 0 4.5 0 6.8-0.050 2.25-0.050 4.5-0.15 6.8-0.2 0.050 0 0.050 0 0.050 0.050-0.1-0.050-0.1 0-0.15 0z" fill="#3e4347"/>
  	<path d="M9.8 16.25c0 0.8-0.8 1.45-1.8 1.45s-1.8-0.65-1.8-1.45 0.8-0.6 1.8-0.6 1.8-0.2 1.8 0.6z" fill="#3e4347"/>
  	<path d="M25.85 16.25c0 0.8-0.8 1.45-1.8 1.45s-1.8-0.65-1.8-1.45 0.8-0.6 1.8-0.6c1 0 1.8-0.2 1.8 0.6z" fill="#3e4347"/>
  </svg>;






const routeOrder = {
  about: 0,
  traveltunes: 1,
  'batch-maker': 2,
  accordion: 3
};


var App = React.createClass({

  // http://stackoverflow.com/a/39289862
  getInitialState: function() {
    return {
      transitionName: 'pageSwap'
    };
  },

  componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    var currentPath = this.props.location.pathname;
    var current = currentPath.split('/')[2] || currentPath.split('/')[1] || 'about';

    var nextPath = nextProps.location.pathname;
    var next = nextPath.split('/')[2] || nextPath.split('/')[1] || 'about';

    var transition = routeOrder[current] < routeOrder[next] ? 'pageSwap' : 'reversePageSwap';

    this.setState({ transitionName: transition});
  }
},


  getTheme: function(path){

      if (path.indexOf("/projects/traveltunes") >= 0)
       return palette.traveltunes;
     if (path.indexOf("/projects/batch-maker") >= 0)
      return palette.batchmaker;
      if (path.indexOf("/projects/accordion") >= 0)
       return palette.accordion;
      else if (path.indexOf("/about") >= 0)
        return palette.about;

      else return palette.about;

  },

  disableClick: function(e){
    e.preventDefault();
  },

  render: function() {

    var path = this.props.location.pathname;
    var segment = path.split('/')[2] || path.split('/')[1] || 'about';
    var theme = this.getTheme(path);

    var linkStyle = _.clone(styles.link);
    linkStyle.color = theme.secondary;

    return (
      <div style={styles.app}>

          <div style={styles.header}>
            <div style={styles.name}>
              <span key="nav1" style={styles.navItem}>
                <Link
                  className={theme.cn}
                  key="about"
                  to="about"
                  style={linkStyle}
                  activeStyle={styles.activeLink}
                  activeClassName="active-nav"
                >
                bear
                </Link>
              </span>

              <span key="period" style={styles.period}>.</span>

              <span key="nav2" style={styles.navItem}>
                <Link
                  className={theme.cn}
                  key="projects"
                  to="projects"
                  style={linkStyle}
                  activeStyle={styles.activeLink}
                  activeClassName="active-nav"
                >
                works
                </Link>
              </span>
            </div>

            <div style={styles.icons}>

              <a
                className={theme.iconCn}
                target="_blank"
                href="docs/resume.pdf"
              >
                <svg
                  height={44}
                  width={44}
                  viewBox="0 0 32 32"
                  fill={theme.secondary}
                  style={{verticalAlign: 'middle'}}
                >
                  <path d="M24.956 10.556c-0.044-0.181-0.125-0.313-0.219-0.425l-5.231-5.731c-0.119-0.131-0.256-0.194-0.413-0.275-0.181-0.094-0.381-0.1-0.587-0.1h-9.994c-0.775 0-1.481 0.6-1.481 1.431v20.95c0 0.837 0.706 1.619 1.481 1.619h15.194c0.775 0 1.325-0.781 1.325-1.619v-15.256c0-0.225-0.025-0.387-0.075-0.594zM19.094 6.938l3.625 3.969h-3.625v-3.969zM9.031 26.031v-20h8.063v5.106c0 0.925 0.837 1.769 1.756 1.769h4.181v13.125h-14z"/>
                  <path d="M11.258 18.592c0-0.298 0.056-0.591 0.169-0.88s0.276-0.548 0.491-0.777 0.477-0.415 0.784-0.557c0.307-0.142 0.658-0.213 1.052-0.213 0.472 0 0.881 0.098 1.227 0.293s0.604 0.452 0.774 0.773l-1.024 0.729c-0.046-0.119-0.107-0.218-0.182-0.296s-0.159-0.14-0.251-0.186-0.187-0.078-0.285-0.096c-0.099-0.018-0.194-0.027-0.286-0.027-0.193 0-0.359 0.038-0.498 0.113s-0.255 0.174-0.344 0.296c-0.089 0.122-0.155 0.259-0.199 0.413s-0.066 0.306-0.066 0.457c0 0.17 0.025 0.332 0.076 0.488s0.124 0.293 0.22 0.413c0.096 0.119 0.214 0.214 0.354 0.286s0.297 0.106 0.471 0.106c0.092 0 0.186-0.010 0.282-0.031s0.189-0.055 0.278-0.104c0.090-0.048 0.17-0.11 0.241-0.185s0.127-0.169 0.168-0.279l1.093 0.653c-0.073 0.179-0.184 0.339-0.333 0.481s-0.319 0.261-0.509 0.358c-0.19 0.096-0.394 0.17-0.612 0.22s-0.43 0.076-0.636 0.076c-0.362 0-0.693-0.072-0.993-0.217s-0.559-0.335-0.777-0.574c-0.218-0.238-0.386-0.509-0.506-0.811s-0.179-0.61-0.179-0.921zM17.587 16.193l0.956 3.197 0.942-3.197h1.409l-1.794 4.881h-1.114l-1.815-4.881h1.416z"/>
                </svg>
              </a>

              <a
                className={theme.iconCn}
                href="mailto:bearshuford@me.com"
              >
                <Mail color={theme.secondary} size={36}/>
              </a>

              <a
                className={theme.iconCn}
                target="_blank"
                href="https://www.github.com/bearshuford"
              >
                <Github color={theme.secondary} size={36}/>
              </a>


            </div>

          </div>


        <div style={styles.children}>

          <ReactCSSTransitionGroup
            transitionName={this.state.transitionName}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, { key: segment })}
          </ReactCSSTransitionGroup>
        </div>



      </div>
    );
  }

});

export default App;
