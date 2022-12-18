import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
// const Stack = createStackNavigator();
// const Tab=createBottomTabNavigator();
// const Tab=createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

  // const icon=<FontAwesome5 name={'comments'} solid/>;

  return(
  
    
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle:{
            backgroundColor:"#e6e6e6",
            width:250,
          },
          drawerPosition:"right",
          drawerType:"front",//front/slide
          overlayColor:'#0000090',
          headerShown:true,
          swipeEnabled:true,
          gestureEnabled:true,
          headerTitle:'center',
          headerStyle:{
            backgroundColor:'#0080ff',
          },
          headerTintColor:'#ffffff',
          headerTitleStyle:{
            fontSize:24,
            fontWeight:'bold'
          }
        }}
      >
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            title:'screen_A_title',
            drawerIcon:({focused})=>(
              <FontAwesome5 
                name="btc"
                size={focused?25:20}
                color={focused?'#0080ff':'#999999'}
                
                />
            )
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            title:'screen_B_title',
            drawerIcon:({focused})=>(
              <FontAwesome5 
                name="btc"
                size={focused?25:20}
                color={focused?'#0080ff':'#999999'}
                
                />
            )
          }}
          initialParams={{ItemName:'Item from Drawer', ItemId:12}}
        />
      </Drawer.Navigator>
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
