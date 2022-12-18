import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const ScreenA = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('Screen_B')
        // navigation.replace('Screen_B');
    }
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                ScreenA
            </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? "#ddd" : "#0f0" })}
            >
                <Text style={styles.text}>
                    Go to ScreenB
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

export default ScreenA;