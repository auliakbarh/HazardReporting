import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';

import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

import SimpleApp from './bottomTabNavigator';

const RouterApp = props => {
  return () => (
    <NavigationContainer>
      <SimpleApp {...props} />
    </NavigationContainer>
  );
};

export default RouterApp;
