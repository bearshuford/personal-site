 import React from 'react'

const styles = {
  intro: {
    marginTop: 10,
    backgroundColor: '#2DC7FF',
    padding: '5px 24px',
    width: '100%',
    textAlign: 'center'
  },

  introParagraph: {
    fontSize: 24,
    maxWidth: 500
  },
  name: {
    fontWeight: 600
  }
};


var About = React.createClass({

  render: function() {
    return (
      <div>
        <div style={styles.intro}>
          <p style={styles.introParagraph}>
            { "I'm " }  <span style={styles.name}>  {' Bear Shuford, '} </span>
            {' a front-end web developer located in Greenville SC'}
          </p>
        </div>

      </div>

    );
  }

});

export default About;
