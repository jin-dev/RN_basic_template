import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Items from '../screens/Items';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Item" component={Items} />
      <Stack.Screen name="Profile" component={Profile} />
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
