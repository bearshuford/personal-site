 import React from 'react'

 import {palette} from './app.jsx';


const styles = {
  about: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
     position: 'relative'
  },
  banner: {
    backgroundColor: palette.about.primary,
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    // marginTop: 10,
    marginBottom: 18,
    height: 168
  },
  introParagraph: {
    fontSize: 24,
    maxWidth: 400,
    minWidth: 0,
    padding: '18px 18px',
    textAlign: 'center',
    lineHeight: '34px',
    alignSelf: 'center',
    color: 'white'
  },
  introText: {

  },
  name: {
    fontWeight: 600,
    fontSize: 30,
    marginLeft: 4
  },
  aboutBody: {
    fontFamily: '"Roboto", sans-serif',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    maxWidth: 760,
    alignSelf: 'center'
  },
  title: {
    fontSize: 48,
    fontWeight: 300,
    margin: 0,
    padding: 0,
    paddingLeft: 8
  }
};


var About = React.createClass({

  render: function() {
    return (
      <div style={styles.about} className="page">

        <div id="banner" style={styles.banner}>

          <div style={styles.introParagraph}>
            { "I'm " } <span style={styles.name}> {' Bear Shuford, '} </span>
          <div>{' a front-end web developer located in Greenville SC.'}</div>
          </div>
        </div>

        <div style={styles.aboutBody}>
          <p>
            The end of 2016 was the end of an intense front-end web development program at the Iron Yard in Greenville, SC.
            I came out of it with a lot, including a fancy diploma and a lot of practical experience.
          </p>

          <p>
            Before that, I studied computer science at Clemson University. While enrolled,
            I was Engineering Assistant at Carolina CoverTech for three summers.
          </p>

          <p>
            I'm looking for a job and I'm more than willing to relocate for the right one.
          </p>


        </div>

      </div>

    );
  }

});

export default About;
