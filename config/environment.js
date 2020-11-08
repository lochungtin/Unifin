//environment.js
var environments = {
    staging: {
      FIREBASE_API_KEY: "AIzaSyCYe7l9Kdq2cvBnNiYC-99t3FWNznuy_68",
      FIREBASE_AUTH_DOMAIN: "unifin2.firebaseapp.com",
      FIREBASE_DATABASE_URL: "https://unifin2.firebaseio.com",
      FIREBASE_PROJECT_ID: "unifin2.appspot.com",
      FIREBASE_STORAGE_BUCKET: "654438000042",
      FIREBASE_MESSAGING_SENDER_ID: '654438000042',
      GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyD6_wf8zUqGWcZgOfq4Scbe6XlOoVFJsHE'
    },
    production: {
      // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
  };
  
  function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
      return 'staging';
    } else if (releaseChannel === 'staging') {
      return 'staging';
    } else {
      return 'staging';
    }
  }
  function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
  }
  var Environment = getEnvironment(getReleaseChannel());
  export default Environment;