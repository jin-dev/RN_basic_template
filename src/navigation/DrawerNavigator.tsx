import React, { useEffect} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { View, Text, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {MainStackNavigator} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/AntDesign';
import { isPostfixUnaryExpression } from 'tsutils';

const Drawer = createDrawerNavigator();


function LogoTitle( {navigation}) {



  return (
    <View style={{
      flexDirection:"row",
      alignItems:"center",
      width:"100%",
      marginVertical:30
  }}>
      <View style={{
          flexDirection:"row",
          alignItems:"center",
          elevation:2,
          width:"85%",
          backgroundColor:"#FFF",
          paddingHorizontal:20,
          height:35,
          borderRadius:10,
          marginLeft:1
      }}>
      
              <TextInput
                  placeholder="Search unique furniture..."
                  style={{
                 
                  paddingHorizontal:10,
                  fontSize:12
              }}
              />
              </View>
              
              
              <View style={{
                  alignItems:"flex-end",
                  elevation:2,
                  width:"15%",
                  backgroundColor:"#FFF",
                  marginLeft:60,
                  height:35,
                  borderRadius:10,
                  justifyContent:"center"
              }}>
                  
                   <Icon name="login" size={30}  onPress={() => navigation.navigate('LogIn')} />
              </View>
     
  </View>
  );
}


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="User" component={MainStackNavigator} />
      <Drawer.Screen name="Notification" component={BottomTabNavigator} 
      options={ { headerTitle: props => <LogoTitle {...props} /> }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
