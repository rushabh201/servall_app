/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import App from './src/index';
 import {name as appName} from './app.json';
 import { LogBox } from 'react-native';
 
 LogBox.ignoreLogs([
     '`new NativeEventEmitter()` was called with a non-null argument',
     'Found screens with the same name nested inside one another.'
 ]);
 
 AppRegistry.registerComponent(appName, () => App);
 