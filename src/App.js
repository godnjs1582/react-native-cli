import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, Pressable, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DancingScript_400Regular } from '@expo-google-fonts/dancing-script';
// import { useFonts } from 'native'
// import AppLoading from 'expo-app-loading';

const App = () => {
  // let [fontsLoaded, error]=useFonts({
  //   DancingScript_400Regular,
  // })

  // if(!fontsLoaded){
  //   return 
  //   <View>
  //     <Text>loading</Text>
  //   </View>
  // }

  return(
    <View style={styles.container}>
      <Text
      style={{
        // fontFamily:'DancingScrip_400Regular',
        fontSize:40,
      }}
      >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    fontSize:40,
    // fontWeight:'bold',
    margin:10,
    fontFamily:'Unbounded-VariableFont_wght',
  }
})




export default App;
