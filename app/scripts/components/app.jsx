import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router';

var Github = require('react-icons/lib/go/mark-github');
var Mail   = require('react-icons/lib/io/paper-airplane');

//TODO import Transition from 'react-inline-transition-group';

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
    color: '#3185FC',
    textDecoration: 'none',
    transition: 'all .3s ease'
  },
  activeLink: {
    transition: 'all .3s ease',
    color: 'black',
    fontSize: 56,
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
  }

};





var Nav = React.createClass({

  disableClick: function(e){
    e.preventDefault();
  },

  render: function() {
    return (
      <div style={styles.header}>
        <div style={styles.name}>
          <span key="nav1" style={styles.navItem}>
            <Link
              className="nav"
              key="about"
              to="about"
              style={styles.link}
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
              style={styles.link}
              activeStyle={styles.activeLink}
              activeClassName="active-nav"
            >
            works
            </Link>
          </span>
        </div>

        <div style={styles.icons}>

          <a
            className="nav-icon"
            style={{lineHeight: '42px'}}
            href="mailto:bearshuford@me.com"
          >
            <Mail color="#3185FC" size={36}/>
          </a>

          <a
            className="nav-icon"
            style={{lineHeight: '42px'}}
            target="_blank"
            href="https://www.github.com/bearshuford"
          >
            <Github color="#3185FC" size={36}/>
          </a>


        </div>


      </div>
    );
  }

});




 var App = React.createClass({

  render: function() {
    return (
      <div style={styles.app}>

        <Nav/>

        {this.props.children}

      </div>
    );
  }

});

export default App;
