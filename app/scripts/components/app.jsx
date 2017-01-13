import React from 'react';
import _ from 'underscore';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Link } from 'react-router';


var SocialGithub          = require('react-icons/lib/io/social-github');
var SocialGithubOutline   = require('react-icons/lib/io/social-github');

var Github = require('react-icons/lib/go/mark-github');
var Mail   = require('react-icons/lib/io/paper-airplane');

//TODO import Transition from 'react-inline-transition-group';




export const palette = {
  about: {
    primary: '#26C6DA',
    cn: "nav",                  //className
    iconCn: "nav-icon"
  },
  traveltunes: {
    primary: '#1976D2',
    secondary: '#00C853',
    cn: "tt-header nav",
    iconCn: "tt-header"
  },

}


const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start'
  },
  header: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    lineHeight: '70px',
    padding: '0 16px',
    fontFamily: '"Raleway", sans-serif',
    fontSize: 48,
    lineHeight: '70px',
    marginTop: 6,
    marginBottom: 6
  },
  name: {
    padding: 5
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
    justifyContent: 'space-between',
    width: 112
  },

  children: {
  width: '100%'
  }

};





var Nav = React.createClass({

  disableClick: function(e){
    e.preventDefault();
  },

  render: function() {
    var theme = this.props.theme;

    var linkStyle = _.clone(styles.link);
    linkStyle.color = theme.primary;





    return (
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
              className="nav"
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
            style={{lineHeight: '42px'}}
            href="mailto:bearshuford@me.com"
          >
            <Mail color={theme.primary} size={36}/>
          </a>

          <a
            className={theme.iconCn}
            style={{lineHeight: '42px'}}
            target="_blank"
            href="https://www.github.com/bearshuford"
          >
            <Github color={theme.primary} size={36}/>
          </a>


        </div>


      </div>
    );
  }

});




var App = React.createClass({

  getTheme: function(path){

      if (path.indexOf("/projects/traveltunes") >= 0)
       return palette.traveltunes;
      else if (path.indexOf("/about") >= 0)
        return palette.about;

      else return palette.about;


  },

  render: function() {
    console.log('App', this.props.children, this.props);
    var theme = this.getTheme(this.props.location.pathname);

    return (
      <div style={styles.app}>

        <Nav theme={theme}/>

        <div style={styles.children}>
          {this.props.children}
        </div>



      </div>
    );
  }

});

export default App;
