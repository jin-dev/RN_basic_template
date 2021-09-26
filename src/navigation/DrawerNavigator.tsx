import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainStackNavigator} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="User" component={MainStackNavigator} />
      <Drawer.Screen name="Notification" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
