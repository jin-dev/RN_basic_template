import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewTemp = (props: any) => {

    const [ value, setValue ] = useState(Math.random()* 500);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        width: 240,
        backgroundColor: '#ffffff',
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 20,
        marginLeft: 2,
        borderRadius: 10,
      }}>
      <View>
        <Image
          source={props?.src}
          style={{height: 50, width: 60, borderRadius: 10}}
        />
      </View>

      <View style={{
               width:"65%",
               justifyContent:"flex-end",
               paddingHorizontal:10,
               height:"100%"
           }}>
               <Text style={{
                   fontSize:8,
                

               }}>
                   some description.....
               </Text>
               <Text style={{
                   fontSize:11,
                  
               }}>
                   {`$ ${value.toFixed(2)}`}
               </Text>

           </View>
           <View style={{
               width:"5%",
               justifyContent:"flex-end",
               height:"100%"
           }}>
               <Image
                source={require('../assets/images/add.png')}
                style={{
                    height:17,
                    width:17
                }}
               />
           </View>
    </View>
  );
};

export default NewTemp;
