/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CouchesTemp from '../common/Couches_temp';

export default function Notifications({navigation}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            fontSize: 18,
            color: '#4f4a4a',
            fontFamily: "Bold",
          }}>
          {' '}
          Modern
        </Text>
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 5,
            backgroundColor: '#4f4a4a',
          }}
        />
        <Text
          style={{
            fontSize: 9,
            color: '#4f4a4a',
          }}>
          {' '}
          Good Quality Items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CouchesTemp
          src={require('../assets/images/1.png')}
          name="Beautiful Couches"
        />

        <CouchesTemp
          src={require('../assets/images/2.png')}
          name="Autobe best chair"
        />
        <CouchesTemp
          src={require('../assets/images/12.png')}
          name="Beautiful Couches"
        />
      </ScrollView>
    </ScrollView>
  );
}
