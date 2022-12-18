import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

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

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null //header를 전부 없앨 수 있음 
        }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
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




export default App;
