import React from 'react';
import {View, Text} from 'react-native';
import Message from '../components/Message';
export default function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Text>Profile !</Text>
      <Message />
    </View>
  );
}
