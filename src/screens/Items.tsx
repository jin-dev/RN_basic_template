import React from 'react';
import {View, Text} from 'react-native';
import AccountList from '../components/AccountList';

export default function Items() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Items !</Text>
      <AccountList />
    </View>
  );
}
