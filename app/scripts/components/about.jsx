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
    fontSize: 28,
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
  },
  icons: {
    width: '100%',
    // background: 'white',
    // borderRadius: '20px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    margin: 16
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
            I enjoy colorful animation, comics, and websites. I love cats.
          </p>

          <p>
            In December 2016 I completed a 12-week front-end engineering course at the Iron Yard.
            I went in with most of a computer science degree but not a lot of experience actually making things.
            Now I make web applications using a really neat set of tools.
          </p>

          <div style={styles.icons}>
            <a href="https://facebook.github.io/react/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="45" version="1.1" viewBox="0 0 36 32">
                <path d="M0.105 15.965c0 2.673 2.611 5.169 6.726 6.576-0.822 4.137-0.147 7.472 2.106 8.772 2.316 1.336 5.766 0.411 9.041-2.452 3.192 2.747 6.418 3.828 8.67 2.525 2.314-1.339 3.017-4.901 2.173-9.167 4.287-1.417 6.685-3.545 6.685-6.254 0-2.611-2.615-4.871-6.676-6.268 0.909-4.443 0.139-7.697-2.208-9.050-2.262-1.305-5.526-0.168-8.765 2.651-3.37-2.992-6.601-3.905-8.945-2.549-2.26 1.308-2.905 4.704-2.080 8.918-3.977 1.386-6.726 3.697-6.726 6.298z" fill="#fff"/>
                <path d="M27.97 11.085c-0.186-0.072-0.523-0.181-0.863-0.281-0.119-0.136-0.065-0.369-0.015-0.603 0.788-3.844 0.288-6.84-1.423-7.826-1.64-0.946-4.322 0.040-7.031 2.398-0.285 0.249-0.54 0.484-0.789 0.724-0.154-0.16-0.324-0.317-0.496-0.47-2.858-2.537-5.704-3.599-7.412-2.61-1.638 0.949-2.124 3.765-1.434 7.289 0.094 0.489 0.175 0.839 0.264 1.187-0.434-0.031-0.823 0.091-1.195 0.22-3.328 1.16-5.454 2.979-5.454 4.866 0 1.948 2.282 3.903 5.749 5.088 0.155 0.059 0.438 0.15 0.724 0.234 0.061 0.263-0.024 0.642-0.099 1.024-0.679 3.593-0.165 6.343 1.469 7.286 1.688 0.973 4.521-0.027 7.279-2.438 0.218-0.191 0.437-0.393 0.656-0.605 0.264 0.255 0.54 0.508 0.824 0.753 2.698 2.321 5.337 3.25 6.969 2.304 1.686-0.976 2.234-3.93 1.523-7.524-0.054-0.275-0.118-0.555-0.189-0.84 0.199-0.059 0.394-0.119 0.585-0.183 3.604-1.194 5.949-3.125 5.949-5.099 0-1.893-2.194-3.724-5.59-4.893z" fill="#53c1de"/>
                <path d="M27.188 19.802c-0.172 0.057-0.348 0.112-0.528 0.165-0.398-1.26-0.935-2.599-1.592-3.983 0.627-1.351 1.143-2.673 1.53-3.925 0.322 0.093 0.634 0.191 0.935 0.295 2.909 1.001 4.684 2.482 4.684 3.623 0 1.215-1.917 2.793-5.028 3.824zM25.897 22.361c0.315 1.589 0.36 3.026 0.151 4.149-0.187 1.009-0.564 1.682-1.029 1.952-0.991 0.574-3.11-0.172-5.395-2.138-0.262-0.225-0.526-0.466-0.791-0.721 0.886-0.969 1.771-2.095 2.635-3.346 1.52-0.135 2.956-0.355 4.258-0.656 0.064 0.259 0.121 0.512 0.17 0.761zM12.839 28.363c-0.968 0.342-1.739 0.352-2.205 0.083-0.992-0.572-1.404-2.78-0.842-5.741 0.090-0.477 0.169-0.829 0.259-1.177 1.259 0.418 2.684 0.623 4.208 0.747 0.87 1.224 1.781 2.349 2.699 3.334-0.186 0.18-0.381 0.36-0.581 0.536-1.238 1.082-2.46 1.839-3.538 2.219zM8.304 19.795c-1.533-0.524-2.799-1.205-3.667-1.948-0.78-0.668-1.173-1.331-1.173-1.869 0-1.145 1.707-2.605 4.553-3.597 0.22-0.084 0.58-0.201 0.945-0.306 0.53 1.246 1.046 2.584 1.669 3.937-0.631 1.373-1.154 2.732-1.551 4.027-0.378-0.106-0.637-0.189-0.892-0.278zM9.824 9.447c-0.591-3.020-0.199-5.297 0.789-5.869 1.052-0.609 3.378 0.259 5.829 2.436 0.157 0.139 0.314 0.285 0.472 0.436-0.913 0.981-1.816 2.097-2.678 3.314-1.479 0.137-2.894 0.357-4.195 0.652-0.053-0.187-0.128-0.513-0.195-0.842zM23.385 12.796c-0.415-0.721-0.731-1.234-1.058-1.74 1.105 0.295 2.066 0.463 2.968 0.669-0.271 0.868-0.609 1.776-1.006 2.707-0.413-0.792-0.713-1.327-1.024-1.856zM17.855 7.409c0.619 0.671 1.24 1.42 1.85 2.233-0.557-0.028-1.21-0.044-1.867-0.044-0.65 0-1.297 0.016-1.94 0.047 0.701-0.809 1.327-1.557 1.956-2.236zM12.29 12.805c-0.205 0.337-0.5 0.869-0.783 1.408-0.495-0.71-0.83-1.622-1.103-2.502 0.897-0.201 1.854-0.365 2.85-0.489-0.237 0.355-0.556 0.873-0.863 1.397zM13.282 20.831c-1.030-0.115-2.001-0.271-2.897-0.466 0.278-0.896 0.62-1.828 1.019-2.776 0.388 0.755 0.684 1.288 0.992 1.812 0.315 0.536 0.641 1.063 0.98 1.582zM17.892 24.642c-0.637-0.687-1.271-1.447-1.892-2.264 0.602 0.024 1.216 0.036 1.839 0.036 0.641 0 1.274-0.014 1.898-0.042-0.612 0.832-1.23 1.593-1.846 2.27zM24.303 17.541c0.42 0.958 0.774 1.884 1.056 2.766-0.912 0.208-1.896 0.376-2.933 0.5 0.216-0.326 0.536-0.849 0.845-1.378 0.325-0.558 0.629-1.103 0.92-1.655zM22.227 18.536c-0.586 1.020-1.085 1.814-1.608 2.591-0.833-0.091-1.797-0.056-2.779-0.056-0.978 0-1.93-0.030-2.846-0.090-0.453-0.648-0.961-1.443-1.439-2.258-0.477-0.812-0.924-1.642-1.34-2.49 0.416-1.295 0.861-2.126 1.336-2.937l-0.097 0.18c0.571-0.99 1.075-1.782 1.607-2.553 0.852 0.056 1.811 0.019 2.78 0.019 0.973 0 1.933 0.037 2.868 0.109 0.437 0.631 0.938 1.421 1.412 2.228 0.467 0.794 0.918 1.62 1.343 2.461-0.411 1.339-0.861 2.172-1.339 2.988zM24.998 3.538c1.053 0.607 1.462 3.056 0.801 6.266-0.066 0.328-0.115 0.539-0.168 0.747-1.278-0.423-2.695-0.647-4.177-0.787-0.864-1.23-1.759-2.349-2.657-3.317 0.224-0.216 0.46-0.433 0.7-0.644 2.344-2.039 4.513-2.837 5.502-2.267z" fill="#fff"/>
                <path d="M17.84 13.171c1.551 0 2.807 1.257 2.807 2.807s-1.257 2.807-2.807 2.807c-1.55 0-2.807-1.257-2.807-2.808s1.257-2.807 2.807-2.807z" fill="#53c1de"/>
              </svg>
            </a>

            <a href="http://backbonejs.org/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="32.5" version="1.1" viewBox="0 0 26 32">
              	<path d="M0.003 0v17.303l12.879 7.341v-4.99l-8.616-4.911v-7.714l8.616 4.911v-4.598l-12.879-7.341z" fill="#002a41"/>
              	<path d="M25.76 0v17.303l-12.879 7.341v-4.99l8.616-4.911v-7.714l-8.616 4.911v-4.598l12.879-7.341z" fill="#0071b5"/>
              	<path d="M0.003 31.993v-17.303l12.879-7.341v4.99l-8.616 4.911v7.322l8.616-4.911v4.99l-12.879 7.341z" fill="#0071b5"/>
              	<path d="M25.76 31.993v-17.303l-12.879-7.341v4.99l8.616 4.911v7.322l-8.616-4.911v4.99l12.879 7.341z" fill="#002a41"/>
              </svg>
            </a>

            <a href="http://sass-lang.com/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="53.75" version="1.1" viewBox="0 0 43 32" >
              	<path d="M36.677 18.246c-1.464 0-2.756 0.354-3.87 0.88-0.411-0.761-0.823-1.464-0.88-1.995-0.058-0.584-0.173-0.938-0.058-1.699 0.119-0.703 0.526-1.76 0.526-1.818s-0.119-0.469-0.938-0.469c-0.88 0-1.584 0.177-1.699 0.411-0.058 0.234-0.234 0.761-0.354 1.287-0.177 0.761-1.699 3.578-2.579 5.043-0.292-0.584-0.526-1.053-0.584-1.464-0.062-0.588-0.177-0.938-0.062-1.699 0.119-0.703 0.526-1.76 0.526-1.818s-0.119-0.469-0.938-0.469c-0.88 0-1.584 0.177-1.699 0.411-0.058 0.23-0.177 0.761-0.35 1.287-0.177 0.526-2.287 5.162-2.813 6.334-0.296 0.584-0.531 1.111-0.707 1.464v0c0 0 0 0 0 0.058-0.115 0.296-0.234 0.469-0.234 0.469v0c-0.119 0.234-0.234 0.411-0.292 0.411s-0.119-0.588 0-1.349c0.292-1.584 1.057-4.105 1.057-4.22 0-0.058 0.119-0.469-0.469-0.703s-0.823 0.177-0.88 0.177-0.119 0.115-0.119 0.115 0.703-2.813-1.287-2.813c-1.23 0-2.933 1.349-3.751 2.579-0.531 0.292-1.645 0.88-2.875 1.584-0.469 0.234-0.938 0.526-1.411 0.761-0.058-0.058-0.058-0.058-0.115-0.115-2.406-2.521-6.803-4.339-6.626-7.741 0.058-1.23 0.526-4.516 8.444-8.502 6.507-3.225 11.726-2.344 12.664-0.354 1.292 2.813-2.813 8.090-9.559 8.856-2.579 0.292-3.928-0.703-4.278-1.057-0.354-0.411-0.411-0.411-0.526-0.354-0.234 0.119-0.058 0.469 0 0.646 0.177 0.526 1.057 1.464 2.464 1.933 1.23 0.411 4.282 0.646 7.918-0.761 4.105-1.584 7.33-5.98 6.392-9.674-0.942-3.751-7.218-4.981-13.080-2.871-3.521 1.23-7.33 3.225-10.028 5.746-3.225 3.048-3.751 5.688-3.578 6.803 0.761 3.928 6.157 6.449 8.325 8.387-0.115 0.058-0.23 0.115-0.292 0.173-1.115 0.526-5.215 2.698-6.215 4.985-1.172 2.579 0.177 4.454 1.057 4.689 2.756 0.761 5.631-0.646 7.153-2.933s1.349-5.277 0.646-6.626v-0.058c0.292-0.177 0.588-0.354 0.823-0.526 0.526-0.35 1.111-0.646 1.579-0.88-0.234 0.703-0.469 1.584-0.526 2.813-0.119 1.468 0.469 3.344 1.292 4.105 0.354 0.354 0.761 0.354 1.057 0.354 0.938 0 1.349-0.761 1.818-1.641 0.588-1.115 1.057-2.402 1.057-2.402s-0.65 3.455 1.049 3.455c0.646 0 1.23-0.823 1.526-1.23v0c0 0 0 0 0.058-0.058 0.058-0.119 0.119-0.177 0.119-0.177v0c0.234-0.411 0.823-1.407 1.641-3.048 1.057-2.11 2.11-4.751 2.11-4.751s0.119 0.646 0.411 1.699c0.177 0.646 0.588 1.349 0.88 1.995-0.234 0.354-0.411 0.526-0.411 0.526v0c-0.177 0.292-0.411 0.526-0.646 0.823-0.88 0.995-1.876 2.168-1.991 2.521-0.177 0.411-0.119 0.703 0.177 0.938 0.234 0.177 0.646 0.177 1.057 0.177 0.761-0.058 1.292-0.234 1.584-0.354 0.411-0.119 0.88-0.354 1.349-0.703 0.823-0.588 1.349-1.464 1.292-2.641 0-0.646-0.234-1.292-0.469-1.876 0.053-0.115 0.169-0.234 0.226-0.35 1.292-1.933 2.344-4.047 2.344-4.047s0.119 0.646 0.411 1.699c0.177 0.531 0.469 1.119 0.765 1.703-1.234 1-1.995 2.172-2.287 2.933-0.469 1.407-0.119 2.052 0.642 2.229 0.354 0.058 0.761-0.058 1.115-0.234 0.411-0.119 0.938-0.411 1.464-0.761 0.823-0.588 1.641-1.464 1.584-2.641 0-0.526-0.177-1.057-0.354-1.584 1.057-0.411 2.402-0.703 4.162-0.469 3.694 0.411 4.455 2.756 4.282 3.694-0.119 0.995-0.938 1.526-1.172 1.641-0.23 0.177-0.35 0.234-0.288 0.354 0.058 0.177 0.177 0.177 0.354 0.119 0.292-0.058 1.933-0.761 1.995-2.579-0.062-2.233-2.233-4.755-6.104-4.755zM8.123 27.92c-1.234 1.349-2.933 1.818-3.698 1.411-0.823-0.469-0.469-2.464 1.057-3.87 0.938-0.88 2.11-1.641 2.875-2.168 0.177-0.119 0.469-0.292 0.761-0.469 0.058-0.058 0.058-0.058 0.058-0.058v0c0.058-0.062 0.119-0.062 0.177-0.123 0.584 2.052 0.058 3.87-1.23 5.277zM17.032 21.824c-0.411 1.057-1.349 3.694-1.876 3.578-0.469-0.119-0.761-2.172-0.115-4.167 0.354-0.995 1.057-2.229 1.464-2.698 0.646-0.761 1.407-0.995 1.584-0.703 0.292 0.411-0.761 3.344-1.057 3.99zM24.424 25.341c-0.177 0.119-0.296 0.177-0.411 0.119-0.058-0.062 0.058-0.177 0.058-0.177s0.938-0.995 1.292-1.464c0.234-0.239 0.469-0.588 0.703-0.942 0 0.058 0 0.058 0 0.119 0.058 1.23-1.115 2.052-1.641 2.344zM30.17 24.053c-0.119-0.119-0.119-0.411 0.35-1.349 0.177-0.354 0.588-1 1.292-1.645 0.058 0.234 0.119 0.469 0.119 0.703-0.062 1.526-1.115 2.057-1.76 2.291z"/>
              </svg>
            </a>

            <a href="https://www.w3.org/Style/CSS/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="35" version="1.1" viewBox="0 0 28 32">
              	<path d="M2.568 28.801l-2.568-28.801h28.216l-2.57 28.797-11.555 3.203-11.523-3.199z" fill="#1572b6"/>
              	<path d="M14.108 29.552l9.337-2.589 2.197-24.608h-11.533v27.197z" fill="#33a9dc"/>
              	<path d="M14.108 12.79h4.674l0.323-3.617h-4.997v-3.532h8.858l-0.085 0.948-0.868 9.734h-7.905v-3.532z" fill="#fff"/>
              	<path d="M14.129 21.963l-0.015 0.004-3.934-1.062-0.252-2.817h-3.546l0.495 5.546 7.236 2.009 0.016-0.005v-3.675z" fill="#ebebeb"/>
              	<path d="M18.482 16.172l-0.425 4.731-3.94 1.063v3.675l7.241-2.007 0.053-0.597 0.614-6.865h-3.544z" fill="#fff"/>
              	<path d="M14.12 5.64v3.532h-8.532l-0.071-0.794-0.161-1.791-0.084-0.948h8.849z" fill="#ebebeb"/>
              	<path d="M14.108 12.79v3.532h-3.884l-0.071-0.794-0.161-1.791-0.084-0.948h4.2z" fill="#ebebeb"/>
              </svg>
            </a>

            <a href="https://www.w3.org/html/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="40" version="1.1" viewBox="0 0 32 32">
              	<path d="M4.438 28.75l-2.563-28.75h28.188l-2.563 28.75-11.563 3.25z" fill="#e34f26"/>
              	<path d="M16 29.5l9.313-2.563 2.188-24.625h-11.5z" fill="#ef652a"/>
              	<path d="M16 13h-4.688l-0.313-3.625h5v-3.5h-8.875l0.063 0.938 0.875 9.75h7.938zM16 22.188h-0.063l-3.938-1.063-0.25-2.813h-3.5l0.438 5.563 7.25 2h0.063z" fill="#ebebeb"/>
              	<path d="M15.938 13v3.563h4.375l-0.438 4.563-3.938 1.063v3.688l7.25-2 0.063-0.625 0.813-9.313 0.125-0.938h-1zM15.938 5.875v3.5h8.563l0.063-0.75 0.188-1.813 0.063-0.938z" fill="#fff"/>
              </svg>
            </a>

            <a href="http://yeoman.io/">
              <svg style={styles.logo} className="hvr-grow" height="40" width="40" version="1.1" viewBox="0 0 32 32">
              	<path d="M32 15.999c0 8.836-7.163 16-16 16s-16-7.163-16-16c0-8.836 7.163-16 16-16s16 7.163 16 16z" fill="#050505"/>
              	<path d="M31.183 16.002c0 8.344-6.811 15.108-15.213 15.108s-15.213-6.764-15.213-15.108c0-8.344 6.811-15.108 15.213-15.108s15.213 6.764 15.213 15.108z" fill="#fff"/>
              	<path d="M10.188 10.974l-1.057-5.972c1.279-2.41 4.429-2.764 6.788-2.782 1.946-0.015 4.594 0.337 6.677 2.856l-0.937 5.898 2.151-0.009-0.454 1.345-14.819 0.037-0.482-1.372z" fill="#050505"/>
              	<path d="M10.924 23.79c-1.622 0.789-3.147 2.019-4.42 4.066 2.562 2.301 6.308 3.472 9.535 3.476 3.073 0.004 6.206-1.076 9.377-3.411-1.267-1.992-2.768-3.467-4.525-4.236-3.011 1.559-6.327 1.623-9.967 0.105z" fill="#050505" opacity="0.99"/>
              	<path d="M21.442 12.279l-0.218 3.855c0.958-0.143 1.978-0.215 2.237-1.91-0.027-1.428-0.883-1.978-2.019-1.945z" fill="#e9a84d" opacity="0.99"/>
              	<path d="M23.453 14.182c-0.008 0.535-0.435 0.962-0.952 0.954s-0.93-0.448-0.922-0.983c0.008-0.535 0.435-0.962 0.952-0.954s0.93 0.448 0.922 0.983z" fill="#bd5d12" opacity="0.99"/>
              	<path d="M23.466 14.173c-0.007 0.468-0.345 0.842-0.755 0.835s-0.735-0.391-0.728-0.859c0.007-0.468 0.345-0.842 0.755-0.835s0.735 0.391 0.728 0.859z" fill="#df882a" opacity="0.99"/>
              	<path d="M10.379 12.338l0.192 3.856c-0.958-0.147-1.977-0.223-2.229-1.922 0.033-1.43 0.901-1.972 2.037-1.934z" fill="#e9a84d" opacity="0.99"/>
              	<path d="M8.359 14.224c0.006 0.535 0.431 0.965 0.948 0.959s0.932-0.445 0.926-0.98c-0.006-0.535-0.431-0.965-0.948-0.959s-0.932 0.445-0.926 0.98z" fill="#be5d13" opacity="0.99"/>
              	<path d="M8.346 14.206c0.005 0.468 0.342 0.853 0.751 0.849s0.737-0.388 0.732-0.856c-0.005-0.468-0.342-0.844-0.751-0.84s-0.737 0.379-0.732 0.847z" fill="#de882a" opacity="0.99"/>
              	<path d="M9.616 12.502c-0.831 0.258-1.217 0.883-1.161 1.873 0.333-0.222 0.65-0.348 0.993-0.79 0.284-0.367 0.183-0.726 0.168-1.082z" fill="#bf5d14" opacity="0.361"/>
              	<path d="M10.377 12.351l0.561 10.896c1.162 1.999 2.566 1.471 4.369 1.611 1.805 0.14 3.138 1.57 5.503-1.354l0.648-11.225c-3.453-0.1-7.63 0.034-11.082 0.074z" fill="#f4cf8c" opacity="0.99"/>
              	<path d="M10.893 23.142l0.111 2.634c0.562 0.389 1.082 0.875 1.666 1.091 2.748 1.014 5.414 0.823 8.164-1.1l0.037-2.606c-1.626 1.2-3.264 1.795-4.915 1.734-2.662-0.002-4.046-0.768-5.063-1.753z" fill="#dd002a" opacity="0.99"/>
              	<path d="M15.47 17.225h0.921c-0.154-0.434-0.335-0.895-0.457-1.479-0.099 0.523-0.253 0.978-0.438 1.479z" fill="#fff" opacity="0.99"/>
              	<path d="M15.18 17.626c0.463-0.208 1.036-0.182 1.482-0.050l0.23 0.379c-0.258 0.109-0.491 0.22-0.97 0.236-0.293 0.006-0.579-0.025-0.957-0.25z" fill="#dd002a" opacity="0.99"/>
              	<path d="M9.311 24.754c-1.050 1.409-1.446 2.703-1.718 3.974l-0.42-0.334c0.531-2.244 1.333-2.951 2.138-3.639z" fill="#dd002a" opacity="0.99"/>
              	<path d="M22.616 24.714c0.772 1.298 1.429 2.654 1.666 3.987l0.472-0.321c-0.498-1.623-1.256-2.757-2.138-3.666z" fill="#dd002a" opacity="0.99"/>
              	<path d="M14.185 8.461c-0.357 1.064-0.316 1.838 0.779 2.532l-4.805-0.019-0.408-2.504z" fill="#dd002a" opacity="0.99"/>
              	<path d="M17.494 8.422c0.438 0.781 0.478 1.746-0.611 2.566l4.767-0.009 0.408-2.469z" fill="#dd002a" opacity="0.99"/>
              	<path d="M14.216 21.797c1.18 0.475 2.361 0.46 3.541 0.026-0.402 0.455-0.918 0.992-1.757 0.997-0.759 0.004-1.47-0.347-1.784-1.023z" fill="#c07216" opacity="0.99"/>
              	<path d="M13.931 12.443c-0.383 0.008-0.749 0.077-1.090 0.117-0.583 0.28-0.931 0.636-1.382 0.983 0.695-0.298 1.554-0.712 2.319-0.825 0.382-0.017 0.595 0.098 0.63 0.352-0.083 0.157-0.201 0.275-0.408 0.529-0.294 0.36-0.889 0.503-1.252 0.575 0.209 0.027 0.172 0.026 0.862 0.009 0.39-0.083 0.612-0.356 0.807-0.658l0.070-0.103 0.060 1.68 2.81-0.019 0.047-1.55 0.008 0.012c0.193 0.301 0.352 0.533 0.807 0.659 0.69 0.017 0.653 0.018 0.862-0.009-0.363-0.072-0.957-0.214-1.252-0.575-0.207-0.253-0.325-0.371-0.408-0.529 0.035-0.255 0.249-0.37 0.631-0.352 0.818 0.006 1.64 0.494 2.318 0.825-0.451-0.346-0.836-0.694-1.419-0.974-0.587-0.060-1.151-0.166-1.762-0.056 0.034 0.235-0.119 0.283-0.232 0.371l0.018 0.145 0.029 1.801-2.189-0.019-0.065-1.804-0.002-0.001 0.002-0.003c0.008-0.001 0.035-0.049 0.046-0.065-0.113-0.088-0.192-0.21-0.158-0.445-0.242-0.058-0.479-0.076-0.709-0.071z" fill="#aa651a" opacity="0.99"/>
              	<path d="M14.918 18.616c0.079 0.307 0.365 0.718 1.049 0.682 0.825-0.044 0.776-0.442 0.951-0.669-0.263 0.073-0.433 0.134-0.957 0.157-0.616 0.028-0.752-0.085-1.043-0.171z" fill="#c2761b" opacity="0.99"/>
              	<path d="M13.991 31.061l0.074-1.094c0.052-0.138 0.165-0.245 0.315-0.334l3.014-0.009c0.156 0.121 0.339 0.169 0.427 0.473l-0.009 1.029h-0.825v-0.686c0-0.176-2.077-0.15-2.077-0.028v0.723z" fill="#ffb000" opacity="0.99"/>
              	<path d="M17.82 30.134c0.916-0.023 1.985 0.049 3.097 0.148l-0.825 0.269c-0.743-0.14-1.478-0.056-2.244-0.056z" fill="#dd002a" opacity="0.99"/>
              	<path d="M14.056 30.158c-0.916-0.023-1.985 0.049-3.097 0.148l0.825 0.269c0.743-0.14 1.478-0.056 2.244-0.056z" fill="#dd002a" opacity="0.99"/>
              	<path d="M21.489 27.155l0.787-0.007c0.043 0.062 0.095 0.104 0 0.269l-0.295 0.007-0.597 0.715 0.013 0.42 0.341 0.007c0.066 0.080 0.056 0.171 0 0.269l-0.931 0.007c-0.054-0.099-0.053-0.187-0.020-0.269h0.328v-0.433l-0.551-0.695-0.328-0.007c-0.029-0.068-0.092-0.112-0.007-0.262l0.787-0.013c0.051 0.1 0.055 0.235-0.066 0.249l0.328 0.413 0.282-0.393c-0.191-0.147-0.075-0.216-0.072-0.275z" fill="#dd002a" opacity="0.99"/>
              	<path d="M10.371 12.335l0.032 0.541 11.019 0.014 0.046-0.611c-1.816-0.035-3.73-0.050-5.393-0.029-1.935 0.024-3.826 0.096-5.704 0.085z" fill="#ab661b" opacity="0.707"/>
              	<path d="M16.663 9.403c0 0.432-0.35 0.782-0.782 0.782s-0.782-0.35-0.782-0.782c0-0.432 0.35-0.782 0.782-0.782s0.782 0.35 0.782 0.782z" fill="none" stroke="#dd002a" strokeLinecap="butt" strokeWidth="0.8282"/>
              	<path d="M16 8.357c-0.016 0-0.030 0.007-0.042 0.016s-0.020 0.022-0.027 0.036c-0.015 0.029-0.022 0.069-0.022 0.108s0.008 0.079 0.022 0.108c0.075 0.16 0.074 0.16 0.138 0 0.015-0.029 0.022-0.069 0.022-0.108s-0.008-0.079-0.022-0.108c-0.007-0.015-0.016-0.027-0.027-0.036s-0.026-0.016-0.042-0.016zM15.734 8.357c-0.016 0-0.030 0.007-0.042 0.016s-0.020 0.022-0.027 0.036c-0.015 0.029-0.022 0.069-0.022 0.108s0.008 0.079 0.022 0.108c0.075 0.16 0.074 0.16 0.138 0 0.015-0.029 0.022-0.069 0.022-0.108s-0.008-0.079-0.022-0.108c-0.007-0.015-0.016-0.027-0.027-0.036s-0.026-0.016-0.042-0.016z" fill="#000"/>
              	<path d="M14.82 9.296c0 0.016 0.007 0.030 0.016 0.042s0.022 0.020 0.036 0.027c0.029 0.015 0.069 0.022 0.108 0.022s0.079-0.008 0.108-0.022c0.16-0.075 0.16-0.074 0-0.138-0.029-0.015-0.069-0.022-0.108-0.022s-0.079 0.008-0.108 0.022c-0.015 0.007-0.027 0.016-0.036 0.027s-0.016 0.026-0.016 0.042zM14.82 9.563c0 0.016 0.007 0.030 0.016 0.042s0.022 0.020 0.036 0.027c0.029 0.015 0.069 0.022 0.108 0.022s0.079-0.008 0.108-0.022c0.16-0.075 0.16-0.074 0-0.138-0.029-0.015-0.069-0.022-0.108-0.022s-0.079 0.008-0.108 0.022c-0.015 0.007-0.027 0.016-0.036 0.027s-0.016 0.026-0.016 0.042z" fill="#000"/>
              	<path d="M15.76 10.476c0.016-0 0.030-0.007 0.042-0.016s0.020-0.022 0.027-0.036c0.015-0.029 0.022-0.069 0.022-0.108s-0.008-0.079-0.022-0.108c-0.075-0.16-0.074-0.16-0.138-0-0.015 0.029-0.022 0.069-0.022 0.108s0.008 0.079 0.022 0.108c0.007 0.015 0.016 0.027 0.027 0.036s0.026 0.016 0.042 0.016zM16.026 10.476c0.016-0 0.030-0.007 0.042-0.016s0.020-0.022 0.027-0.036c0.015-0.029 0.022-0.069 0.022-0.108s-0.008-0.079-0.022-0.108c-0.075-0.16-0.074-0.16-0.138-0-0.015 0.029-0.022 0.069-0.022 0.108s0.008 0.079 0.022 0.108c0.007 0.015 0.016 0.027 0.027 0.036s0.026 0.016 0.042 0.016z" fill="#000"/>
              	<path d="M16.94 9.537c-0-0.016-0.007-0.030-0.016-0.042s-0.022-0.020-0.036-0.027c-0.029-0.015-0.069-0.022-0.108-0.022s-0.079 0.008-0.108 0.022c-0.16 0.075-0.16 0.074-0 0.138 0.029 0.015 0.069 0.022 0.108 0.022s0.079-0.008 0.108-0.022c0.015-0.007 0.027-0.016 0.036-0.027s0.016-0.026 0.016-0.042zM16.94 9.27c-0-0.016-0.007-0.030-0.016-0.042s-0.022-0.020-0.036-0.027c-0.029-0.015-0.069-0.022-0.108-0.022s-0.079 0.008-0.108 0.022c-0.16 0.075-0.16 0.074-0 0.138 0.029 0.015 0.069 0.022 0.108 0.022s0.079-0.008 0.108-0.022c0.015-0.007 0.027-0.016 0.036-0.027s0.016-0.026 0.016-0.042z" fill="#000"/>
              	<path d="M16.714 8.752c-0.011-0.011-0.026-0.017-0.041-0.018s-0.029 0.001-0.045 0.007c-0.031 0.011-0.064 0.033-0.092 0.061s-0.050 0.061-0.061 0.092c-0.060 0.166-0.060 0.165 0.097 0.097 0.031-0.011 0.064-0.033 0.092-0.061s0.050-0.061 0.061-0.092c0.005-0.016 0.008-0.031 0.006-0.045s-0.007-0.029-0.018-0.041zM16.526 8.563c-0.011-0.011-0.026-0.017-0.041-0.018s-0.029 0.001-0.045 0.007c-0.031 0.011-0.064 0.033-0.092 0.061s-0.050 0.061-0.061 0.092c-0.060 0.166-0.060 0.165 0.097 0.097 0.031-0.011 0.064-0.033 0.092-0.061s0.050-0.061 0.061-0.092c0.005-0.016 0.008-0.031 0.006-0.045s-0.007-0.029-0.018-0.041z" fill="#000"/>
              	<path d="M15.215 8.582c-0.011 0.011-0.017 0.026-0.018 0.041s0.001 0.029 0.007 0.045c0.011 0.031 0.033 0.064 0.061 0.092s0.061 0.050 0.092 0.061c0.166 0.060 0.165 0.060 0.097-0.097-0.011-0.031-0.033-0.064-0.061-0.092s-0.061-0.050-0.092-0.061c-0.016-0.005-0.031-0.008-0.045-0.006s-0.029 0.007-0.041 0.018zM15.026 8.771c-0.011 0.011-0.017 0.026-0.018 0.041s0.001 0.029 0.007 0.045c0.011 0.031 0.033 0.064 0.061 0.092s0.061 0.050 0.092 0.061c0.166 0.060 0.165 0.060 0.097-0.097-0.011-0.031-0.033-0.064-0.061-0.092s-0.061-0.050-0.092-0.061c-0.016-0.005-0.031-0.008-0.045-0.006s-0.029 0.007-0.041 0.018z" fill="#000"/>
              	<path d="M15.046 10.081c0.011 0.011 0.026 0.017 0.041 0.018s0.029-0.001 0.045-0.007c0.031-0.011 0.064-0.033 0.092-0.061s0.050-0.061 0.061-0.092c0.060-0.166 0.060-0.165-0.097-0.097-0.031 0.011-0.064 0.033-0.092 0.061s-0.050 0.061-0.061 0.092c-0.005 0.016-0.008 0.031-0.006 0.045s0.007 0.029 0.018 0.041zM15.234 10.269c0.011 0.011 0.026 0.017 0.041 0.018s0.029-0.001 0.045-0.007c0.031-0.011 0.064-0.033 0.092-0.061s0.050-0.061 0.061-0.092c0.060-0.166 0.060-0.165-0.097-0.097-0.031 0.011-0.064 0.033-0.092 0.061s-0.050 0.061-0.061 0.092c-0.005 0.016-0.008 0.031-0.006 0.045s0.007 0.029 0.018 0.041z" fill="#000"/>
              	<path d="M16.544 10.251c0.011-0.011 0.017-0.026 0.018-0.041s-0.001-0.029-0.007-0.045c-0.011-0.031-0.033-0.064-0.061-0.092s-0.061-0.050-0.092-0.061c-0.166-0.060-0.165-0.060-0.097 0.097 0.011 0.031 0.033 0.064 0.061 0.092s0.061 0.050 0.092 0.061c0.016 0.005 0.031 0.008 0.045 0.006s0.029-0.007 0.041-0.018zM16.732 10.062c0.011-0.011 0.017-0.026 0.018-0.041s-0.001-0.029-0.007-0.045c-0.011-0.031-0.033-0.064-0.061-0.092s-0.061-0.050-0.092-0.061c-0.166-0.060-0.165-0.060-0.097 0.097 0.011 0.031 0.033 0.064 0.061 0.092s0.061 0.050 0.092 0.061c0.016 0.005 0.031 0.008 0.045 0.006s0.029-0.007 0.041-0.018z" fill="#000"/>
              	<path d="M15.836 15.642c1.489-0.924 2.937-1.076 4.981-0.172 1.498 0.898 2.209 2.152 2.93 3.487-1.776 0.975-3.423 1.127-4.952 0.519-1.566-0.917-2.726-2.127-2.959-3.834z" fill="#4f1907"/>
              	<path d="M16.043 15.666c-1.489-0.924-3.002-1.090-5.046-0.185-1.498 0.898-2.209 2.152-2.93 3.487 1.776 0.975 3.423 1.127 4.952 0.519 1.566-0.917 2.791-2.114 3.025-3.821z" fill="#4f1907"/>
              	<path d="M15.956 24.959c0.111 0.328 0.149 0.716 0.111 1.168 0.021 0.47-0.024 0.906-0.102 1.326-0.147-0.355-0.236-0.828-0.232-1.335 0.004-0.517 0.093-0.989 0.223-1.159z" fill="#050505" opacity="0.99"/>
              	<path d="M17.134 26.192c0 0.22-0.179 0.399-0.399 0.399s-0.399-0.179-0.399-0.399c0-0.22 0.179-0.399 0.399-0.399s0.399 0.179 0.399 0.399z" fill="#fff" opacity="0.99"/>
              	<path d="M14.832 15.083l2.184-0.007-1.085 0.531z" fill="#863704"/>
              	<path d="M15.461 17.23l0.943-0.003 0.238 0.387c-0.594-0.131-1.026-0.104-1.423 0.026z" fill="#000" opacity="0.99"/>
              </svg>
            </a>

            <a href="https://www.npmjs.com/">
              <svg style={styles.logo} className="hvr-grow" height="32" width="82" version="1.1" viewBox="0 0 82 32">
              	<path d="M0 0h82.286v27.429h-41.143v4.571h-18.286v-4.571h-22.857v-27.429zM4.571 22.857h9.143v-13.714h4.571v13.714h4.571v-18.286h-18.286v18.286zM27.429 4.571v22.857h9.143v-4.571h9.143v-18.286h-18.286zM36.571 9.143h4.571v9.143h-4.571v-9.143zM50.286 4.571v18.286h9.143v-13.714h4.571v13.714h4.571v-13.714h4.571v13.714h4.571v-18.286h-27.429z" fill="#000"/>
              	<path d="M4.571 22.857h9.143v-13.714h4.571v13.714h4.571v-18.286h-18.286z" fill="#fff"/>
              	<path d="M27.429 4.571v22.857h9.143v-4.571h9.143v-18.286h-18.286zM41.143 18.286h-4.571v-9.143h4.571v9.143z" fill="#fff"/>
              	<path d="M50.286 4.571v18.286h9.143v-13.714h4.571v13.714h4.571v-13.714h4.571v13.714h4.571v-18.286z" fill="#fff"/>
              </svg>
            </a>

          </div>



          <p>
            {'Check out some of my '}

              <Link
                style={{color: 'white',textDecoration: 'none', fontWeight: 600, fontSize: 32, fontFamily: '"Raleway", sans-serif', marginLeft: 4}}
                to="/projects"
              >
              <span className="hvr-grow"> work. </span>
              </Link>

          </p>

          <p>
            I'm looking for a job that will offer mentoring and challenge.
            I want to work with an experienced team so I can continue to learn at a fast pace.
            I'm more than willing to relocate for the right opportunity.
          </p>


        </div>

      </div>
    </div>

    );
  }

});

export default About;
