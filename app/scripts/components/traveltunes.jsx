import React from 'react';

const styles = {
   tt: {
      display: 'flex',
      flexFlow: 'column nowrap',
      width: '100%',
      alignItems: 'center',
      paddingTop: 20
   },
   images: {
      display: 'flex',
      flexFlow: 'row wrap',
      maxWidth: 800,
      minWidth: 20,
      alignItems: 'center'
   },
   screenshot: {
      flex: '0 0 auto',
      objectFit: 'scale-down',
      minWidth: 0,
      margin: '6px 0'
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
