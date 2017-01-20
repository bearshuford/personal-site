 import React from 'react'


const styles = {
  about: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
     position: 'relative'
  },
  banner: {
    backgroundColor: '#26C6DA',
    display: 'flex',
    flexFlow: 'row wrap-reverse',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 18,
    minHeight: 168
  },
  introParagraph: {
    fontSize: 24,
    maxWidth: 400,
    minWidth: 0,
    padding: '18px 18px',
    textAlign: 'center',
    lineHeight: '34px',
    alignSelf: 'center',
    color: 'black'
  },
  introText: {

  },
  name: {
    fontWeight: 600,
    fontSize: 30,
    marginLeft: 4
  },
  aboutBody: {
    fontFamily: '"Cabin", sans-serif',
    paddingLeft: 12,
    paddingRight: 40,
    fontSize: 20,
    maxWidth: 800,
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
          <p>Gluten-free pitchfork kombucha art party street art, forage celiac church-key. Gochujang chia tumblr tote bag, tofu cardigan vexillologist 3 wolf moon venmo chicharrones vegan taxidermy shoreditch. </p>

            <p>Hammock ethical listicle umami stumptown. Single-origin coffee tumblr selfies,  Marfa vegan poke seitan venmo shoreditch. Forage offal brooklyn letterpress vegan keytar.</p>

          <p>Raw denim disrupt church-key, cronut neutra typewriter narwhal ramps aesthetic 3 wolf moon +1 mixtape. Cred intelligentsia art party subway tile single-origin coffee. Poke occupy tilde. Butcher banjo wolf etsy sriracha, YOLO ugh readymade meggings tumeric letterpress paleo photo booth. Gochujang migas bicycle rights banh mi. Portland iceland tacos butcher bicycle rights.</p>

        </div>

      </div>

    );
  }

});

export default About;
