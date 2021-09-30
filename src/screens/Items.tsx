import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import AccountList from '../components/AccountList';

export default function Items( {navigation}) {

  useEffect(() => {
    console.log("ITem navi: ", navigation);
  }, [])

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Items !</Text>
      <Button title="Go to Log-In" onPress={() => navigation.navigate('LogIn')} />
      <AccountList />
    </View>
  );
}
