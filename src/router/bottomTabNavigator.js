import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, Text, TouchableOpacity} from 'react-native';
import config from '../config';

/**
 * Screen
 */

import * as screenName from './screenNames';
import ReportTab from '../screens/HazardForm';
import ListHazard from '../screens/ListHazard';
import HazardDetail from '../screens/HazardDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabNavigator(props) {
  const {database} = props;
  return (
    <Tab.Navigator
      initialRouteName={screenName.REPORT_TAB}
      backBehavior={'none'}
      screenOptions={({route}) => {
        let tabBarVisible = true;
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
              case screenName.REPORT_TAB:
                iconName = require('../assets/alert-octagon.png');
                break;
              case screenName.LIST_REPORT:
                iconName = require('../assets/format-list-bulleted-triangle.png');
                break;
              default:
                iconName = null;
                break;
            }

            const sizeValue = focused ? size + 3 : size;

            return (
              <Image
                source={iconName}
                style={{width: sizeValue, height: sizeValue}}
                tintColor={color}
              />
            );
          },
          tabBarLabel: ({focused, color}) => {
            let tabName;
            switch (route.name) {
              case screenName.REPORT_TAB:
                tabName = 'Hazard Report';
                break;
              case screenName.LIST_REPORT:
                tabName = 'My Submitted Report';
                break;
              default:
                tabName = '';
                break;
            }

            return (
              <Text
                style={{
                  color,
                  fontSize: config.fontSize.small,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                {tabName}
              </Text>
            );
          },
          tabBarVisible,
          tabBarButton: props => <TouchableOpacity {...props} />,
        };
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: config.color.common.darkRed,
        },
      }}>
      <Tab.Screen
        name={screenName.REPORT_TAB}
        component={ReportTab}
        initialParams={{database}}
      />
      <Tab.Screen name={screenName.LIST_REPORT}>
        {function() {
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
                initialParams={{database}}
              />
              <Stack.Screen
                name={screenName.DETAIL_HAZARD_SCREEN}
                component={HazardDetail}
                initialParams={{database}}
              />
            </Stack.Navigator>
          );
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
