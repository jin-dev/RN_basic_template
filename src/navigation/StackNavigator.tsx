import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Items from '../screens/Items';
import Profile from '../screens/Profile';
import LogIn from '../screens/LogIn';
import Detail from '../common/Detail_temp';
const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#000000',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Item" component={Items} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
