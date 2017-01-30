import React from 'react';
import {Link} from 'react-router';

import {palette} from './app.jsx';


const styles = {
  page: {
    backgroundColor: palette.about.primary
  },
  about: {
    backgroundColor: palette.about.primary,
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    alignItems: 'flex-start',
    // textAlign: 'center',
    color: 'white'
  },
  banner: {
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    justifyContent: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    // marginTop: 10,
    // marginBottom: 18,
    height: 158
  },
  introParagraph: {
    fontSize: 24,
    // maxWidth: 400,
    minWidth: 0,
    padding: '18px 18px',
    // textAlign: 'center',
    lineHeight: '34px',
    alignSelf: 'center',
    // color: 'white'
  },
  introText: {

  },
  name: {
    fontWeight: 700,
    fontSize: 30,
    marginLeft: 4
  },
  aboutBody: {
    position: 'relative',
    fontFamily: '"Roboto", sans-serif',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    maxWidth: 660,
    // alignSelf: 'flex-start',
    fontWeight: 300
  },
  title: {
    fontSize: 48,
    margin: 0,
    padding: 0,
    paddingLeft: 8
  }
};


var About = React.createClass({

  render: function() {
    return (
      <div style={styles.page} className="page">
      <div style={styles.about}>

        <div id="banner" style={styles.banner}>

          <div style={styles.introParagraph}>
            { "I'm " } <span style={styles.name}> {' Bear Shuford, '} </span>
          <div>{' a front-end web developer located in Greenville SC.'}</div>
          </div>
        </div>

        <div style={styles.aboutBody}>


          <p>
            I'm looking for a job that will offer mentoring and challenge.
            I'm more than willing to relocate for the right opportunity.
          </p>

          <p>
            <Link>
              
            </Link>
          </p>


        </div>

      </div>
    </div>

    );
  }

});

export default About;
