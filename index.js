/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import routerConfig from './src/router/routerConfig';
import {name as appName} from './app.json';

import database from './src/models/database';

const App = routerConfig({database});

AppRegistry.registerComponent(appName, () => App);
