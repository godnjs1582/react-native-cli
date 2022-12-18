import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable} from 'react-native';

  const ScreenB=({navigation})=>{
    const onPressHandler = () => {
      navigation.navigate('Screen_A')
      // navigation.goBack();
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
          <Text style={styles.text}>
            Go to ScreenA
          </Text>
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