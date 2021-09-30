/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CouchesTemp from '../common/Couches_temp';
import NewTemp from '../common/New_temp';
import Best from '../common/Best_Seller_temp';
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

      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#4f4a4a',
            fontSize: 20,
          }}>
          New Arrivals
        </Text>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: '#4f4a4a',
            marginHorizontal: 4,
          }}
        />
        <Text
          style={{
            fontSize: 10,
            color: '#4f4a4a',
          }}>
          Good Quality items
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <NewTemp src={require('../assets/images/sofa.png')} />
        <NewTemp src={require('../assets/images/lr.png')} />
        <NewTemp src={require('../assets/images/sofa.png')} />
      </ScrollView>


          <Text style={{
            marginTop:20,
            color: "#4f4a4a",
            fontSize: 18,
            
          }}> Best Seller </Text>


      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal>


          <Best />
          <Best />
          <Best />


      </ScrollView>
    </ScrollView>
  );
}
