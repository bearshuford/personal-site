import React from 'react';

const styles = {
   tt: {
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '100%',
      alignItems: 'center',
      paddingTop: 10
   },
   top: {
     backgroundColor: '#00C853',
      color: 'white',
     display: 'flex',
     flexFlow: 'row wrap-reverse',
     justifyContent: 'space-around',
     alignItems: 'flex-start',
     width: '100%',
    //  alignSelf: 'center',
     marginTop: 0,
     marginBottom: 18,
     padding: '16px 0'

   },
   details: {
     fontSize: 24,
     maxWidth: 400,
     minWidth: 0,
    //  padding: '18px 18px',
    padding: '18px 0',
     textAlign: 'center',
     lineHeight: '34px',
    //  alignSelf: 'flex-start'
   },
   title: {
     padding: '0 16px',
     margin: 0
   },
   images: {
      display: 'flex',
      flexFlow: 'row wrap',
      maxWidth: 720,
      minWidth: 20,
      alignItems: 'center'
   },
   screenshot: {
      flex: '0 0 auto',
      objectFit: 'scale-down',
      minWidth: 0,
      margin: '24px 0'
   },
   description: {
     paddingTop: 12,
     paddingBottom: 0,
     padding: ' 12px 12px 0 12px',
     fontSize: 'calc(12px + 1vw)',
     fontWeight: 300
   }
};


const images = {
  login: 'https://cloud.githubusercontent.com/assets/21989005/21708207/38b8fd92-d3a4-11e6-8961-da9cd62a2f9f.png',
  play:  'https://cloud.githubusercontent.com/assets/21989005/21703645/b8d744a2-d381-11e6-8af0-9a12a43a3861.png',
  add:   'https://cloud.githubusercontent.com/assets/21989005/21703828/eba76398-d382-11e6-9ece-1eede679ce0a.png'
};


var TravelTunes = React.createClass({

  render: function() {
    return (
      <div style={styles.tt}>
        <div style={styles.top}>
          <div style={styles.details}>
            <h1 style={styles.title}>Travel Tunes</h1>
          </div>
            <div style={styles.description}> final project for The Iron Yard</div>
        </div>




        <div style={styles.images}>

          <img
             style={styles.screenshot}
             src={images.login}
          />
          <img
            style={styles.screenshot}
            src={images.play}
          />
          <img
            style={styles.screenshot}
            src={images.add}
          />
        </div>




     </div>

   );
 }

});

export default TravelTunes;
