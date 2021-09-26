import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Users from '../screens/Users';
import Notifications from '../screens/Notifications';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Profile" component={Users} />
      <BottomTab.Screen name="Notifications" component={Notifications} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
