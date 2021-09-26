import React from 'react';
import {View, Button} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
export default function Users({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        title="Toggle drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />

      <Button
        title="Close drawer"
        onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
      />
    </View>
  );
}
