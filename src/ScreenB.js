import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable} from 'react-native';

  const ScreenB=({route,navigation})=>{
      const { ItemName, ItemId } = route.params;
    const onPressHandler = () => {
      navigation.navigate('Screen_A',{Message:"message to screenA"})
    //   navigation.goBack();
    //   navigation.setParams({ItemId:14})
    }
    return(
      <View style={styles.body}>
        <Text style={styles.text}>
          ScreenB
        </Text>
        <Pressable
          onPress={onPressHandler}
          style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
          options={{
            header: () => null
          }}
        >
          <Text style={styles.text}>{JSON.stringify(ItemName)}</Text>
          <Text style={styles.text}>ID:{ItemId}</Text>
        </Pressable>
      </View>
    )
  }
 
  const styles =StyleSheet.create({
    body:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    text:{
      fontSize:40,
      fontWeight:'bold',
      margin:10,
    }
  })

export default ScreenB;