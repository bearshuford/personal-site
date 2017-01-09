import React from 'react';
import Radium from 'radium';

import { Link } from 'react-router';

//TODO import Transition from 'react-inline-transition-group';

const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start'
  },

  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    height: 60,
    padding: '0 8px',

    fontFamily: '"Raleway", sans-serif',
    fontSize: 44,
    lineHeight: '52px',
  },

  navItem: {
    transition: 'all .3s ease',
    WebkitFontSmoothing: 'antialiased',
    ':hover': {
      //  textShadow: '-1px -1px 0 ',
      fontSize: 52
    }
  },
  link: {
    color: '#3185FC',
    textDecoration: 'none',
    transition: 'all .5s'
  },
  activeLink: {
    color: 'black',
    textDecoration: 'none ',
   fontSize: 52,
   cursor: 'default'
  },
  period: {
    fontSize: 60,
    padding: '0 2px'
  }

};





var Nav = React.createClass({

  disableClick: function(e){
    e.preventDefault();
  },

  render: function() {
    return (
      <div style={styles.header}>
        <div id="name">
          <span key="nav1" style={styles.navItem}>
            <Link
              key="about"
              to="about"
              style={styles.link}
              activeStyle={styles.activeLink}
            >bear</Link>
          </span>

          <span key="period" style={styles.period}>.</span>

          <span key="nav2" style={styles.navItem}>
            <Link
              key="projects"
              to="projects"
              style={styles.link}
              activeStyle={styles.activeLink}
            >works</Link>
          </span>
        </div>

      </div>
    );
  }

});

Nav = Radium(Nav);



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

export default Radium(App);
