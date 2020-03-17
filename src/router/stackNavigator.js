import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

/**
 * Screen
 */
import ListHazard from '../screens/ListHazard';
import HazardDetail from '../screens/HazardDetail';
import * as screenName from './screenNames';

import config from '../config';

const Stack = createStackNavigator();

export function SubmittedReportStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={screenName.MY_SUBMITTED_REPORT_SCREEN}
      headerMode={'float'}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: config.color.common.darkRed},
      }}>
      <Stack.Screen
        name={screenName.MY_SUBMITTED_REPORT_SCREEN}
        component={ListHazard}
      />
      <Stack.Screen
        name={screenName.DETAIL_HAZARD_SCREEN}
        component={HazardDetail}
      />
    </Stack.Navigator>
  );
}
