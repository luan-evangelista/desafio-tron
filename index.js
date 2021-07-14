/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/config/ReactotronConfig';

// if (__DEV__) {
//    require('react-devtools');
//  }

// if (DEV) {
//     import('./src/config/ReactotronConfig').then(() =>
//       console.log('Reactotron Configured'),
//     );
//   }  


AppRegistry.registerComponent(appName, () => App);
